import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/utils/shared/appState/appState';
import { GetAllUsersAction } from './store/register.action';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

  constructor(public route:Router, public store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.dispatch(
      GetAllUsersAction()
    );

    this.store.dispatch(
      GetAllUsersAction()
    );
  }
/** newuser registration  */
goToNewUserPage(){
  this.route.navigate(["Admin/Users/newuser"]);
}

goToAllUsesPage(){
  this.route.navigate(["Admin/Users/"]);
}
}
