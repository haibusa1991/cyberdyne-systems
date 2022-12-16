import {Injectable} from '@angular/core';
import {collection, getFirestore, query, where, getDocs, addDoc, doc, getDoc} from "firebase/firestore";
import {fromPromise} from "rxjs/internal/observable/innerFrom";
import {environment} from "../../environments/environment";
import {initializeApp} from "firebase/app";
import {Observable} from "rxjs";
import {ISparePart} from "../_models/ISparePart";
import {getAuth} from "firebase/auth";
import {IOrder} from "../_models/IOrder";
import firebase from "firebase/compat";
import DocumentData = firebase.firestore.DocumentData;

@Injectable({
  providedIn: 'root'
})
export class OrderPartsService {
  private readonly dbConfig = environment.dbConfig;
  private readonly partsTable = environment.sparePartsTable;
  private readonly app;
  private readonly firestoreInst;


  constructor() {
    this.app = initializeApp(this.dbConfig);
    this.firestoreInst = getFirestore(this.app);
  }

  getPartInfoByPartNo$(partNo: string): Observable<ISparePart> {
    // let firestore = getFirestore(this.app);
    let q = query(collection(this.firestoreInst, this.partsTable), where('partNo', '==', partNo))
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

  putPartRequest$(partNo: string): Observable<DocumentData> {
    // let db = getFirestore(this.app);

    let usersTable = 'orders/' + getAuth(this.app).currentUser?.uid + '/user-orders';
    let table = collection(this.firestoreInst, usersTable)

    let payload = {
      added: Date.now(),
      isCancelled: false,
      partNo: partNo,
      status: {[Date.now()]: 'Order received'}
    } as IOrder;

    return fromPromise(addDoc(table, payload));
  }

  getAllUserOrders$(): Observable<IOrder> {
    // let firestore = getFirestore(this.app);
    let ordersTable = 'orders/' + getAuth(this.app).currentUser?.uid + '/user-orders';
    let q = query(collection(this.firestoreInst, ordersTable))
    return new Observable(partData => {
      fromPromise(getDocs(q))
        .subscribe(queryResults => {
          if (queryResults.empty) {
            partData.next(undefined);
            return;
          }
          queryResults.forEach(result => {
            partData.next({id: result.ref.id, ...result.data()} as IOrder)
          });
        })
    });
  }

  getOrderById$(orderId: string) {
    let orderLocation = `/orders/${getAuth(this.app).currentUser?.uid}/user-orders`

    // let db = getFirestore(this.app);
    const docRef = doc(this.firestoreInst, orderLocation, orderId);
    return fromPromise(getDoc(docRef))
    // const docSnap = fromPromise(getDoc(docRef)).subscribe({
    //   next: n => {
    //     //todo remove log
    //     console.log("Document data:", n.data());
    //   },
    //   error: e => {
    //     //todo remove log
    //     console.log("No such document!");
    //   }
    // });
  }
}
