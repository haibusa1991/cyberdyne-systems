import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {OrderPartsService} from "../../_core/order-parts.service";
import {ISparePart} from "../../_models/ISparePart";
import {mergeMap, Observable, switchMap} from "rxjs";
import firebase from "firebase/compat";
import DocumentData = firebase.firestore.DocumentData;

@Component({
  selector: 'app-order-parts',
  templateUrl: './order-parts.component.html',
  styleUrls: ['./order-parts.component.css']
})
export class OrderPartsComponent implements OnInit {
  canSearch = false;
  isBusy = false;
  hasOrdered = false;


  orderReference!:DocumentData | null;
  lastSearchQuery!: string | null;
  partData!: ISparePart | undefined;

  searchForm = new FormGroup({
    partNo: new FormControl('', Validators.required),
  })


  constructor(private partsService: OrderPartsService) {
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
    this.partsService.putPartRequest$(this.searchForm.controls.partNo.value?.toLowerCase() || '').subscribe({
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
