import { Injectable } from '@angular/core';
import 'firebase/firestore';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';

@Injectable()
export class DataService {
  constructor(public db: AngularFirestore, private router: Router) {}

  getData(collectionName: string, key: string) {
    return this.db
      .collection(collectionName)
      .doc(key)
      .valueChanges();
  }

  addUpdateData(collectionName: string, obj?) {
    this.db
      .collection(collectionName)
      .doc(obj.key)
      .set(obj);
  }

  removeData(key: string, collectionName: string) {
    return this.db
      .collection(collectionName)
      .doc(key)
      .delete();
  }

  getDataList(collectionName: string) {
    return this.db.collection(collectionName).valueChanges();
  }

  getDataListLive(collectionName: string) {
    return this.db.collection(collectionName).valueChanges();
  }

  search(key: string, collectionName: string) {
    return this.db
      .collection(collectionName)
      .doc(key)
      .get();
  }

  deleteField(field, key, collectionName) {
    return this.db
      .collection(collectionName)
      .doc(key)
      .update({ field: firebase.firestore.FieldValue.delete() });
  }
}
