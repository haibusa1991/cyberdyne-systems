import {Injectable} from '@angular/core';
import {initializeApp} from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  verifyPasswordResetCode,
  confirmPasswordReset
} from "firebase/auth";
import {IUserRegistration} from "../../_models/IUserRegistration";
import {Observable} from "rxjs";
import {fromPromise} from "rxjs/internal/observable/innerFrom";
import firebase from "firebase/compat";
import UserCredential = firebase.auth.UserCredential;
import {CookiesManagerService} from "../cookies-manager/cookies-manager.service";
import {collection, doc, getFirestore, setDoc} from "firebase/firestore";
import {environment} from "../../../environments/environment";
import {IUserLogin} from "../../_models/IUserLogin";
import User = firebase.User;
import {IUserEmail} from "../../_models/IUserEmail";

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
    //@ts-ignore
    //todo remove
    window.a = this.auth;
  }

  registerUser$(registrationData: IUserRegistration): Observable<UserCredential> {
    return fromPromise(
      createUserWithEmailAndPassword(
        this.auth, registrationData.email, registrationData.password)) as unknown as Observable<UserCredential>;
  }

  setAdditionalRegistrationData(registrationData: IUserRegistration): Observable<void> {
    let db = getFirestore(this.app);
    let table = collection(db, this.usersTable)

    // let uid = this.cookiesManager.getUid();
    let uid = this.auth.currentUser?.uid;
    return fromPromise(setDoc(doc(table, uid), {
      'Address': registrationData.address,
      'Email': registrationData.email,
      'Name': registrationData.name,
      'Phone': registrationData.phone
    }));
  }

  authStatus$(): Observable<User | null> {
    let o = new Observable((o => {
      return this.auth.onAuthStateChanged(e => o.next(e));
    }));

    return o as Observable<User | null>;
  }

  login$(credentials: IUserLogin): Observable<UserCredential> {
    return fromPromise(
      signInWithEmailAndPassword(this.auth, credentials.email, credentials.password)
    ) as unknown as Observable<UserCredential>;
  }

  logout$(): Observable<void> {
    return fromPromise(this.auth.signOut()) as any as Observable<void>
  }

  getCurrentUser(): User | null {
    return this.auth.currentUser as User;
  }

  sendPasswordResetEmail$(email: IUserEmail): Observable<void> {
    return fromPromise(sendPasswordResetEmail(this.auth, email.email))
  }

  verifyPasswordResetCode$(oobCode: string): Observable<string> {
    return fromPromise(verifyPasswordResetCode(this.auth, oobCode)) as Observable<string>;
  }

  changePassword$(oobCode: string, newPassword: string): Observable<void> {
    return fromPromise(confirmPasswordReset(this.auth, oobCode, newPassword)) as Observable<void>;
  }
}
