
import { Users } from "src/app/models/allusers";

//------users-------
import {Profile} from "src/app/models/allusers";
export interface appProfile{
    userdetails:Profile;
}
//------------------

export interface appUsers{
    allusers: Users[];
}
