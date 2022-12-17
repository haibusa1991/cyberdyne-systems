import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {exactLength, serialNumber} from "../../core/formValidators";
import {FileHandlerService} from "../../core/file-handler.service";
import {PartsAndSupportService} from "../../core/parts-and-support.service";
import {ISupportRequest} from "../../models/ISupportRequest";
import {switchMap} from "rxjs";
import firebase from "firebase/compat";
import DocumentData = firebase.firestore.DocumentData;

@Component({
  selector: 'app-request-support',
  templateUrl: './support-request.component.html',
  styleUrls: ['./support-request.component.css']
})
export class SupportRequestComponent implements OnInit {
  readonly noFileChosen = 'No file chosen';

  isBusy = false;
  hasRequested = false;
  logFilename: string = this.noFileChosen;
  isFileTooBig = false;
  canSubmit = false;

  documentData: DocumentData | null = null;
  private logFile: File | null = null;

  requestForm = new FormGroup({
    model: new FormControl('', [Validators.required]),
    serial: new FormControl('', [Validators.required, serialNumber(), exactLength(16)]),
    description: new FormControl('', [Validators.required, Validators.minLength(10)]),
    log: new FormControl(''),
  })


  constructor(private fileService: FileHandlerService,
              private partsAndSupport: PartsAndSupportService) {
  }

  ngOnInit(): void {
    this.requestForm.statusChanges.subscribe(e => {
      this.canSubmit = e === 'VALID';
    })
  }


  onFileChange(e: any) {
    this.logFile = e.target.files[0];

    this.isFileTooBig = this.logFile ? this.logFile.size > 2048 : false;
    this.logFilename = this.logFile ? this.logFile.name : this.noFileChosen;
  }

  onRequest() {
    this.isBusy = true;
    let formData = this.requestForm.value as ISupportRequest;

    if (this.logFile) {
      this.fileService.uploadLogFile$(this.logFile!).pipe(
        switchMap(fileLink => {
          return this.partsAndSupport.putSupportRequest$(formData, fileLink.ref.fullPath);
        })
      ).subscribe({
        next: n => {
          this.isBusy = false
          this.hasRequested = true;
          this.documentData = n
        },
        error: () => {
          this.isBusy = false
          this.hasRequested = true;
        }
      });
    } else {
      this.partsAndSupport.putSupportRequest$(formData).subscribe({
        next: n => {
          this.isBusy = false
          this.hasRequested = true;
          this.documentData = n
        },
        error: () => {
          this.isBusy = false
          this.hasRequested = true;
        }
      });
    }
  }

  onClick() {
    console.log('clicked!')
  }
}
