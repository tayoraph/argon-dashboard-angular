import { createFeatureSelector, createSelector } from "@ngrx/store";
import {  NewUserRegistrationState } from "./register.reducer";

export const New_User_SEL = "NewUserSelectorStateSel";

const User_selector = createFeatureSelector<NewUserRegistrationState>(New_User_SEL);

export const loginSelector = createSelector(
    User_selector,
  (state:NewUserRegistrationState) => {
     console.log(state)
      return state.newUserDetails;
    } 
)


export const RolesSelector = createSelector(
    User_selector,
    (state:NewUserRegistrationState) => {
       console.log(state)
        return state.userRoles;
      } 
  )


  export const AllUsersSelector = createSelector(
    User_selector,
    (state:NewUserRegistrationState) => {
       console.log(state)
        return state.userRoles;
      } 
  )
