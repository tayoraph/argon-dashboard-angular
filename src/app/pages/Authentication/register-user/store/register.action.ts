import { createAction, props } from '@ngrx/store';
import { RegisterNewUserDTO, userResponse } from 'src/app/utils/shared/models/user';


// register a new user
export const REGISTER_NEW_USER = '[Register Page] Register New User';
export const REGISTER_NEW_USER_SUCCESS = '[Register Page Success] Register New User Success';
export const REGISTER_NEW_USER_FAILURE = '[Register Page Failure] Register New User Failure';

export const RegisterNewUserAction = createAction(
    REGISTER_NEW_USER,
   props<{newUserDetails: RegisterNewUserDTO}>()
);



export const RegisterNewUserSuccessAction = createAction(
    REGISTER_NEW_USER_SUCCESS,
  props<{newUserDetails : userResponse }>()
)

export const RegisterNewUserFailureAction = createAction(
    REGISTER_NEW_USER_FAILURE,
  props<{message: string}>()
)


// get all User
export const GET_ALL_USER = '[Get All User Page] Get all Users';
export const GET_ALL_USER_SUCCESS = '[Get  all Users Page Success] Get  all Users Success';
export const GET_ALL_USER_FAILURE = '[Get  all Users Page Failure] Get  all Users Failure';

export const GetAllUsersAction = createAction(
    GET_ALL_USER
);


export const GetAllUsersSuccessAction = createAction(
    GET_ALL_USER_SUCCESS,
  props<{allUsers : userResponse }>()
)

export const GetAllUsersFailureAction = createAction(
    GET_ALL_USER_FAILURE,
  props<{message: string}>()
)



// get All user roles
// get all User
export const GET_ALL_USER_ROLES = '[Get  all Users Role Page] Get all Users Roles';
export const GET_ALL_USER_SUCCESS_ROLES = '[Get  all Users Role  Success] Get  all Users Role Success';
export const GET_ALL_USER_FAILURE_ROLES = '[Get  all Users Role Failure] Get  all Users Role Failure';

export const GetAllUsersRoleAction = createAction(
    GET_ALL_USER_ROLES
);


export const GetAllUsersRoleSuccessAction = createAction(
    GET_ALL_USER_SUCCESS_ROLES,
  props<{UserRoles : userResponse }>()
)

export const GetAllUsersRoleFailureAction = createAction(
    GET_ALL_USER_FAILURE_ROLES,
  props<{message: string}>()
)




