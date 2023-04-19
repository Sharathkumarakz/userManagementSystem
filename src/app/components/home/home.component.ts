import { HttpClient } from '@angular/common/http';
import { Component,OnInit } from '@angular/core';
import { Emitters } from '../emitters/emitter';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

public message:any=""

   constructor(private http:HttpClient){}

   ngOnInit():void{
    this.http.get('http://localhost:5000/user',{
    withCredentials:true
  }).subscribe((response:any)=>{
    this.message=`Welcome ${response.name}`
    Emitters.authEmiter.emit(true)
  },(err)=>{
  this.message="Your not Logged"
  Emitters.authEmiter.emit(false)
  })
   }
}
