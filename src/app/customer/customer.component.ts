import { Component, OnInit } from '@angular/core';
import { CustomerserviceService } from '../shared/customerservice.service';


@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.less']
})
export class CustomerComponent implements OnInit {

  constructor(public customerService:CustomerserviceService) { }

  submited:boolean;
  // showSuccessMessage:boolean;
  // formControl=this.customerService.form.controls;


  ngOnInit() {
  }
onSubmit(){
  this.submited = true;
  if(this.customerService.form.valid){
    this.submited = false;
    
  }
}
  
}
