import {Injectable} from '@angular/core';
import {Observable, of} from "rxjs";
import {IProductCatalog} from "../../models/IProductCatalog";
// import {getCatalogById, getCatalogs, getProductById} from "./content";
import {IProductDetails} from "../../models/IProductDetails";
import {ICatalogCard} from "../../models/ICatalogCard";
import {environment} from "../../../environments/environment";
import {initializeApp} from "firebase/app";
import {collection, getDocs, getFirestore, query, where} from "firebase/firestore";
import {getAuth} from "firebase/auth";
import {fromPromise} from "rxjs/internal/observable/innerFrom";
import {IOrder} from "../../models/IOrder";
import {ISparePart} from "../../models/ISparePart";

@Injectable({
  providedIn: 'root'
})
export class ContentProviderService {
  private readonly dbConfig = environment.dbConfig;
  private readonly catalogsTable = environment.catalogsTable;
  private readonly productsTable = environment.productsTable;
  private readonly app;
  private readonly firestoreInst;


  constructor() {
    this.app = initializeApp(this.dbConfig);
    this.firestoreInst = getFirestore(this.app);
  }

  getProductCatalogs$(): Observable<IProductCatalog> {
    let catalogs = this.catalogsTable;
    let q = query(collection(this.firestoreInst, catalogs))
    return new Observable(catalog => {
      fromPromise(getDocs(q))
        .subscribe(queryResults => {
          if (queryResults.empty) {
            catalog.next(undefined);
            return;
          }
          queryResults.forEach(result => {
            catalog.next(result.data() as IProductCatalog)
          });
        })
    });
  }

  getProductDetailsById$(productId: string): Observable<IProductDetails> {
    let q = query(collection(this.firestoreInst, this.productsTable), where('id', '==', productId))
    return new Observable(product => {
      fromPromise(getDocs(q))
        .subscribe(queryResults => {
          if (queryResults.empty) {
            product.next(undefined);
            return;
          }
          queryResults.forEach(result => {
            product.next(result.data() as IProductDetails)
          });
        })
    });
  }

  getProductCatalogByCategory$(productCategory:string) : Observable<ICatalogCard> {
    let q = query(collection(this.firestoreInst, `${this.catalogsTable}/${productCategory}/catalog-contents`));
    return new Observable(productList => {
      fromPromise(getDocs(q))
        .subscribe(queryResults => {
          if (queryResults.empty) {
            productList.next(undefined);
            return;
          }
          queryResults.forEach(result => {
            productList.next(result.data() as ICatalogCard)
          });
        })
    });
  }
}

