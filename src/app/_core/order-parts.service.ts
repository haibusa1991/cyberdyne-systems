import {Injectable} from '@angular/core';
import {collection, doc, getDoc, getFirestore, query, where, getDocs} from "firebase/firestore";
import {fromPromise} from "rxjs/internal/observable/innerFrom";
import {environment} from "../../environments/environment";
import {initializeApp} from "firebase/app";
import {from, map, mergeMap, Observable, of, pipe, switchMap, tap, throwError} from "rxjs";
import firebase from "firebase/compat";
import QuerySnapshot = firebase.firestore.QuerySnapshot;
import {getStorage, ref, getDownloadURL, getBlob} from "firebase/storage";
import {ISparePart} from "../_models/ISparePart";
import DocumentData = firebase.firestore.DocumentData;

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

  getPartInfoByPartNo(partNo: string): Observable<ISparePart> {
    let firestore = getFirestore(this.app);
    let q = query(collection(firestore, this.partsTable), where('partNo', '==', partNo))
    return new Observable(partData => {
      fromPromise(getDocs(q))
        .subscribe(queryResults => queryResults.forEach(result => partData.next(result.data() as ISparePart)));
    });
  }


  getPartImageUrl(partImage: string = 'spares/001.jpg') {
    return fromPromise(getDownloadURL(ref(getStorage(this.app), partImage)));
  }
}
