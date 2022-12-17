import {Component} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {PartsAndSupportService} from "../../core/parts-and-support.service";
import {mergeMap, tap} from "rxjs";
import {IOrder} from "../../models/IOrder";
import {Utils} from "../../Utils";
import {ISupportRequest} from "../../models/ISupportRequest";
import {FileHandlerService} from "../../core/file-handler.service";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import * as http from "http";
import {FileSaverService} from "ngx-filesaver";
import {text} from "express";

interface ISupportRequestDetails {
  rawTime: number;
  date: string;
  time: string;
  status: string;
}

@Component({
  selector: 'app-support-details',
  templateUrl: './support-request-details.component.html',
  styleUrls: ['./support-request-details.component.css']
})
export class SupportRequestDetailsComponent {
  supportRequest!: ISupportRequestDetails[];
  logFileReference!: string;
  isBusy = false;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private partsAndSupportService: PartsAndSupportService,
    private fileHandler: FileHandlerService,
    private http: HttpClient,
    private fileSaver: FileSaverService) {
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.pipe(
      mergeMap(supportRequestId => this.partsAndSupportService.getSupportRequestById$(supportRequestId.get('supportRequestNo')!))
    ).subscribe(e => this.supportRequest = this.getOrderStatusList(e.data() as ISupportRequest))
  }

  onBack() {
    this.router.navigate(['/support/summary'])
  }

  onDownload() {
    this.isBusy = true;
    this.fileHandler.downloadLogFile$(this.logFileReference).pipe(
      // tap(e=>console.log(e)),
      mergeMap(downloadUrl => this.http.get(downloadUrl, {observe: 'response', responseType: 'blob'}))
    ).subscribe(file => {
      this.fileSaver.save(file.body, 'log file.log');
      this.isBusy = false;
    });

  }

  getOrderStatusList(order: ISupportRequest): ISupportRequestDetails[] {
    if (order.logFileReference.length > 0) {
      this.logFileReference = order.logFileReference;
    }

    let output: ISupportRequestDetails[] = [];

    for (let status of Object.entries(order.status)) {
      output.push({
        rawTime: +status[0],
        date: Utils.milisToDate(+status[0]),
        time: Utils.milisToTime(+status[0]),
        status: status[1]
      } as ISupportRequestDetails)
    }

    output.sort((e1, e2) => {
      return e2.rawTime - e1.rawTime;
    })

    return output;
  }
}
