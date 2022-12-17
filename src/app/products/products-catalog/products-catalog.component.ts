import {Component, OnInit} from '@angular/core';
import {ICatalogCard} from "../../models/ICatalogCard";
import {ContentProviderService} from "../../core/content-provider.service";
import {ActivatedRoute} from "@angular/router";
import {mergeMap} from "rxjs";

@Component({
  selector: 'app-products-catalog',
  templateUrl: './products-catalog.component.html',
  styleUrls: ['./products-catalog.component.css']
})
export class ProductsCatalogComponent implements OnInit {

  currentModels: ICatalogCard[] = [];
  deprecatedModels: ICatalogCard[] = [];

  constructor(private contentProvider: ContentProviderService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.pipe(
      mergeMap(catalogId => this.contentProvider
        .getProductCatalogById$(catalogId.get('catalog')!)
      )).subscribe({
      next: n => {
        n.isDeprecated ? this.deprecatedModels.push(n) : this.currentModels.push(n);
      }
    });
  }

}
