import axios from "axios";
import { createContext } from "react";

export const LiveContext = createContext()
// let baseUrl = "http://localhost:3001/"
let baseUrl = "https://meadowoodapi.site/"

export const LiveProvider = (props) => {

    function getStatus() {
        return axios.get(baseUrl + "api/live")
        .then(response => {
            return response.data
        })
    }
    
    function setStatus(newStatus) {
        let myHeaders = {
            Authorization: `Bearer ${localStorage.getItem('meadowoodAdminToken')}`
          };
        return axios.post(baseUrl + "api/live", newStatus, {
            headers: myHeaders
        })
    }

    return (
        <LiveContext.Provider
            value={{
                getStatus,
                setStatus
            }}
        >
            {props.children}
        </LiveContext.Provider>
    )
}