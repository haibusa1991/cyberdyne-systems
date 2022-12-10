import {Injectable} from '@angular/core';
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword} from "firebase/auth";
import {initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore';
import {fromPromise} from "rxjs/internal/observable/innerFrom";
import {getDatabase, ref, onValue, get} from "firebase/database";
import {collection, doc, setDoc} from "firebase/firestore";
import {getDoc} from "firebase/firestore";
import {CookieService} from 'ngx-cookie-service'
import {json} from "express";

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private firebaseConfig = {
    apiKey: "AIzaSyCzq_juaPUMNhL7SsG7arvY7WizBY91EzE",
    authDomain: "cdyne-systems.firebaseapp.com",
    projectId: "cdyne-systems",
    storageBucket: "cdyne-systems.appspot.com",
    messagingSenderId: "682531435738",
    appId: "1:682531435738:web:f82128ac1898aa56a421e3"
  };

  private readonly app;
  private readonly auth;

  private readonly email = 'haibusa2005@abv.bg';
  private readonly pass = '123456789';

  private currentUser: any;


  constructor(private cookieService:CookieService) {
    this.app = initializeApp(this.firebaseConfig);
    this.auth = getAuth(this.app);
    if(this.cookieService.get('cdyne-systems')){
      this.currentUser = JSON.parse(this.cookieService.get('cdyne-systems'));
    }
  }

  register(): void {

    let obs = fromPromise(createUserWithEmailAndPassword(this.auth, this.email, this.pass));

    obs.subscribe({
      next: n => {
        let user = n.user;
        //todo remove log
        console.log(user);
      },
      error: e => {
        let message = e.message;
        let errorCode = e.code;
//todo remove log
        console.log(message);
        console.log(errorCode);
      }
    });
  }

  login(): void {

    let obs = fromPromise(signInWithEmailAndPassword(this.auth, this.email, this.pass));
    obs.subscribe({
      next: n => {
        this.currentUser = n.user;
        this.cookieService.set('cdyne-systems', JSON.stringify(this.currentUser))
        //todo remove log
        console.log(this.currentUser);
      },
      error: e => {
        let message = e.message;
        let errorCode = e.code;
//todo remove log
        console.log(message);
        console.log(errorCode);
      }
    });
  }

  // submitDbData(): void {
  //   let db = getFirestore(this.app);
  //   let obs = fromPromise(addDoc(collection(db, `users/`), {
  //       email: this.currentUser.email,
  //       born: 1815
  //     }));
  //
  //   obs.subscribe({
  //     next: n => {
  //       console.log("Document written with ID: ", n.id);
  //     },
  //     error: e => {
  //       console.error("Error adding document: ", e);
  //     }
  //   })
  // };

  submitDbData(): void {
    let db = getFirestore(this.app);
    let citiesRef = collection(db, "users");

    fromPromise(setDoc(doc(citiesRef, this.currentUser.uid), {
      // email: this.currentUser.email,
      namenew: 'f'

    },{merge:true,mergeFields:['namenew']})).subscribe();

    // fromPromise(setDoc(doc(citiesRef, "LA"), {
    //   name: "Los Angeles", state: "CA", country: "USA",
    //   capital: false, population: 3900000,
    //   regions: ["west_coast", "socal"]
    // })).subscribe();
    //
    // fromPromise(setDoc(doc(citiesRef, "DC"), {
    //   name: "Washington, D.C.", state: null, country: "USA",
    //   capital: true, population: 680000,
    //   regions: ["east_coast"]
    // })).subscribe();


  };

  getData() {
    let db = getFirestore(this.app);
    const docRef = doc(db, "users", this.currentUser.uid);
    const docSnap = fromPromise(getDoc(docRef)).subscribe({
      next: n => {
        //todo remove log
        console.log("Document data:", n.data());
      },
      error: e => {
        //todo remove log
        console.log("No such document!");
      }
    });

    // const docRef = doc(db, "cities", "SF");
    // const docSnap = fromPromise(getDoc(docRef)).subscribe({
    //   next: n => {
    //     console.log("Document data:", n.data());
    //   },
    //   error: e => {
    //     console.log("No such document!");
    //   }
    // });

    // debugger
    // if (docSnap.exists()) {
    //   console.log("Document data:", docSnap.data());
    // } else {
    //   // doc.data() will be undefined in this case
    //   console.log("No such document!");
    // }
  }


  //   try {
  //     const docRef = await addDoc(collection(db, "users"),
  //       {
  //       first: "Ada",
  //       last: "Lovelace",
  //       born: 1815
  //     });
  //     console.log("Document written with ID: ", docRef.id);
  //   } catch (e) {
  //     console.error("Error adding document: ", e);
  //   }
  // }
}

