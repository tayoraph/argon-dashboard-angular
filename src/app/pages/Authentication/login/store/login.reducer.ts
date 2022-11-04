import { createReducer, on } from "@ngrx/store";
import { user, userResponse } from "src/app/utils/shared/models/user";
import * as userLoginActions from "./login.action";
import { initialAuthState, initialLoginState } from "./login.state";

export interface LoginState {
  userDetails: user | userResponse;
  Authorization: string;
  message: string;
  isLoggedIn : boolean
  IsReturningUser : boolean
  userType : string
}

export const initialState: LoginState = {
  userDetails: initialAuthState,
  Authorization: "",
  message: "",
  isLoggedIn : false,
  IsReturningUser : false,
  userType: "user"
};

const userLogin = createReducer(
  initialState,
  on(userLoginActions.loginAction, (state, action) => {
    return { ...state , // using spread operator returned my initial state 
      // userDetails :  action.userDetails // doing this update the userDetails
    };
  }),
  on(userLoginActions.getAuthorizationTokenAfterLogin, (state) => {
      return {
        ...state,
        Authorization : state.Authorization,
       };
    }),
  on(userLoginActions.loginSuccessAction, (state, {userDetails}) => {
    let user =  userDetails.data;
    return {
      ...state,
      userDetails : userDetails,
      isLoggedIn : true,
      IsReturningUser : user.isReturningUser,
      userType : user.userType,
    };
  }),
  on(userLoginActions.loginFailureAction, (state, { message }) => {
    return {
      ...state,
      message: message,
    };
  }),

  on(userLoginActions.userAccessLogoutAction, (state) => {
    //debugger
    return Object.assign({}, initialState)
  })
);

export function LoginReducer(state: any, action: any) {
  // if(action == userLoginActions.loginSuccessAction){
  //     console.log(action)
  // }
  return userLogin(state, action);
}
