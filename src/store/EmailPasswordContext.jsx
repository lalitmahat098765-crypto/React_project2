import { createContext } from "react";
export const UserDataContext = createContext({
  formData: {},
  addNewUser: () => {},
});
