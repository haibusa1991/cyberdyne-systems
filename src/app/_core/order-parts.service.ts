import {Injectable} from '@angular/core';
import {collection, doc, getDoc, getFirestore, query, where, getDocs, setDoc, addDoc} from "firebase/firestore";
import {fromPromise} from "rxjs/internal/observable/innerFrom";
import {environment} from "../../environments/environment";
import {initializeApp} from "firebase/app";
import {from, map, mergeMap, Observable, of, pipe, switchMap, tap, throwError} from "rxjs";
import firebase from "firebase/compat";
import QuerySnapshot = firebase.firestore.QuerySnapshot;
import {getStorage, ref, getDownloadURL, getBlob} from "firebase/storage";
import {ISparePart} from "../_models/ISparePart";
import DocumentData = firebase.firestore.DocumentData;
import {IUserRegistration} from "../_models/IUserRegistration";
import {getAuth} from "firebase/auth";
import {IOrder} from "../_models/IOrder";
import firestore = firebase.firestore;

@Injectable({
  providedIn: 'root'
})
export class OrderPartsService {
  private readonly dbConfig = environment.dbConfig;
  private readonly partsTable = environment.sparePartsTable;
  private readonly app;


  constructor() {
    this.app = initializeApp(this.dbConfig);
  }

  getPartInfoByPartNo$(partNo: string): Observable<ISparePart> {
    let firestore = getFirestore(this.app);
    let q = query(collection(firestore, this.partsTable), where('partNo', '==', partNo))
    return new Observable(partData => {
      fromPromise(getDocs(q))
        .subscribe(queryResults => {
          if (queryResults.empty) {
            partData.next(undefined);
            return;
          }
          queryResults.forEach(result => {
            partData.next(result.data() as ISparePart)
          });
        })
    });
  }

  putPartRequest$(partNo: string) :Observable<DocumentData> {
    let db = getFirestore(this.app);

    let usersTable = 'orders/' + getAuth(this.app).currentUser?.uid + '/user-orders';
    let table = collection(db, usersTable)

    let payload = {
      added: Date.now(),
      isCancelled: true,
      partNo: partNo,
      status: {[Date.now()]: 'Order received'}
    } as IOrder;

    return fromPromise(addDoc(table, payload));
  }


  getAllUserOrders$(): Observable<IOrder> {
    let firestore = getFirestore(this.app);
    let ordersTable = 'orders/' + getAuth(this.app).currentUser?.uid + '/user-orders';
    let q = query(collection(firestore, ordersTable))
    return new Observable(partData => {
      fromPromise(getDocs(q))
        .subscribe(queryResults => {
          if (queryResults.empty) {
            partData.next(undefined);
            return;
          }
          queryResults.forEach(result => {
            partData.next(result.data() as IOrder)
          });
        })
    });
  }

}
