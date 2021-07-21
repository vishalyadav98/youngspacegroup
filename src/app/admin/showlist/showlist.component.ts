import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-showlist',
  templateUrl: './showlist.component.html',
  styleUrls: ['./showlist.component.scss']
})
export class ShowlistComponent implements OnInit {

  list:any = []

  constructor(public adminService:AdminService,public firestore:AngularFirestore,public router:Router) { }

  ngOnInit(): void {
    this.adminService.getUblData().subscribe(res => {
      this.list = res
      console.log(res)
    })
  }

  delete(id:any){
    this.firestore.doc('ubllist/' + id).delete(); 
    console.log("delete successfully")
}

}
