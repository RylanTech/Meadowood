import axios from "axios";
import { createContext } from "react";

export const HeaderContext = createContext()
// let baseUrl = "http://localhost:3001/"
let baseUrl = "https://meadowoodapi.site/"

export const HeaderProvider = (props) => {

    function getHeader() {
        return axios.get(baseUrl + "api/header")
        .then(response => {
            return response.data
        })
    }
    
    function setHeader(newHeader) {
        let myHeaders = {
            Authorization: `Bearer ${localStorage.getItem('meadowoodAdminToken')}`
          };
        return axios.post(baseUrl + "api/header", newHeader, {
            headers: myHeaders
        })
    }

    return (
        <HeaderContext.Provider
            value={{
                getHeader,
                setHeader
            }}
        >
            {props.children}
        </HeaderContext.Provider>
    )
}