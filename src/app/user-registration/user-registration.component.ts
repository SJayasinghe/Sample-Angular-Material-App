import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {

  addUserForm : FormGroup = new FormGroup({});

  constructor(private service : UserService,
    private fromBuilder : FormBuilder ,
    private _snackBar : MatSnackBar ) { }

  ngOnInit(): void {
    this.addUserForm = this.fromBuilder.group({
      'name' : new FormControl('',Validators.required),
      'job': new FormControl('',Validators.required),
      'email': new FormControl('',Validators.required)
    })
  }

  createUser(){ 
    this.service.addUser(this.addUserForm.value).subscribe(data =>{
      this._snackBar.open("user added successfully");
      console.log(this.addUserForm.value);
    },err => {
      console.log(err);
      this._snackBar.open("unable to add user");
    })
  }

}
