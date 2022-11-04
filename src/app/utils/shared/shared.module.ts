import { CommonModule } from "@angular/common";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatDialogRef } from "@angular/material/dialog";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { AllUsersComponent } from "src/app/pages/Authentication/all-users/all-users.component";
import { AuthenticationModule } from "src/app/pages/Authentication/Authentication.module";
import { LoginComponent } from "src/app/pages/Authentication/login/login.component";
import { LoginEffects } from "src/app/pages/Authentication/login/store/login.effects";
import { LoginReducer } from "src/app/pages/Authentication/login/store/login.reducer";
import { LOGIN_SEL } from "src/app/pages/Authentication/login/store/login.selector";
import { RegisterNewUserComponent } from "src/app/pages/Authentication/register-new-user/register-new-user.component";
import { RegisterUserComponent } from "src/app/pages/Authentication/register-user/register-user.component";
import { UsersComponent } from "src/app/pages/Authentication/users/users.component";
import { AuthService } from "src/app/services/authService/autth.Service";
import { NotificationService } from "../services/notification/notification.service";
import { BaseHttpService } from "./BaseHttp/base-http.service";
import { HeaderInterceptor } from "./BaseHttp/HttpInterceptor";
import { LoaderComponent } from "./component/loader/loader.component";
import { FormValidation } from "./formsValidations/formValidation";
import { LoaderService } from "./Loader/loader.service";
import { LoadingInterceptor } from "./Loader/loading.interceptor";
import { MaterialModule } from "./material.module";

// import { ProductReducer } from "src/app/pages/product/store/product.reducer";
// import { PRODUCT_SEL } from "src/app/pages/product/store/product.selector";
// import { OrderService } from "src/app/services/Order/OrderService";
// import { ProductService } from "src/app/services/Products/product.service";
// import { RequestDataService } from "src/app/services/RequestData/requestDataService";
// import { ShippingAddressService } from "src/app/services/shippingAddress/shippingAddress.service";
// import { AuthGuard } from "../Guard/authGuard/auth.guard";
// import { CustomerGuard } from "../Guard/customerGuard/customer.guard";
// import { AlertService } from "./alert/alert";
// import { CatalogSingleProductComponent } from "./components/catalog-single-product/catalog-single-product.component";
// import { DeliveryComponent } from "./components/delivery/delivery.component";
// import { PasswordFormComponent } from "./components/forms/password-form/password-form.component";
// import { ProfileFormComponent } from "./components/forms/profile-form/profile-form.component";
// import { WhatsappnumberComponent } from "./components/forms/whatsappnumber/whatsappnumber.component";
// import { HeaderComponent } from "./components/header/header.component";
// import { LoaderComponent } from "./components/loader/loader.component";
// import { LogoImageComponent } from "./components/logo-image/logo-image.component";
// import { ModalPageComponent } from "./components/modal-page/modal-page.component";
// import { NewRequestModalComponent } from "./components/new-request-modal/new-request-modal.component";
// import { NewRequestComponent } from "./components/new-request/new-request.component";
// import { RequestEffects } from "./components/new-request/store/request.effect";
// import { RequestReducer } from "./components/new-request/store/request.reducer";
// import { REQUEST_SEL } from "./components/new-request/store/request.selector";
// import { PaystackPaymentComponent } from "./components/paystack-payment/paystack-payment.component";
// import { RequestButtonsComponent } from "./components/request-buttons/request-buttons.component";
// import { RequestSelectionsComponent } from "./components/request-selections/request-selections.component";
// import { RequestSummaryComponent } from "./components/request-summary/request-summary.component";
// import { ShippingAddressComponent } from "./components/shipping-address/shipping-address.component";
// import { ShippngAddressDetailsComponent } from "./components/shippng-address-details/shippng-address-details.component";
// import { FormValidation } from "./formsValidations/formValidation";
// import { loaderService } from "./Loader/loader.service";

@NgModule({
    declarations : [
      
    LoginComponent,
    LoaderComponent
        //  NewRequestComponent,
        //  NewRequestModalComponent,
        //  RequestSelectionsComponent, 
        //  RequestSummaryComponent,
        //  RequestButtonsComponent,
        //  ProfileFormComponent,
        //  PasswordFormComponent,
        //  HeaderComponent,
        //  ShippingAddressComponent,
        //  PaystackPaymentComponent,
        //  LogoImageComponent,
        //  ShippngAddressDetailsComponent,
        //  DeliveryComponent,
        //  LoaderComponent,
        //  WhatsappnumberComponent,
        //  CatalogSingleProductComponent,
        //  ModalPageComponent
         
        ],
    imports:[
            CommonModule,
            ReactiveFormsModule,
            FormsModule,
            MaterialModule
            // EffectsModule.forFeature([LoginEffects]),
            // StoreModule.forFeature(LOGIN_SEL, LoginReducer )
            // EffectsModule.forFeature([Feature1Effects, Feature2Effects]),
       
            // StoreModule.forFeature(PRODUCT_SEL, ProductReducer ),
            // StoreModule.forFeature(REQUEST_SEL, RequestReducer ),
            // EffectsModule.forFeature([RequestEffects, OrderEffects]),


    ],
    providers : [FormValidation,
        
      //  AuthService,
        //loaderService,
        NotificationService, 
        {
            provide: MatDialogRef,
            useValue: {}
          },
          LoaderService,
          {
            provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true
          },
          {
            provide: HTTP_INTERCEPTORS, useClass: HeaderInterceptor, multi: true
          },
        //RequestDataService,  ProductService, ShippingAddressService, OrderService,
        // guard
       // AuthGuard,
      //  CustomerGuard
],
    exports : [
        LoaderComponent
       
        // NewRequestComponent, NewRequestModalComponent,  RequestSelectionsComponent, 
        // RequestSummaryComponent,RequestButtonsComponent,
        // ProfileFormComponent,PasswordFormComponent,HeaderComponent,ShippingAddressComponent,
        // PaystackPaymentComponent,
        // LogoImageComponent,ShippngAddressDetailsComponent, DeliveryComponent, LoaderComponent,WhatsappnumberComponent,
        // CatalogSingleProductComponent,
        // ModalPageComponent
        
         ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule{}