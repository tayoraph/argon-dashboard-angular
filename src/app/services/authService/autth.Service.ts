import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, retry } from 'rxjs';
import { BaseHttpService } from 'src/app/utils/shared/BaseHttp/base-http.service';
import { Constants } from 'src/app/utils/shared/constants/constants';
import {  RegisterNewUserDTO, searchForUser, user } from 'src/app/utils/shared/models/user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService  extends BaseHttpService{
  

  public const: any;
  public theHeader: any;
  public errorHandle: any;
 public baseUrl = environment.baseUrl + environment.baseUrlExt;

  constructor(public override httpClient?: HttpClient,
    ) {
    super()
  }


 /**
   * @todo Authenticate User
   * @param email
   * @param password 
   * 
   */

  loginUser(body: user):Observable<any> {
   let connect = this.baseUrl + environment.login;
    return this.post<any>(connect, body);
  }


   /**
   * @todo Register User
   * 
   */

    newUserRegistration(body: RegisterNewUserDTO):Observable<any> {
      let connect = this.baseUrl + environment.register;
       return this.post<any>(connect, body);
     }


     /** get all roles */

     getUserRoles():Observable<any> {
      let connect = this.baseUrl + environment.getAllRoles;
       return this.get<any>(connect);
     }
  }
