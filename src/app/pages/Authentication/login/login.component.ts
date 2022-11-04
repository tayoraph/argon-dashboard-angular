import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/utils/shared/appState/appState';
import { validationMessages } from 'src/app/utils/shared/constants/constants';
import { FormValidation } from 'src/app/utils/shared/formsValidations/formValidation';
import { AuthUserDetails, user } from 'src/app/utils/shared/models/user';
import { loginAction } from './store/login.action';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  public errorMessage = '';
  public validationMessages;
  constructor(public formValidation :FormValidation,public store: Store<AppState>,
    public router : Router
    ) { 
    this.validationMessages = validationMessages;
    this.loginForm = this.formValidation.LoginMethod();
    this.validationMessages = validationMessages;
  }

  ngOnInit(): void {
  }

  login(value: user) {
    console.log(value)
    // this.router.navigate(['AMP/dashboard']);
    const userObj: user = {
      email: value.email,
      password: value.password
    }
    this.store.dispatch(loginAction({userDetails:userObj}));
    this.router.navigate(['Admin/user-profile']);
  }
}
