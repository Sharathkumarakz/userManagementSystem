import {createSelector} from '@ngrx/store'
import { appProfile, appUsers } from './app.state'
import { Profile, Users } from 'src/app/models/allusers';

export const userRootSelector=(state:appUsers)=>state.allusers;
//----user----------

export const profileRootSelector=(state:appProfile)=>state.userdetails;
export const userProfile=createSelector(
    profileRootSelector,
    (userdetails:Profile)=>{
        return userdetails
    }
)

//---------------
export const uniqueEmail=createSelector(
    userRootSelector,
    (allusers:Users[])=>{
        return [...allusers]
    }
)