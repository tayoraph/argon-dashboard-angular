import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './login/login.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { AllUsersComponent } from './all-users/all-users.component';
import { UsersComponent } from './users/users.component';
import { RegisterNewUserComponent } from './register-new-user/register-new-user.component';
import { FormValidation } from 'src/app/utils/shared/formsValidations/formValidation';
import { NotificationService } from 'src/app/services/notification.service';
import { AuthRoutes } from './Authentication.router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoaderService } from 'src/app/utils/shared/Loader/loader.service';
import { LoadingInterceptor } from 'src/app/utils/shared/Loader/loading.interceptor';
import { StoreModule } from '@ngrx/store';
import { New_User_SEL } from './register-user/store/register.selector';
import { NewUserRegistrationReducer } from './register-user/store/register.reducer';
import { LoginReducer } from './login/store/login.reducer';
import { LOGIN_SEL } from './login/store/login.selector';
@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NgbModule,
    RouterModule.forChild(AuthRoutes),
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    StoreModule.forFeature(New_User_SEL, NewUserRegistrationReducer ),
    StoreModule.forFeature(LOGIN_SEL, LoginReducer )

  ],
  declarations: [
    RegisterUserComponent,
    AllUsersComponent,
    UsersComponent,
    RegisterNewUserComponent

  ],
  exports: [
    RegisterUserComponent,
    AllUsersComponent,
    UsersComponent,
    RegisterNewUserComponent
  ],
  providers:[FormValidation,NotificationService]
})
export class AuthenticationModule { }
