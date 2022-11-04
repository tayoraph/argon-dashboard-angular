import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { EMPTY, of } from "rxjs";
import { catchError, exhaustMap, map, tap } from "rxjs/operators";
import { AuthService } from "src/app/services/authService/autth.Service";
import { SampleService } from "src/app/services/SampleService";
import { NotificationService } from "src/app/utils/services/notification/notification.service";
import { AppState } from "src/app/utils/shared/appState/appState";
// import { loaderService } from "src/app/utils/shared/Loader/loader.service";
import { userResponse } from "src/app/utils/shared/models/user";

import * as userLoginActions from "./login.action";
// import { pageToRouteToAfterLoginSelector } from "./login.selector";

@Injectable()
export class LoginEffects {
  constructor(
    private actions$: Actions,
    public  authService: AuthService,
    private store: Store<AppState>,
    private router: Router,
   // public loader: loaderService,
    public alert: NotificationService
  ) {}

  LoginEffect$ = createEffect(() => {
    return this.actions$.pipe(
      // ofType('login'),
      ofType(userLoginActions.loginAction),
      exhaustMap((action) => {
      //  this.loader.startLoaderMethod("authenticating...");
       // console.log(action);
        return this.authService.loginUser(action.userDetails).pipe(
          map((user: userResponse) => {
            //this.loader.stopLoaderMethod();
// console.log(user)
            return user.succeeded
              ? userLoginActions.loginSuccessAction({ userDetails: user })
              : (this.alert.showSuccess("", user.message),
                userLoginActions.loginFailureAction({
                  message: user.message,
                }));
          }),
          catchError((error: any) => {
            let errorMessage = error.statusText;
            //this.loader.stopLoaderMethod();
            //console.log(errorMessage);
            return of(
              userLoginActions.loginFailureAction({ message: errorMessage })
            );
          })
        );
      })
    );
  });

  loginRedirect$ = createEffect(
    () => {
      let route = "";
      return this.actions$.pipe(
        ofType(userLoginActions.loginSuccessAction),
        tap((action) => {
           
          // save user details in local Storage
          // window.localStorage.setItem('userDetails', JSON.stringify(action.userDetails) );
          // this.store.select(pageToRouteToAfterLoginSelector).subscribe((res) => { route = res  });
          // let newOrder  : order ;
          // this.store.select(orderSelector).subscribe((res) => {
          //   newOrder = res;
          //   // redirecting to the appropriate next page
          //  ( res.orderId === "" && route !== "/tabs/checkout")
          //     ? this.router.navigate([route])
          //     : this.router.navigate([route]);
          // });
          
          // updating the store owner 
          // if(route == "/tabs/checkout"){
          //   newOrder.orderOwner = action.userDetails.data;
          //     this.store.dispatch(
          //       createOrderAction({ selectedOrder: newOrder })
          //     );
          // }
        })
      );
    },
    { dispatch: false }
  );
}
