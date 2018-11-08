import { Injectable } from '@angular/core';
import 'firebase/firestore';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { IBase } from '../interfaces/base.interface';

@Injectable()
export class DataService {
  constructor(public db: AngularFirestore, private router: Router) {}

  addData(collectionName: string, obj?) {
    this.db
      .collection(collectionName)
      .doc(obj.key)
      .set(obj);
  }

  getData(collectionName: string, key: string) {
    return this.db
      .collection(collectionName)
      .doc(key)
      .snapshotChanges();
  }

  updateData<T>(key: string, collectionName: string, obj?: T) {
    return this.db
      .collection(collectionName)
      .doc(key)
      .set(obj);
  }

  removeData(key: string, collectionName: string) {
    return this.db
      .collection(collectionName)
      .doc(key)
      .delete();
  }

  getDataList(collectionName: string) {
    return this.db.collection(collectionName).snapshotChanges();
  }

  search(searchEmail: string) {
    return this.db
      .collection('users')
      .doc(searchEmail)
      .get();
  }

  goToError() {
    this.router.navigate(['/errors/error500']);
  }
}
