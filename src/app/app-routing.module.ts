import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ProfileComponent } from './components/profile/profile.component';
// import { AdminLoginComponent } from './components/admin-login/admin-login.component';
// import { AdminUserListComponent } from './components/admin-user-list/admin-user-list.component';
// import { EditUserComponent } from './components/edit-user/edit-user.component';
// import { AdminCreateUserComponent } from './components/admin-create-user/admin-create-user.component';

const routes: Routes = [
  {path:'',component: HomeComponent},
  {path:'login',component: LoginComponent},
  {path:'register',component: RegisterComponent},
  {path:'profile',component:ProfileComponent},
  // {path:'admin',component:AdminLoginComponent},
  // {path:'admin/users',component:AdminUserListComponent},
  // {path:'admin/editUser/:userId',component:EditUserComponent},
  // {path:'admin/createuser',component:AdminCreateUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
