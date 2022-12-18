import {Injectable} from '@angular/core';
import {initializeApp} from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  verifyPasswordResetCode,
  confirmPasswordReset,
  updateEmail,
  browserLocalPersistence
} from "firebase/auth";
import {IUserRegistration} from "../../models/IUserRegistration";
import {mergeMap, Observable, of} from "rxjs";
import {fromPromise} from "rxjs/internal/observable/innerFrom";
import firebase from "firebase/compat";
import UserCredential = firebase.auth.UserCredential;
import {collection, doc, getDoc, getFirestore, setDoc} from "firebase/firestore";
import {environment} from "../../../environments/environment";
import {IUserLogin} from "../../models/IUserLogin";
import User = firebase.User;
import {IUserEmail} from "../../models/IUserEmail";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly dbConfig = environment.dbConfig;
  private readonly usersTable = environment.usersTable;

  private readonly app;
  private readonly auth;
  private readonly firestoreInst;

  constructor() {
    this.app = initializeApp(this.dbConfig);
    this.auth = getAuth(this.app);
    this.firestoreInst = getFirestore(this.app);
  }

  registerUser$(registrationData: IUserRegistration): Observable<UserCredential> {
    return fromPromise(
      createUserWithEmailAndPassword(
        this.auth, registrationData.email, registrationData.password)) as unknown as Observable<UserCredential>;
  }

  setAdditionalRegistrationData(registrationData: IUserRegistration): Observable<void> {
    let table = collection(this.firestoreInst, this.usersTable)

    let uid = this.auth.currentUser?.uid;
    return fromPromise(setDoc(doc(table, uid), {
      'address': registrationData.address,
      'email': registrationData.email,
      'name': registrationData.name,
      'phone': registrationData.phone
    }));
  }

  getAdditionalRegistrationData$() {
    let userDataLocation = `${this.usersTable}/${getAuth(this.app).currentUser?.uid}`

    const docRef = doc(this.firestoreInst, userDataLocation);
    return fromPromise(getDoc(docRef)).pipe(
      mergeMap(document => of(document.data()))
    ) as Observable<IUserRegistration>

  }

  authStatus$(): Observable<User | null> {
    let o = new Observable((o => {
      return this.auth.onAuthStateChanged(e => o.next(e));
    }));

    return o as Observable<User | null>;
  }

  login$(credentials: IUserLogin): Observable<UserCredential> {

    this.auth.setPersistence(browserLocalPersistence)

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

  setNewEmailAddress$(email: string) {
    return fromPromise(updateEmail(this.auth.currentUser!, email));
  }
}
