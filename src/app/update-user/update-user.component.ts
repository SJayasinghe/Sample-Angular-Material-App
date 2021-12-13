import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  userId :any ;
  userDetails : any;
  editUserForm : FormGroup = new FormGroup({});
  dataLoaded : boolean = false;

  constructor( private activatedRoute : ActivatedRoute,
               private service : UserService,
               private fromBuilder : FormBuilder,
               private _snackBar : MatSnackBar) { }

  ngOnInit(): void {

    dataLoaded : false;

    this.activatedRoute.params.subscribe(data => {
      this.userId = data['id'];
      console.log(this.userId);
    })

    if (this.userId != ''){
      this.service.getUser(this.userId).toPromise().then(data => {
        this.userDetails = data;
        Object.assign(this.userDetails, data);
        console.log(this.userDetails);

        this.editUserForm = this.fromBuilder.group({
          'email' : new FormControl(this.userDetails.data.email),
          'first_name': new FormControl(this.userDetails.data.first_name),
          'last_name': new FormControl(this.userDetails.data.last_name)
        })

        this.dataLoaded = true;

      })
      .catch(err =>{
        console.log(err);
      })
    }

  }

  updateUser(){
    console.log(this.editUserForm.value);
    this.service.updateUser(this.userId, this.editUserForm.value).subscribe(data =>{
      this._snackBar.open("user updated successfully");
    },err => {
      this._snackBar.open("unable to update user");
    }
    )

    
  }

}
