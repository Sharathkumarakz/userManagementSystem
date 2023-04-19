import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {

  form: FormGroup

  constructor(private formBuilder: FormBuilder, private http: HttpClient,
    private router: Router) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: '',
      email: '',
      password: ''
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
    if (user.name == "" || user.email == "" || user.password == "") {
      Swal.fire('Error', "please enter all fields", "error")
    } else if (!this.validateEmail(user.email)) {
      Swal.fire('Error', "please enter valid email", "error")
    } else {
      this.http.post('http://localhost:5000/register', user, {
        withCredentials: true
      }).subscribe(() => this.router.navigate(['/']), (err) => {
        Swal.fire('Error', err.error.message, "error")
      })
    }
  }
}
