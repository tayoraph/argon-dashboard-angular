import { ActionReducerMap } from "@ngrx/store";
import { LoginReducer } from "src/app/pages/Authentication/login/store/login.reducer";
import { NewUserRegistrationReducer } from "src/app/pages/Authentication/register-user/store/register.reducer";
import { userResponse } from "../models/user";
// import { orderReducer } from "src/app/pages/cart/store/cart.reducer";
// import { order } from "src/app/pages/cart/store/cart.state";
// import { whatsAppReducer } from "src/app/pages/landing/store/landing.reducers";
// import { whatsappAdminMobileModel } from "src/app/pages/landing/store/landing.state";
// import { LoginReducer } from "src/app/pages/login/store/login.reducer";
// import { ProductReducer } from "src/app/pages/product/store/product.reducer";
// import { registerReducer } from "src/app/pages/register/store/register.reducer";
// import {  RequestReducer } from "../components/new-request/store/request.reducer";
// import { shippingAddressReducer } from "../components/shipping-address/store/shipping.address.reducer";
// import { product } from "../models/product";
// import { shippingAddressModel } from "../models/shipping.addres";
// import { userResponse } from "../models/user";


export interface AppState{
    // chatMobileLine : whatsappAdminMobileModel,
    // product: product,
    // order : order,
    // register: userResponse,
    login: userResponse,
    NewUserRegistration: userResponse,
    // shippingAddress: shippingAddressModel

}



export const reducers = { 
    // chatMobileLine : whatsAppReducer,
    // product : ProductReducer,
    // order : orderReducer,
    // register : registerReducer,
    login : LoginReducer,
    NewUserRegistration : NewUserRegistrationReducer,
    // shippingAddress : shippingAddressReducer
  };
