import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(public toastr: ToastrService) { }

  ngOnInit(): void {
    /* this.showSuccess() */
  }

  onSubmit(data: NgForm){
  
console.log("form",data.value)
const form = document.getElementById('formd');
 emailjs.sendForm('service_f78zulm','template_cljlmgu', 'form', 'user_JKdqqKsopX7QWDL5Kb400').then(function(response) {
  console.log('SUCCESS!', response.status, response.text);
  /* this.toastr.success('We will contact you soon.'); */
  console.log("it is done")
 /*  this.showSuccess() */
  data.resetForm();
}, function(error) {
  console.log('FAILED...', error);
}); 


  }


  showSuccess() {
    this.toastr.success('We will contact you soon.');
  }

}
