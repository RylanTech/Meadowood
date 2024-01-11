import axios from "axios";
import { createContext } from "react";

export const UserContext = createContext()
let baseUrl = "http://localhost:3001/"

export const UserProvider = (props) => {

  function login(credentials) {

    return axios.post(baseUrl + "api/user/signin", credentials)
      .then(response => {
        localStorage.setItem('meadowoodAdminToken', response.data)
        return response
      }
      );
  }

  function verify() {
    let myHeaders = {
      Authorization: `Bearer ${localStorage.getItem('meadowoodAdminToken')}`
    };
    return axios.post(baseUrl + "api/user/verify", null, {
      headers: myHeaders
    }).then(response => {
      return new Promise(resolve => resolve(response.data));
    })
  }

  function createAccount(newUser) {
    return axios.post(baseUrl + "api/user/create-account", newUser).then(response => {
      return new Promise(resolve => resolve(response.data));
    })
  }

  return (
    <UserContext.Provider
      value={{
        login,
        verify,
        createAccount
      }}
    >
      {props.children}
    </UserContext.Provider>
  )
}