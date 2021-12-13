import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css']
})
export class DeleteUserComponent implements OnInit {

  userId :any ;

  constructor( private activatedRoute : ActivatedRoute,
                private service : UserService,
                private _snackBar : MatSnackBar,
                private router : Router ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data => {
      this.userId = data['id'];
      console.log(this.userId);
    })
    if (this.userId != ''){
      this.service.deleteUser(this.userId).subscribe(data => {
        this._snackBar.open("user deleted successfully");
        this.router.navigate(['/userList']);
      },err=>{
        this._snackBar.open("unable to delete user");
      })
      }

  }

}
