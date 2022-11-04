import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, AbstractControl, ValidationErrors } from '@angular/forms';


// ** password  matching function i got custom 
export function matchingInputsValidator(firstKey: string, secondKey: string) {
    return function (group: FormGroup): ValidationErrors | undefined {
      if (group.controls[firstKey].value !== group.controls[secondKey].value) {
        return {
          'missmatch': true
        };
      }
    };
  }


@Injectable()
export class FormValidation {
    public login!: FormGroup; // exclamation is assuring typescript that property is not null
    public UserReg!: FormGroup;
    public confirmNumber!: FormGroup;
    public forgotPassword!: FormGroup;
    public changePassword! : FormGroup;
    public addAddress! : FormGroup;
    public phoneNumberValidation! : FormGroup
    constructor(public formBuilder: FormBuilder) {}



    /**
     * @todo Add new address form
     * @returns 
     */
    newUserRegistrationAddress() {
        this.addAddress =
            this.formBuilder.group({
                firstName : new FormControl('', Validators.compose([Validators.required, Validators.minLength(1) ],)),
                lastName: new FormControl('', Validators.compose([Validators.required, Validators.minLength(3)])),
                email: new FormControl('', Validators.compose([ Validators.required, Validators.minLength(3) ])),
                  lga: new FormControl('', Validators.compose([Validators.required, Validators.minLength(3)])),
                  state: new FormControl('', Validators.compose([Validators.required, Validators.minLength(3)])),
                  country : new FormControl('', Validators.compose([Validators.required, Validators.minLength(3) ],)),
                  
                });
        return this.addAddress;
    }






/*** User Login Validation */

    LoginMethod() {
        this.login =
            this.formBuilder.group({
                email: new FormControl('', Validators.compose([
                    Validators.required,
                    Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
                  ])),
                  password: new FormControl('', Validators.compose([
                    Validators.minLength(5),
                    Validators.required
                  ])),
            });
        return this.login;
    }

    /*** Forgot Password Validation */

    ForgotPasswordMethod() {
        this.forgotPassword =
            this.formBuilder.group({
                email: new FormControl('', Validators.compose([
                    Validators.required,
                    Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
                  ]))
            });
        return this.forgotPassword;
    }

    /** change password */
    ChangePasswordMethod() {
        this.changePassword =
            this.formBuilder.group({
                password: ['', [Validators.minLength(5),
                Validators.required]],
                passwordConfirm: ['', [Validators.minLength(5),
                Validators.required]],
            }, { validator: this.passwordConfirming })
        return this.changePassword;
    }

    passwordConfirming(c: AbstractControl): { invalid: boolean } {
        let res : any;
        if (c.get('password')?.value !== c.get('passwordConfirm')?.value) {
            res  = { invalid: true };
        }
        return res;
    }

    userRegistrationMethod() {
     
           return this.formBuilder.group({
                email: new FormControl('', Validators.compose([
                    Validators.required,
                    Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
                  ])),
                  password: new FormControl('', Validators.compose([
                    Validators.minLength(5),
                    Validators.required
                  ])),
                    firstName: new FormControl('', Validators.compose([Validators.required, Validators.minLength(3)  ])),
                    lastName: new FormControl('', Validators.compose([ Validators.required, Validators.minLength(3) ])),
                    phoneNumber : new FormControl('', Validators.compose([Validators.required, Validators.minLength(11) ],)),
                    roleId : new FormControl('', Validators.compose([Validators.required, Validators.minLength(1) ],)),
                    userName : new FormControl('', Validators.compose([Validators.required, Validators.minLength(1) ],)),

                });
        
    }

    PhoneNumberMethod() {
        return this.formBuilder.group({phoneNumber : new FormControl('', Validators.compose([Validators.required, Validators.minLength(11) ],))});
    }

   addNewProductMethod() {
       
         return  this.formBuilder.group({
                  productName: new FormControl('', Validators.compose([Validators.required, Validators.minLength(3)  ])),
                  skinIssue: new FormControl('', Validators.compose([ ])),
                  bodyPart: new FormControl('', Validators.compose([ Validators.required ])),
                  skinColor: new FormControl('', Validators.compose([ Validators.required ])),
                  productCategory: new FormControl('', Validators.compose([ Validators.required ])),
                  imageUrl :    new  FormControl('', Validators.compose([ Validators.required, ])),
                  description:  new  FormControl('', Validators.compose([ Validators.required, Validators.minLength(5)])),
                //   size: new FormControl('', Validators.compose([ Validators.required ])),
                productPricingAnddSize: this.formBuilder.array([])
                });
    }
    // Validators.pattern("^[0-9]*$"), Validators.minLength(1) 
    addPriceAndSize(){
        return this.formBuilder.group({
            price: new FormControl('', Validators.compose([ Validators.required, ])),
            size: new FormControl('', Validators.compose([ Validators.required, Validators.minLength(1) ])),
          });
    }

    searchByEmail(){
        return this.formBuilder.group({
            email: new FormControl('', Validators.compose([
              
                Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
              ])),
              mobile : new FormControl('', Validators.compose([ Validators.minLength(11) ],)),

          });
    }


    /**
     * 
     * @returns add new category
     */
    createNewCategory(){
        return this.formBuilder.group({
            categoryName:   new FormControl('', Validators.compose([ Validators.required, ])),
              imageUrl :    new  FormControl('', Validators.compose([ Validators.required, ])),

          });
    }
}
