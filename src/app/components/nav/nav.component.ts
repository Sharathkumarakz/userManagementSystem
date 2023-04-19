import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Emitters } from '../emitters/emitter';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})

export class NavComponent implements OnInit {

  authentication: boolean = false;

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
    Emitters.authEmiter.subscribe((auth: boolean) => {
      this.authentication = auth
    })
  }


  logout(): void {
    this.http.post('http://localhost:5000/logout', {}, {
      withCredentials: true
    }).subscribe(() =>
      this.authentication = false)
  }
}
