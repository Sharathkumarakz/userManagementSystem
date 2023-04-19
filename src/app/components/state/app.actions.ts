import { createAction, props } from "@ngrx/store";
import { Users } from "src/app/models/allusers";

//----------users----------------
import { Profile } from "src/app/models/allusers";
export const retrieveprofile=createAction('[profile API]API success',
// props<{userdetails:Profile}>()
)
export const retrieveprofileSucces=createAction('[Profile API]API SuccessSuccess',
props<{ userdetails: Profile }>()
)
//-------------

export const retrieveposts=createAction('[Post API]API success',
// props<{allusers:Users[]}>()
)
export const retrievepostsSucces=createAction('[Post API]API SuccessSuccess',
props<{ allusers: Users[] }>()
)


