import {Component, OnInit} from '@angular/core';
import {IProductCatalog} from "../../models/IProductCatalog";
import {ContentProviderService} from "../../core/services/content-provider.service";
import {Utils} from "../../Utils";
import {ActivatedRoute, NavigationStart, Route, Router} from "@angular/router";
import {filter, map} from "rxjs";
import {logMessages} from "@angular-devkit/build-angular/src/builders/browser-esbuild/esbuild";

@Component({
  selector: 'app-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {
  products: IProductCatalog[]=[];
  isChildActive = false;

  constructor(private contentProvider:ContentProviderService) {
  }

  ngOnInit(): void {

    this.contentProvider.getProductCatalogs$().subscribe({
      next: e=> {
        this.products.push(e);
        Utils.sortProductsByPageOrder(this.products);
      }
    });
  }



}
