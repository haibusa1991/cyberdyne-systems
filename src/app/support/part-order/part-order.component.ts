import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {PartsAndSupportService} from "../../core/services/parts-and-support.service";
import {ISparePart} from "../../models/ISparePart";
import {mergeMap, Observable, switchMap} from "rxjs";
import firebase from "firebase/compat";
import DocumentData = firebase.firestore.DocumentData;

@Component({
  selector: 'app-order-parts',
  templateUrl: './part-order.component.html',
  styleUrls: ['./part-order.component.css']
})
export class PartOrderComponent implements OnInit {
  canSearch = false;
  isBusy = false;
  hasOrdered = false;


  orderReference!:DocumentData | null;
  lastSearchQuery!: string | null;
  partData!: ISparePart | undefined;

  searchForm = new FormGroup({
    partNo: new FormControl('', Validators.required),
  })


  constructor(private partsService: PartsAndSupportService) {
  }

  ngOnInit(): void {
    this.searchForm.statusChanges.subscribe(e => {
      this.canSearch = e === 'VALID';
    })
  }

  onSearch() {
    this.isBusy = true;
    let query = this.searchForm.controls.partNo.value ? this.searchForm.controls.partNo.value?.toLowerCase() : '';
    this.lastSearchQuery = this.searchForm.controls.partNo.value;

    this.partsService.getPartInfoByPartNo$(query).subscribe({
      next: n => {
        if (!n) {
          this.isBusy = false;
          this.partData = undefined;
          return;
        }
        this.isBusy = false;
        this.partData = n;
      }
    });
  }

  onOrderOrderClick() {
    this.isBusy = true
    this.hasOrdered = true;
    this.partsService.putPartOrder$(this.searchForm.controls.partNo.value?.toLowerCase() || '').subscribe({
      next: n => {
        this.isBusy = false;
        this.orderReference = n;
      },
      error: e => {
        this.isBusy = false;
        this.orderReference= null;
      }
    });
  }
}
