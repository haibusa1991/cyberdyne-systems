import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {OrderPartsService} from "../../_core/order-parts.service";
import {ISparePart} from "../../_models/ISparePart";
import {mergeMap, Observable, switchMap} from "rxjs";

@Component({
  selector: 'app-order-parts',
  templateUrl: './order-parts.component.html',
  styleUrls: ['./order-parts.component.css']
})
export class OrderPartsComponent implements OnInit {
  hasFoundPart = false; //todo
  hasSearched = false;
  buttonText = 'Search'
  canSearch = false;
  isBusy = false;
  hasLoadedPhoto = false;

  lastSearchQuery: string = '';

  partData!: ISparePart;

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
    this.lastSearchQuery = this.searchForm.controls.partNo.value || '';


    this.partsService.getPartInfoByPartNo(query).subscribe({
      next: n => {
        if (!n) {
          this.isBusy = false;
          this.hasFoundPart = false;
          this.hasSearched = true;
          return;
        }

        this.isBusy = false;
        this.hasFoundPart = true;
        this.partData = n;
        this.partsService.getPartImageUrl(this.partData.image).subscribe(e => {
          this.partData.image = e;
          this.hasLoadedPhoto = true;
        })

      }
    })

  }

  onOrderOrderClick() {

  }
}
