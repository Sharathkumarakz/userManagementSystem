import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import {StoreModule} from '@ngrx/store'
import { AdminRoutingModule } from './components/admin-login/admin.route.module';
import { EffectsModule } from '@ngrx/effects';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { NavComponent } from './components/nav/nav.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { ProfileComponent } from './components/profile/profile.component';
import { NgxFileDropModule } from 'ngx-file-drop';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { AdminNavComponent } from './components/admin-nav/admin-nav.component';
import { AdminUserListComponent } from './components/admin-user-list/admin-user-list.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { AdminCreateUserComponent } from './components/admin-create-user/admin-create-user.component';

import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { postReducer, profileReducer } from './components/state/app.reducer';
import { appService } from './components/state/app.service';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { appEffects } from './components/state/app.effects';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    NavComponent,
    ProfileComponent,
    AdminLoginComponent,
    AdminNavComponent,
    AdminUserListComponent,
    EditUserComponent,
    AdminCreateUserComponent,
    AdminDashboardComponent,
    ErrorPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxFileDropModule,
    AdminRoutingModule,
   StoreModule.forRoot({allusers:postReducer,userdetails:profileReducer}),
   ToastrModule.forRoot(),
   BrowserAnimationsModule,
   Ng2SearchPipeModule,
   EffectsModule.forRoot([appEffects])
  ],
  providers: [appService],
  bootstrap: [AppComponent]
})
export class AppModule { }
