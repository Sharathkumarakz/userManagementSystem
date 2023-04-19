import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginComponent } from './admin-login.component';
import { AdminDashboardComponent } from '../admin-dashboard/admin-dashboard.component';
import { AdminUserListComponent } from '../admin-user-list/admin-user-list.component';
import { EditUserComponent } from '../edit-user/edit-user.component';
import { AdminCreateUserComponent } from '../admin-create-user/admin-create-user.component';
import { ErrorPageComponent } from '../error-page/error-page.component';

const routes: Routes = [
{path: 'admin', component:AdminLoginComponent},
{path:'admin',
children:[
    {path:'dashboard',component:AdminDashboardComponent},
    {path:'users',component:AdminUserListComponent},
    {path:'editUser/:userId',component:EditUserComponent},
    {path:'createuser',component:AdminCreateUserComponent},
    {path:'**',component:ErrorPageComponent},
]
},];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
