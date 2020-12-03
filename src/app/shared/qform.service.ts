import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
@Injectable({
  providedIn: 'root'
})
export class QformService {

  constructor(private firestore:AngularFirestore) { }

  getDetails(){
    return this.firestore.collection('store').snapshotChanges()
  }


}
