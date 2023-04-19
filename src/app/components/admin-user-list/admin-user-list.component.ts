import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Emitters } from '../emitters/emitter';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store'
import { appService } from '../state/app.service';
import { retrieveposts } from '../state/app.actions';
import { Users } from 'src/app/models/allusers';
import { uniqueEmail } from '../state/app.selector';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-admin-user-list',
  templateUrl: './admin-user-list.component.html',
  styleUrls: ['./admin-user-list.component.css']
})

export class AdminUserListComponent implements OnInit {
   searchText:any=''
  // userdata$: Observable<Users[]>

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router,
    private store: Store<{ allusers: Users[] }>, private appService: appService, private toastr: ToastrService) { }
   
  userdata$ = this.store.pipe(select(uniqueEmail))
  ngOnInit(): void {
    this.http.get('http://localhost:5000/admin/active', {
      withCredentials: true
    }).subscribe((response: any) => {
      console.log(response);
      // this.getUsers()
      this.store.dispatch(retrieveposts())
      Emitters.authEmiter.emit(true)
    }, (err) => {
      this.router.navigate(['/admin']);
      Emitters.authEmiter.emit(false)
    })
  }

  
  // getUsers() {
  //   this.appService.loadUsers()
  //     .subscribe((data) => {
  //       this.store.dispatch(retrieveposts({ allusers: data as Users[] }))
  //     })
  //   this.userdata$ = this.store.pipe(select(uniqueEmail))
  // }


  deleteUser(userId: any) {
    console.log(userId + "toDeeeeeeeeeeeeeeeeee");
    this.http.post(`http://localhost:5000/admin/deleteUser/${userId}`, {
      withCredentials: true
    }).subscribe((response: any) => {
      // this.appService.loadUsers()
      //   .subscribe((data) => {
      //     this.store.dispatch(retrieveposts({ allusers: data as Users[] }))
      //   })
      this.store.dispatch(retrieveposts())
      this.toastr.error("Deleted", 'Success!');
      //  this.userdata$=of(response)
      Emitters.authEmiter.emit(true)
    }, (err) => {
      console.log(err + "hhhhhhhhhhhhhhhhhhh");
      this.router.navigate(['/admin']);
      Emitters.authEmiter.emit(false)
    })
  }



  editUser(userId: any) {
    this.router.navigate(['/admin/editUser', userId])
  }



  createUser() {
    this.router.navigate(['admin/createuser'])
  }
}
