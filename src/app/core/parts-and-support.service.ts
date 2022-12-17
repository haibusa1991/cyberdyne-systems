import {Injectable} from '@angular/core';
import {collection, getFirestore, query, where, getDocs, addDoc, doc, getDoc} from "firebase/firestore";
import {fromPromise} from "rxjs/internal/observable/innerFrom";
import {environment} from "../../environments/environment";
import {initializeApp} from "firebase/app";
import {Observable} from "rxjs";
import {ISparePart} from "../models/ISparePart";
import {getAuth} from "firebase/auth";
import {IOrder} from "../models/IOrder";
import firebase from "firebase/compat";
import DocumentData = firebase.firestore.DocumentData;
import {ISupportRequest} from "../models/ISupportRequest";
import DocumentReference = firebase.firestore.DocumentReference;

@Injectable({
  providedIn: 'root'
})
export class PartsAndSupportService {
  private readonly dbConfig = environment.dbConfig;
  private readonly partsTable = environment.sparePartsTable;
  private readonly app;
  private readonly firestoreInst;


  constructor() {
    this.app = initializeApp(this.dbConfig);
    this.firestoreInst = getFirestore(this.app);
  }

  getPartInfoByPartNo$(partNo: string): Observable<ISparePart> {
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

  putPartOrder$(partNo: string): Observable<DocumentData> {

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

  getAllOrdersForCurrentUser$(): Observable<IOrder> {
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

  getAllRequestsForCurrentUser$(): Observable<ISupportRequest> {
    let requestsTable = 'orders/' + getAuth(this.app).currentUser?.uid + '/user-requests';
    let q = query(collection(this.firestoreInst, requestsTable))
    return new Observable(requestData => {
      fromPromise(getDocs(q))
        .subscribe(queryResults => {
          if (queryResults.empty) {
            requestData.next(undefined);
            return;
          }
          queryResults.forEach(result => {
            requestData.next({id: result.ref.id, ...result.data()} as ISupportRequest)
          });
        })
    });
  }

  getOrderById$(orderId: string) {
    let orderLocation = `/orders/${getAuth(this.app).currentUser?.uid}/user-orders`

    const docRef = doc(this.firestoreInst, orderLocation, orderId);
    return fromPromise(getDoc(docRef))

  }

  putSupportRequest$(request:ISupportRequest, logFileLink: string = '') : Observable<DocumentData>{
    let payload = {
      added: Date.now(),
      model: request.model.toLowerCase(),
      serial: request.serial.toLowerCase(),
      description: request.description,
      logFileReference: logFileLink,
      status: {[Date.now()]: 'Request received'}
    } as unknown as ISupportRequest;

    let supportTable = 'orders/' + getAuth(this.app).currentUser?.uid + '/user-requests';
    let table = collection(this.firestoreInst, supportTable)
    return fromPromise(addDoc(table, payload));
  }


  getSupportRequestById$(orderId: string) {
    let orderLocation = `/orders/${getAuth(this.app).currentUser?.uid}/user-requests`;

    const docRef = doc(this.firestoreInst, orderLocation, orderId);
    return fromPromise(getDoc(docRef))
  }

}
