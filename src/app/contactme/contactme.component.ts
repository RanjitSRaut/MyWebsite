import { Component, OnInit, ViewEncapsulation } from '@angular/core';

//Contact Form
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidationService } from './validation.service';

@Component({
  selector: 'app-contactme',
  templateUrl: './contactme.component.html',
  styleUrls: ['./contactme.component.css'],
  encapsulation: ViewEncapsulation.None // to apply css from parent Component to child Component 
})
export class ContactmeComponent implements OnInit {
  title:string=`Contact Me`;
  contactname:string=`Ranjit Raut`;
  email:string=`ranjit.s.raut@gmail.com`;
  mobilenumber:string=`+ (91) 98-81-563-170 `;
  address:string=`Pune.`;

  //Contact Form
  userForm: any;

  constructor(private formBuilder: FormBuilder ) {

     
    this.userForm = this.formBuilder.group({
      'name': ['', Validators.required],
      'email': ['', [Validators.required, ValidationService.emailValidator]],
      'profile': ['', [Validators.required]]
    });
    
   // console.log(this.userForm);
   }

   saveUser() {
    if (this.userForm.dirty && this.userForm.valid) {
      alert(`Name: ${this.userForm.value.name} Email: ${this.userForm.value.email} profile:${this.userForm.value.profile}`);
    }
    this.userForm.reset();
  }

  clearButton() {
  //this.userForm.reset();
  }

  ngOnInit(): void {
    //this.userForm();
  }

}
