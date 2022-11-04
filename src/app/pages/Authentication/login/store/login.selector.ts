import { createFeatureSelector, createSelector } from "@ngrx/store";
import { InitialState } from "@ngrx/store/src/models";
import { userResponse } from "src/app/utils/shared/models/user";
import { LoginState } from "./login.reducer";

export const LOGIN_SEL = "loginSel";

const login_selector = createFeatureSelector<LoginState>(LOGIN_SEL);
const page_To_Route_To_After_Login = createFeatureSelector<string>(LOGIN_SEL);

export const loginSelector = createSelector(
  login_selector,
  (state:LoginState) => {
     // console.log(state)
      return state.userDetails;
    } 
)

export const getAuthorizationTokenAfterLogin = createSelector(
login_selector,
(state:LoginState) => {
    return state.Authorization;
  }
)

// get islogged in user
export const isLoggedInSelector = createSelector(
  login_selector,
  (state:LoginState) => {
      return state.isLoggedIn;
    }
  )

//  get user type
  export const userTypeSelector = createSelector(
    login_selector,
    (state:LoginState) => {
        return state.userType;
      }
    )

    //  get is returning user
  export const isReturningUserSelector = createSelector(
    login_selector,
    (state:LoginState) => {
        return state.IsReturningUser;
      }
    )