import { Routes } from "@angular/router";
import { AllUsersComponent } from "./all-users/all-users.component";
import { RegisterNewUserComponent } from "./register-new-user/register-new-user.component";
import { RegisterUserComponent } from "./register-user/register-user.component";

export const AuthRoutes: Routes = [
  {
    path: "",
    component: RegisterUserComponent,
    children: [
        { path: '', redirectTo: 'allusers', pathMatch: 'full' },
      { path: "allusers", component: AllUsersComponent },
      { path: "newuser", component: RegisterNewUserComponent }
    ],
  },
];
