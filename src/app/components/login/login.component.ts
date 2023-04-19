import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Emitters } from '../emitters/emitter';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  form: FormGroup

  constructor(private formBuilder: FormBuilder, private http: HttpClient,
    private router: Router, private toastr: ToastrService) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      email: '',
      password: ''
    }),
    this.http.get('http://localhost:5000/user',{
      withCredentials:true
    }).subscribe((response:any)=>{
      this.router.navigate(['/'])
      Emitters.authEmiter.emit(true)
    },(err)=>{
      this.router.navigate(['/login'])
    Emitters.authEmiter.emit(false)
    })
  }


  validateEmail = (email: any) => {
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (email.match(validRegex)) {
      return true;
    } else {
      return false;
    }
  }


  submit(): void {
    let user = this.form.getRawValue()
    console.log(user);
    if (user.email == "" || user.password == "") {
      this.toastr.error('All fields are Required!', 'Warning!');
    } else if (!this.validateEmail(user.email)) {
      this.toastr.warning('Please enter a valid Email!', 'Warning!');
    } else {
      this.http.post('http://localhost:5000/login', user, {

        withCredentials: true
      }).subscribe(() => this.router.navigate(['/']), (err) => {
        this.toastr.warning(err.error.message, 'Warning!');

      })
    }
  }
}


