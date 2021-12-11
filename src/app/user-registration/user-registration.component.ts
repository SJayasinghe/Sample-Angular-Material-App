import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {

  addUserForm : FormGroup = new FormGroup({});

  constructor(private service : UserService,private fromBuilder : FormBuilder) { }

  ngOnInit(): void {
    this.addUserForm = this.fromBuilder.group({
      'name' : new FormControl('',Validators.required),
      'job': new FormControl('',Validators.required),
      'email': new FormControl('',Validators.required)
    })
  }

  createUser(){ 
    this.service.addUser(this.addUserForm.value).subscribe(data =>{
      console.log('User Created');
      console.log(this.addUserForm.value);
    },err => {
      console.log(err);
    })
  }

}
