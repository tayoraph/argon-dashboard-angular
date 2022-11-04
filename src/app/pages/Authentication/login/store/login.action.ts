import { createAction, props } from '@ngrx/store';
import { user, userResponse } from 'src/app/utils/shared/models/user';

export const USER_LOGIN = '[Login Page] Login';
export const GET_AUTHORIZATION_TOKEN_AFTER_LOGIN = '[GET_AUTHORIZATION_TOKEN_AFTER_LOGIN] Get authorization token after login';
export const USER_LOGIN_SUCCESS = '[Login Page] Login Success';
export const USER_LOGIN_FAILURE = '[Login Page] Login Failure';

export const loginAction = createAction(
  USER_LOGIN,
   props<{userDetails: user}>()
);


export const getAuthorizationTokenAfterLogin = createAction(
  GET_AUTHORIZATION_TOKEN_AFTER_LOGIN
  
);

export const loginSuccessAction = createAction(
  USER_LOGIN_SUCCESS,
  props<{userDetails : userResponse }>()
)

export const loginFailureAction = createAction(
  USER_LOGIN_FAILURE,
  props<{message: string}>()
)



export const USER_ACCESS_LOGOUT = '[user Access Log Out] user Access Logout';
export const userAccessLogoutAction = createAction(
  USER_ACCESS_LOGOUT
)
