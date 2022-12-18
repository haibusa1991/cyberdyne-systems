import {Component, OnInit} from '@angular/core';
import {ICatalogCard} from "../../models/ICatalogCard";
import {ContentProviderService} from "../../core/services/content-provider.service";
import {ActivatedRoute, Router} from "@angular/router";
import {mergeMap} from "rxjs";
import {Utils} from "../../Utils";

@Component({
  selector: 'app-products-catalog',
  templateUrl: './products-catalog.component.html',
  styleUrls: ['./products-catalog.component.css']
})
export class ProductsCatalogComponent implements OnInit {

  currentModels: ICatalogCard[] = [];
  deprecatedModels: ICatalogCard[] = [];

  constructor(private contentProvider: ContentProviderService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.pipe(
      mergeMap(catalogId => this.contentProvider
        .getProductCatalogByCategory$(catalogId.get('catalog')!)
      )).subscribe({
      next: n => {
        if (!n) {
          this.router.navigate(['/404']);
        }
        n.isDeprecated ? this.deprecatedModels.push(n) : this.currentModels.push(n);
        Utils.sortProductsByPageOrder(this.currentModels)
        Utils.sortProductsByPageOrder(this.deprecatedModels)
      }
    });
  }

}
