import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Emitters } from '../emitters/emitter';

@Component({
  selector: 'app-admin-nav',
  templateUrl: './admin-nav.component.html',
  styleUrls: ['./admin-nav.component.css']
})
export class AdminNavComponent implements OnInit {

  authentication: boolean = false;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    Emitters.authEmiter.subscribe((auth: boolean) => {
      this.authentication = auth
    })
  }

  logout(): void {
    this.http.post('http://localhost:5000/admin/logout', {}, {
      withCredentials: true
    }).subscribe(() =>
      this.authentication = false)
  }
}
