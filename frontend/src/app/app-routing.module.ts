import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './Pages/add-user/add-user.component';
import { HomeComponent } from './Pages/home/home.component';
import { LoginComponent } from './Pages/login/login.component';
import { ManageUserComponent } from './Pages/manage-user/manage-user.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path:'home', component: HomeComponent},
  {path:'adduser', component: AddUserComponent},
  {path: 'manage', component: ManageUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
