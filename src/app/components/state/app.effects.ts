import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { retrieveposts, retrievepostsSucces, retrieveprofile, retrieveprofileSucces } from "./app.actions";
import { map, switchMap } from "rxjs";
import { appService } from "./app.service";
import { Profile, Users } from "src/app/models/allusers";


@Injectable()
export class appEffects{
   constructor(private actions$:Actions,private appServie:appService){}
   loadAllUsers$=createEffect(()=>
   this.actions$.pipe(
    ofType(retrieveposts),
    switchMap(()=>{
       return this.appServie.loadUsers()
       .pipe(map((data)=>retrievepostsSucces({allusers:data as Users[]})
     ))
        
    })
   )
   )

   loadProfile$=createEffect(()=>
   this.actions$.pipe(
    ofType(retrieveprofile),
    switchMap(()=>{
       return this.appServie.loadProfile()
       .pipe(map((data)=>retrieveprofileSucces({userdetails:data as Profile })
     ))
        
    })
   )
   )

}