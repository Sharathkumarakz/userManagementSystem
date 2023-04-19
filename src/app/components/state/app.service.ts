import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import {map} from 'rxjs/operators'
import { Users } from "src/app/models/allusers";
@Injectable()
export class appService{
    constructor(private http:HttpClient){}

    loadUsers(){
      return this.http.get("http://localhost:5000/admin/users",{withCredentials:true})
      // .pipe(map((data)=>data||[]))
        }

    //-----------users-
    loadProfile(){
      return this.http.get("http://localhost:5000/profile",{withCredentials:true})
      // .pipe(map((data)=>data))
        }
    //----------
}