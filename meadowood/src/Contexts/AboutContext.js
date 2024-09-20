import axios from "axios";
import { createContext } from "react";

export const AboutContext = createContext()
let baseUrl = "http://localhost:3001/"
// let baseUrl = "https://meadowoodapi.site/"

export const AboutProvider = (props) => {

    function getText() {
        return axios.get(baseUrl + "api/about")
        .then(response => {
            return response.data
        })
    }
    
    function editAbout(newStatus) {
        let myHeaders = {
            Authorization: `Bearer ${localStorage.getItem('meadowoodAdminToken')}`
          };
        return axios.post(baseUrl + "api/about", newStatus, {
            headers: myHeaders
        })
    }

    return (
        <AboutContext.Provider
            value={{
                getText,
                editAbout
            }}
        >
            {props.children}
        </AboutContext.Provider>
    )
}