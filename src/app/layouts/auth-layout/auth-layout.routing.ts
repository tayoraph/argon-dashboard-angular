import { Routes } from '@angular/router';
import { LoginComponent } from 'src/app/pages/Authentication/login/login.component';

import { RegisterComponent } from '../../pages/register/register.component';

export const AuthLayoutRoutes: Routes = [
    // { path: 'login',          component: LoginComponent },
    { path: 'register',       component: RegisterComponent }
];
