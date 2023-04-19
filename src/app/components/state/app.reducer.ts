import {createReducer,on} from '@ngrx/store'
import { Profile, Users } from 'src/app/models/allusers'
import { state } from '@angular/animations'
import { retrieveposts, retrievepostsSucces, retrieveprofileSucces } from './app.actions'


//----------users----------------
import { retrieveprofile } from './app.actions'
export const initialStateofUser:Profile={
    _id:"",
    name:"",
    email:"",
    password:"",
    image:"",
    __v:"",
}



const _profileReducer=createReducer(
    initialStateofUser,
    on(retrieveprofileSucces,(state,{userdetails})=>{
        return userdetails
    })
)

export function profileReducer(state:any,action:any){
    return _profileReducer(state,action);
  }
//---------------

export const initialState:Users[]=[]

const _postReducer=createReducer(
    initialState,
    on(retrievepostsSucces,(state,{allusers})=>{
        return [...allusers]
    })
)


export function postReducer(state:any,action:any){
    return _postReducer(state,action);
  }