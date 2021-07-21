import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/admin/admin.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  list:any = []

  constructor(public adminService:AdminService) { }

  ngOnInit(): void {
    this.adminService.getUblData().subscribe(res => {
      this.list = res
      console.log(res)
    })
  }

}
