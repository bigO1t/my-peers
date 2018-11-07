import { Injectable } from '@angular/core';
import 'firebase/firestore';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable()
export class DataService {
  constructor(public db: AngularFirestore) {}

  addData<T>(collectionName: string, obj?: T) {
    return this.db.collection(collectionName).add(obj);
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

  searchEmail(searchEmail: string) {
    return this.db
      .collection('users', ref =>
        ref.where('email', '>=', searchEmail).where('email', '<=', searchEmail + '\uf8ff')
      )
      .snapshotChanges();
  }
}
