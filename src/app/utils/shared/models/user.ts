export interface user {
  email: string;
  password: string;
}

export interface RegisterNewUserDTO {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  roleId: string;
  password: string;
  userName: string;

}

export interface userResponse {
  succeeded: boolean;
  responseCode: string;
  message: string;
  data: any;
  errors: any;
  statusCode: any
}


export interface searchForUser{
  searchParam: string,
  searchType: string;
}


export interface AuthUserDetails {
  username: string;
  password: string;
  Permissions: string;

}

export interface loginResponse{
     succeeded : boolean;
     message :  string ,
     responseCode :  string ,
     errors : string,
     innerErrors : string,
     data : {
       id :  string ,
       userName :  string ,
       email :  string,
       roles : [
         string 
      ],
       isVerified : boolean,
       jwToken :  string
    }
  }