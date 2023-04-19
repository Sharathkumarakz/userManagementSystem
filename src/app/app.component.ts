import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Emitters } from './components/emitters/emitter';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'userManagementSystem';
//   userIsAdmin: boolean=true

//   public message:any=""
//   constructor(private http:HttpClient){}
//   ngOnInit():void{
//    this.http.get('http://localhost:5000/admin',{
//    withCredentials:true,
 
//  }).subscribe((response:any)=>{
//     this.userIsAdmin=true
//  },(err)=>{
//   this.userIsAdmin=false;
//  Emitters.authEmiter.emit(false)
//  })
//   }
}
