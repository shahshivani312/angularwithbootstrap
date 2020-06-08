import { Injectable } from '@angular/core';
import { FormControl, FormGroup,  Validators } from '@angular/forms'
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class CustomerserviceService {

  constructor(private firebase:AngularFireDatabase) {  }

customerList:AngularFireList<any>;
form=new FormGroup({
  $key:new FormControl(null),
  fullName : new FormControl('', Validators.required),
  email : new FormControl('', Validators.required),
  phone: new FormControl('',[Validators.required, Validators.minLength(8)] ),
  message: new FormControl('')
})
}
