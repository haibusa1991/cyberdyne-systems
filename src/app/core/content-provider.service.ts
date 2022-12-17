import {Injectable} from '@angular/core';
import {Observable, of} from "rxjs";
import {IProductCatalog} from "../models/IProductCatalog";
import {getCatalogById, getCatalogs, getProductById} from "./content";
import {IProductDetails} from "../models/IProductDetails";
import {ICatalogCard} from "../models/ICatalogCard";

@Injectable({
  providedIn: 'root'
})
export class ContentProviderService {

  constructor() {
  }

  getProductCatalogs$(): Observable<IProductCatalog> {
    return of(...getCatalogs());
  }

  getProductDetailsById$(productId: string): Observable<IProductDetails> {
    return of(getProductById(productId));
  }

  getProductCatalogById$(productId:string) : Observable<ICatalogCard> {
    return of(...getCatalogById(productId));
  }
}

