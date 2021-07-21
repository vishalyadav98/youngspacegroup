import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(public firestore:AngularFirestore) { }

  ublData(data:any){
    this.firestore.collection('ubllist').add(data).then( res => {
console.log(res)
console.log("successfull")
    })
  }
  getUblData(){
    return this.firestore.collection('ubllist').snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as any;
        const id = a.payload.doc.id;
        return { id, ...data }; 
      }))
    );
  }
}
