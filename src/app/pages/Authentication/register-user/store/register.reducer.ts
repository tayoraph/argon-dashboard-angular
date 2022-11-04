import { createReducer, on } from "@ngrx/store";
import { initialNewUserRegistrationState } from "./register.state";
import * as registrationAction from "./register.action";

export interface NewUserRegistrationState {
newUserDetails: any;
userRoles: any;
allUsers: any;
}

export const initialState: NewUserRegistrationState = {
    newUserDetails: initialNewUserRegistrationState,
    userRoles: {},
    allUsers:[]

};

const newUserRegistration = createReducer(
  initialState,
  on(registrationAction.RegisterNewUserAction, (state, action) => {
    return { ...state , // using spread operator returned my initial state 
      // userDetails :  action.userDetails // doing this update the userDetails
    };
  }),
  on(registrationAction.RegisterNewUserSuccessAction, (state, {newUserDetails}) => {
    let user =  newUserDetails.data;
    return {
      ...state,
    //   userDetails : userDetails,
    //   isLoggedIn : true,
    //   IsReturningUser : user.isReturningUser,
    //   userType : user.userType,
    };
  }),
  on(registrationAction.RegisterNewUserFailureAction, (state, { message }) => {
    return {
      ...state,
      message: message,
    };
  }),


  // get all users 
  on(registrationAction.GetAllUsersAction, (state, action) => {
    return {
         ...state, // using spread operator returned my initial state 
    };
  }),
  on(registrationAction.GetAllUsersSuccessAction, (state, {allUsers}) => {
    return { ...state , // using spread operator returned my initial state 
    allUsers :  allUsers.data // doing this update the userDetails
    };
  }),
  on(registrationAction.GetAllUsersFailureAction, (state, { message }) => {
    return {
      ...state,
      message: message,
    };
  }),



  //Get all user role 
    on(registrationAction.GetAllUsersRoleAction, (state, action) => {
        return {
             ...state, // using spread operator returned my initial state 
        };
      }),
      on(registrationAction.GetAllUsersRoleSuccessAction, (state, { UserRoles }) => {
        return { ...state , // using spread operator returned my initial state 
        userRoles :   UserRoles.data// doing this update the userDetails
        };
      }),
      on(registrationAction.GetAllUsersRoleFailureAction, (state, { message }) => {
        return {
          ...state,
          message: message,
        };
      }),

);

export function NewUserRegistrationReducer(state: NewUserRegistrationState, action: any) {
 console.log(state)
  return newUserRegistration(state, action);
}
