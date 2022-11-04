import { HttpHeaders } from "@angular/common/http";
export const paystackApiKey = "pk_test_24ea5dfb0319f15bfe487fdfbcf1b2ab3f1e2521";

export const validationMessages = {
    email: [
      { type: 'required', message: 'Email is required.' },
      { type: 'pattern', message: 'Enter a valid email.' }
    ],
    password: [
      { type: 'required', message: 'Password is required.' },
      { type: 'minlength', message: 'Password must be at least 5 characters long.' }
    ],
    mobile: [
      { type: 'required', message: 'Mobile Number  is required.' },
      { type: 'minlength', message: 'Mobile Number must be at least 11 numbers long.' }
    ],
    phoneNumber: [
      { type: 'required', message: 'Mobile Number  is required.' },
      { type: 'minlength', message: 'Mobile Number must be at least 11 numbers long.' },
      { type: 'pattern', message: 'Mobile Number must be numeric' }
    ],
    firstName: [
      { type: 'required', message: 'First Name is required.' },
      { type: 'minlength', message: 'First Name must be at least 3 characters long.' }
    ],
    lastName: [
      { type: 'required', message: 'Last Name is required.' },
      { type: 'minlength', message: 'Last Name must be at least 3 characters long.' }
    ],
    ApartmentSuiteNumber: [
      { type: 'required', message: 'Apartment/Suite Number is required.' },
      { type: 'minlength', message: 'Apartment/Suite Number must be at least 1 characters long.' }
    ],
    streetAddress: [
      { type: 'required', message: 'address is required.' },
      { type: 'minlength', message: 'address must be at least 3 characters long.' }
    ],
    city: [
      { type: 'required', message: 'city is required.' },
      { type: 'minlength', message: 'city must be at least 3 characters long.' }
    ],
    lga: [
      { type: 'required', message: 'lga is required.' },
      { type: 'minlength', message: 'lga must be at least 3 characters long.' }
    ],
    state: [
      { type: 'required', message: 'state is required.' },
      { type: 'minlength', message: 'state must be at least 3 characters long.' }
    ],
    country: [
      { type: 'required', message: 'Country is required.' },
      { type: 'minlength', message: 'Country must be at least 3 characters long.' }
    ],
    productName:[ { type: 'required', message: 'Product Name is required.' },
    { type: 'minlength', message: 'Product Name must be at least 3 characters long.' }
    ],
    bodyPart:[ { type: 'required', message: 'Body Part is required.' }
    ],
    skinIssue:[ { type: 'required', message: 'Skin Issue is required.' }
    ],
    skinColor:[ { type: 'required', message: 'Skin Color is required.' }
  ],
    price:[ { type: 'required', message: 'Price is required.' },
    { type: 'minlength', message: 'Price must be at least 1 characters long.' }
    ],
    size:[ { type: 'required', message: 'Size is required.' },
    { type: 'minlength', message: 'Size must be at least 1 characters long.' }
    ],
    productCategory:[ { type: 'required', message: 'Category is required.' },
    { type: 'minlength', message: 'Size must be at least 1 characters long.' }
    ],
    categoryName:[ { type: 'required', message: 'Category name is required.' },
    { type: 'minlength', message: 'Category Name must be at least 2 characters long.' }
    ],
    description: [ { type: 'required', message: 'Description name is required.' },
    { type: 'minlength', message: 'Description  Name must be at least 5 characters long.' }
    ],
   };




   export enum AddressAction {
    add = 1,
    edit,
    view,
    delete,
    viewList
  }
  
   // loading constants
   export  const imageUrl = {
      spinnerHide: 'hide',
      spinnerShow: 'show',
      spinnerBubble: 'bubbles',
      spinnerLines: 'lines',
      // spinnerLines-small: 'lines-small',
      spinnerCircles: 'circles',
      spinnerCrescent: 'crescent',
      spinnerDots:  'dots',
      durationDefault: 5000,
      durationMoreTime: 7000,
      signupmsg : ' Registering....',
      imageLoadsucces : ' Image was updated successfully',
      waiting : 'Please wait...',
      login : ' logging in....',
      uploadImage : ' Uploading Image....',
      displayingImage : ' Displaying new Image....',
      successRegistration : 'Your account has been created. Please log in.',
      loading :'loading.....'
    };


export class Constants {
  // headers



  httpHeader() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8',
     'Access-Control-Allow-Origin': '*',
    'Authorization': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1aWQiOiI2MjRiMTg3NjQxOTZiYjAwMWE4ZWE0MjYiLCJhaWQiOiI2MjRjMTA4YjQxOTZiYjAwMWE4ZWE0MzUiLCJ0d29fZmEiOmZhbHNlLCJpbnN0YW5jZV9pZCI6IjYxMzZkZmE2YTFhYjlkMzE4YmNmY2I5NCIsImlzcyI6InNlbmRib3guYXBwcy5hdXRoLTYxMzZkZmE2YTFhYjlkMzE4YmNmY2I5NCIsImV4cCI6MTY1NDMzODY4M30.uBFec0sF4ktpK8rmIIy3PtCbBawzVc3qN7NOSb7Zomo'
        });
    return headers;
  }

  alertValues() {
    const value = {
      button: 'Okay',
      errorTitle : 'error',
      successTitle : 'Successful',
      Notice : 'Notice'
    }
    return value;
  }


   /** General Strings */
   generalStrings() {
    const strings = {
      newUserAdded : 'New user was added successfully',
      messageAdded: "New message added successfully",
      messageNotAdded: "New message was not added successfully",
      ministerAdded: "New minister was added successfully",
      ministerNotAdded: "New minister was not added. ",
      requestWasSuccessful: "request Was Successful ",
      unRequestWasSuccessful: "UnSuccessful request ",
      MeetingFliers : 'meetingFliers',
      InvalidEmail : 'Invalid email Address',
      logoutNotSuccessful : 'ogout was not successful',
      logoutSuccessful : 'You have successfully logged out',


    };
    return strings;
  }

  
  /** toast controller values */
  toasterCtrl() {
    const toast = {
      Done: "Done",
      top: "top",
      middle: "middle",
      bottom: "bottom",
      csCclass: "normalToast"
    };
    return toast;
  }



  // responses

  getAllresponses() {
    const responses = {
      noDetails: " no details for user",
      wrongUserDetails: "Wrong User Details",
      SuccessFul: "Successful",
      failure: " Request Failed",
      caution: " Error <br>  Contact Administrator",
      warningEmail: " You have registered this email before",
      Userwasnotfound: "User was not found",
      SignUpFailed: "Admin User Registration Request Failed",
      blockedUser: "User has been blocked",
      meetingIsAvailable : "Meeting is already available, kindly update",
      noImage : "Kindly upload a filer before submitting the meeting",
      notice : "Notice",
      

    };
    return responses;
  }



  // loading constants
  getLoaderMatters() {
    const imageUrl = {
      spinnerHide: 'hide',
      spinnerShow: 'show',
      spinnerBubble: 'bubbles',
      spinnerLines: 'lines',
      spinnerCircles: 'circles',
      spinnerCrescent: 'crescent',
      spinnerDots:  'dots',
      durationDefault: 5000,
      durationMoreTime: 7000,
      signupmsg : ' Registering....',
      imageLoadsucces : ' Image was updated successfully',
      waiting : 'Please wait...',
      login : ' logging in....',
      logout : ' logging you out....',
      uploadImage : ' Uploading Image....',
      displayingImage : ' Displaying new Image....',
      successRegistration : 'Your account has been created. Please log in.',
      loading :'loading.....',
    };
    return imageUrl;
  }

}




