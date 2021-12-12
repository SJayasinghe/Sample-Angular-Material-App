import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import {MatPaginator} from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table/table-data-source';
// import { MatTableDataSource } from '@angular/material'

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  listUsers: any;
  displayedColumns = ['id', 'email', 'first_name', 'last_name', 'avatar', 'edit' , 'delete'];
 
  // displayedColumns = ['position', 'name', 'weight', 'symbol'];
  // dataSource = new MatTableDataSource<Element>();

  // @ViewChild(MatPaginator) paginator: MatPaginator; 
  
  constructor(private service : UserService) { }

  ngOnInit(): void {
      this.service.getUsers()
        .subscribe(
          (listUsers: any) => {
            this.listUsers = listUsers.data;
            console.log(listUsers);
          },
          (error: any) => {
            console.log(error);
          });
    }
}

