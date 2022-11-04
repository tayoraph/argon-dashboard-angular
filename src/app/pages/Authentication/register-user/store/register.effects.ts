import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { ToastrService } from "ngx-toastr";
import { EMPTY, of } from "rxjs";
import { catchError, exhaustMap, map, tap } from "rxjs/operators";
import { AuthService } from "src/app/services/authService/autth.Service";
import { SampleService } from "src/app/services/SampleService";
import { NotificationService } from "src/app/utils/services/notification/notification.service";
import { AppState } from "src/app/utils/shared/appState/appState";
// import { loaderService } from "src/app/utils/shared/Loader/loader.service";
import { userResponse } from "src/app/utils/shared/models/user";
import * as registrationAction from "./register.action";



@Injectable()
export class RegisterEffects {
  constructor(
    private actions$: Actions,
    public  authService: AuthService,
    private store: Store<AppState>,
    private router: Router,
   // public loader: loaderService,
    public alert: NotificationService,
    public toastrService: ToastrService,
  ) {}

  NewUserregistrationEffect$ = createEffect(() => {
    return this.actions$.pipe(
      // ofType('login'),
      ofType(registrationAction.RegisterNewUserAction),
      exhaustMap((action) => {
       // console.log(action);
        return this.authService.newUserRegistration(action.newUserDetails).pipe(
          map((user: userResponse) => {
// console.log(user)
            return user.succeeded
              ? registrationAction.RegisterNewUserSuccessAction({ newUserDetails: user })
              : (this.alert.showSuccess("", user.message),
              registrationAction.RegisterNewUserFailureAction({
                  message: user.message,
                }));
          }),
          catchError((error: Error) => {
            let errorMessage = error.message;
            this.alert.showSuccess("", errorMessage);
            //this.loader.stopLoaderMethod();
            //console.log(errorMessage);
            return of(
                registrationAction.RegisterNewUserFailureAction({ message: errorMessage })
            );
          })
        );
      })
    );
  });



  // get user roles
  GetAllRolesEffect$ = createEffect(() => {
    return this.actions$.pipe(
      // ofType('login'),
      ofType(registrationAction.GetAllUsersAction),
      exhaustMap((action) => {
       // console.log(action);
        return this.authService.getUserRoles().pipe(
          map((data: userResponse) => {
// console.log(user)
            return data.succeeded
              ? registrationAction.GetAllUsersRoleSuccessAction({ UserRoles: data })
              : (this.alert.showSuccess("", data.message),
              registrationAction.GetAllUsersFailureAction({
                  message: data.message,
                }));
          }),
          catchError((error: Error) => {
            let errorMessage = error.message;
            this.alert.showSuccess("", errorMessage); 
            return of(
                registrationAction.RegisterNewUserFailureAction({ message: errorMessage })
            );
          })
        );
      })
    );
  });

  // 
 GetAllUsersEffect$ = createEffect(() => {
    return this.actions$.pipe(
      // ofType('login'),
      ofType(registrationAction.GetAllUsersAction),
      exhaustMap((action) => {
       // console.log(action);
        return this.authService.getUserRoles().pipe(
          map((data: userResponse) => {
// console.log(user)
            return data.succeeded
              ? registrationAction.GetAllUsersSuccessAction({ allUsers: data })
              : (this.alert.showSuccess("", data.message),
              registrationAction.GetAllUsersFailureAction({
                  message: data.message,
                }));
          }),
          catchError((error: Error) => {
            let errorMessage = error.message;
            this.alert.showSuccess("", errorMessage);
            return of(
                registrationAction.RegisterNewUserFailureAction({ message: errorMessage })
            );
          })
        );
      })
    );
  });
}