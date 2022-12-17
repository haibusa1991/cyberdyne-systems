import {Injectable} from '@angular/core';
import {initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {environment} from "../../environments/environment";
import {getStorage, ref, uploadBytes, UploadResult, getDownloadURL, getBlob} from "firebase/storage";
import {fromPromise} from "rxjs/internal/observable/innerFrom";
import {Observable} from "rxjs";
import {getAuth} from "firebase/auth";

@Injectable({
  providedIn: 'root'
})
export class FileHandlerService {

  private readonly dbConfig = environment.dbConfig;
  private readonly app;
  private readonly storageInst;

  constructor() {
    this.app = initializeApp(this.dbConfig);
    this.storageInst = getStorage(this.app);
  }

  uploadLogFile$(file: File): Observable<UploadResult> {
    let metadata = {
      contentType: 'text/plain'
    }

    let fileRef = ref(this.storageInst, `userlogs/${getAuth(this.app).currentUser?.uid}/${Date.now()}.log`);
    return fromPromise(uploadBytes(fileRef, file, metadata));
  }

  downloadLogFile$(filePath: string)  {
    let fileReference = ref(this.storageInst, filePath);
    return fromPromise(getDownloadURL(fileReference))

    // return fromPromise(getBlob(fileReference));

  }
}
