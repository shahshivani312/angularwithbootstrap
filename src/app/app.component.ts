import { Component } from '@angular/core';
import{ FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  profileForm = new FormGroup({
    firstName: new FormControl('', Validators.pattern('[a-zA-Z ]*')),
    lastName: new FormControl('', Validators.pattern('[a-zA-Z ]*')),
    dept: new FormControl('', Validators.required),
    address: new FormGroup({
      street: new FormControl('', Validators.required),
      city: new FormControl('', Validators.required),
      state: new FormControl('', Validators.required),
      zip: new FormControl('', Validators.pattern('[0-9]*') )
    })
  });


  onSubmit() {
    console.warn(this.profileForm.value); 
  }
}
