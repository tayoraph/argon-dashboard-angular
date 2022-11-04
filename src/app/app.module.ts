import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { environment } from 'src/environments/environment';
import { LOGIN_SEL } from './pages/Authentication/login/store/login.selector';
import { LoginReducer } from './pages/Authentication/login/store/login.reducer';
import { SharedModule } from './utils/shared/shared.module';
import { ToastrModule } from 'ngx-toastr';
import { LoginEffects } from './pages/Authentication/login/store/login.effects';
import { AuthService } from './services/authService/autth.Service';
import { BaseHttpService } from './utils/shared/BaseHttp/base-http.service';
import { SampleService } from './services/SampleService';
import { RegisterEffects } from './pages/Authentication/register-user/store/register.effects';
import { MyInterceptor } from './utils/shared/BaseHttp/HttpInterceptor';

// import { AllUsersComponent } from './pages/Authentication/all-users/all-users.component';
// import { UsersComponent } from './pages/Authentication/users/users.component';
// import { RegisterNewUserComponent } from './pages/Authentication/register-new-user/register-new-user.component';


@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    NgbModule,
    RouterModule,
    AppRoutingModule,
    SharedModule,
    StoreModule.forRoot({},{
      runtimeChecks: {
        strictStateImmutability: false,
        strictActionImmutability: true,
        strictStateSerializability: true,
        strictActionSerializability: true,
        strictActionWithinNgZone: true,
        strictActionTypeUniqueness: true,
      },
    }),
    
    StoreDevtoolsModule.instrument({
      name:"RCNLagos Redux App",
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    //  autoPause: true, // Pauses recording actions and state changes when the extension window is not open
    }),
    EffectsModule.forRoot([LoginEffects, RegisterEffects]),
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 15000, // 15 seconds
      closeButton: true,
      progressBar: true,
      iconClasses : {
        error: 'toast-success',
        info: 'toast-error',
        success: 'toast-warning',
        warning: 'toast-info',
      },
      positionClass: 'toast-top-left',
    }),
    // EffectsModule.forRoot([MovieEffects])
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AuthLayoutComponent,

    // AllUsersComponent,
    // UsersComponent,
    // RegisterNewUserComponent
  ],
  providers: [SampleService, BaseHttpService, 
   
  
   ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
