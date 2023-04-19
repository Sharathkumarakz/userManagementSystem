import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin-create-user',
  templateUrl: './admin-create-user.component.html',
  styleUrls: ['./admin-create-user.component.css']
})

export class AdminCreateUserComponent {

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
      this.http.post('http://localhost:5000/admin/createUser', user, {
        withCredentials: true
      }).subscribe(() => this.router.navigate(['/admin/users']), (err) => {
        Swal.fire('Error', err.error.message, "error")
      })
    }
  }
}

