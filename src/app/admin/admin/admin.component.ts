import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  id:any;
  global:any;
  constructor(public adminService:AdminService,public route:ActivatedRoute,public firestore:AngularFirestore, public router:Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get("id")
    if(this.id){
      this.updateData()
    }
  }

  onSubmit(data:NgForm){
    console.log("data",data.value)
    if(this.id)
    {  
       this.firestore.doc('ubllist/' + this.id).update(data.value);
       console.log("update success")
       this.router.navigateByUrl('show');
   }
   else{
console.log("Adddddd")
this.adminService.ublData(data.value)
   }
    
   
    data.resetForm();
  }
  updateData(){
    this.firestore.collection('ubllist').doc(this.id).valueChanges().subscribe((res:any) => {
      this.global = res
      console.log( this.global)
    })
  }
}
