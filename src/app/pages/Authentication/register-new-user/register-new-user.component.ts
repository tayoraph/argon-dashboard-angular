import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { Store } from "@ngrx/store";
import { AppState } from "src/app/utils/shared/appState/appState";
import { FormValidation } from "src/app/utils/shared/formsValidations/formValidation";
import { UserRoles } from "src/app/utils/shared/models/Roles";
import { RegisterNewUserDTO } from "src/app/utils/shared/models/user";
import { GetAllUsersAction, RegisterNewUserAction } from "../register-user/store/register.action";
import { RolesSelector } from "../register-user/store/register.selector";

@Component({
  selector: "app-register-new-user",
  templateUrl: "./register-new-user.component.html",
  styleUrls: ["./register-new-user.component.css"],
})
export class RegisterNewUserComponent implements OnInit {
  // userRegistrationMethod
  public userRoles : [UserRoles]
  public registerNewUserForm: FormGroup;
  constructor(
    public formValidation: FormValidation,
   public store: Store<AppState>
  ) {
    this.registerNewUserForm = this.formValidation.userRegistrationMethod();
  }

  ngOnInit(): void {
  

    this.store.select(RolesSelector).subscribe(res=>{
      console.log(res);
      this.userRoles = res;
    })
  }

  /** New user registration  */
  Register(formData: RegisterNewUserDTO) {
    console.log(formData);
    let registrationData: RegisterNewUserDTO = {
      userName: formData.userName,
      email: formData.email,
      password: formData.password,
      firstName: formData.firstName,
      lastName: formData.lastName,
      phoneNumber: formData.phoneNumber,
      roleId: formData.roleId,
    };
    this.store.dispatch(
      RegisterNewUserAction({ newUserDetails: registrationData })
    );
  }
}
