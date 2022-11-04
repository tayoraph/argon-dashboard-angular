import { RegisterNewUserDTO } from "src/app/utils/shared/models/user";

export const initialNewUserRegistrationState: RegisterNewUserDTO = {
  email: "",
  phoneNumber: "",
  firstName: "",
  lastName: "",
  password: "",
  roleId: "",
  userName: "",
};
