import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Emitters } from '../emitters/emitter';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import Swal from 'sweetalert2';
import { Profile } from 'src/app/models/allusers';
import { Store, select } from '@ngrx/store';
import { retrieveprofile } from '../state/app.actions';
import { appService } from '../state/app.service';
import { userProfile } from '../state/app.selector';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  template: '<app-edit-user ></app-edit-user>',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  public name: any = ""
  public email: any = ""
  public img: any = ""
  public state: boolean | any = false
  public state1: boolean | any = true
  form: FormGroup | any
  selectedFile: any | File = null;


  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router,
    private store: Store<{ userdetails: Profile }>, private appService: appService) { }

    sss$=this.store.pipe(select(userProfile)).subscribe(userProfileData => {
      // Extract the necessary values from the userProfileData object
     this. name = userProfileData.name;
      this.email = userProfileData.email;
      this.img = userProfileData.image;
      if (userProfileData.image == null) {
        this.state = false
        this.state1 = true
      } else {
        this.state = true
        this.state1 = false
      }
    })

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      image: [''],
    }),
      this.http.get('http://localhost:5000/user', {
        withCredentials: true
      }).subscribe((response: any) => {
        this.store.dispatch(retrieveprofile())
        // this.router.navigate(['/profile']);
        Emitters.authEmiter.emit(true)
      }, (err) => {
        this.router.navigate(['/']);
        Emitters.authEmiter.emit(false)
      })
      
      // this.appService.loadProfile()
      //   .subscribe((data) => {
      //     Emitters.authEmiter.emit(true)
          // this.store.dispatch(retrieveprofile({ userdetails: data as Profile }))
        // }, (err) => {
        //   this.router.navigate(['/profile']);
        //   Emitters.authEmiter.emit(false)
        // }),
    
  }




  onFileSelected(event: any) {
    this.selectedFile = <File>event.target.files[0]
  }


  onSubmit() {
    const formData = new FormData();
    formData.append('image', this.selectedFile, this.selectedFile.name);
    console.log(formData);
    this.http.post('http://localhost:5000/profile-upload-single', formData, {
      withCredentials: true
    }).subscribe((response: any) => {
      // this.appService.loadProfile()
      // .subscribe((data) => {
        Emitters.authEmiter.emit(true)
        this.store.dispatch(retrieveprofile())
      // })
      Emitters.authEmiter.emit(true)
      Swal.fire('Success', "Saved", "success")
    }, (err) => {
      Swal.fire('Error', err.error.message, "error")
    })
  }
}
