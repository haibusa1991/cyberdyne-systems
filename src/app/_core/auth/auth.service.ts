import {Injectable} from '@angular/core';
import {initializeApp} from "firebase/app";
import {createUserWithEmailAndPassword, getAuth} from "firebase/auth";
import {IUserRegistration} from "../../_models/IUserRegistration";
import {Observable} from "rxjs";
import {fromPromise} from "rxjs/internal/observable/innerFrom";
import firebase from "firebase/compat";
import UserCredential = firebase.auth.UserCredential;
import {CookiesManagerService} from "../cookies-manager/cookies-manager.service";
import {collection, doc, getFirestore, setDoc} from "firebase/firestore";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly dbConfig = environment.dbConfig;
  private readonly usersTable = environment.usersTable;

  private readonly app;
  private readonly auth;

  constructor(private cookiesManager: CookiesManagerService) {
    this.app = initializeApp(this.dbConfig);
    this.auth = getAuth(this.app);
  }

  registerUser(registrationData: IUserRegistration): Observable<UserCredential> {
    return fromPromise(
      createUserWithEmailAndPassword(
        this.auth, registrationData.email, registrationData.password)) as unknown as Observable<UserCredential>;
  }

  setAdditionalRegistrationData(registrationData: IUserRegistration): Observable<void> {
    let db = getFirestore(this.app);
    let table = collection(db, this.usersTable)

    let uid = this.cookiesManager.getUid();
    return fromPromise(setDoc(doc(table, uid), {
      'Address' : registrationData.address,
      'Email' : registrationData.email,
      'Name' : registrationData.name,
      'Phone' : registrationData.phone
    }));
  }
}
