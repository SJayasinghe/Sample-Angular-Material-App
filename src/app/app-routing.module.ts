import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { UserListComponent } from './user-list/user-list.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { DeleteUserComponent } from './delete-user/delete-user.component';

const routes: Routes = [{ path: '', redirectTo: '/', pathMatch: 'full' },
{ path: 'register', component: UserRegistrationComponent },
{ path: 'userList', component: UserListComponent }, 
{ path:'edit/:id' , component : UpdateUserComponent},
{ path:'delete/:id' , component : DeleteUserComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
