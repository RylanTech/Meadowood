import axios from "axios";
import { createContext } from "react";

export const ConnectionContext = createContext()
// let baseUrl = "http://localhost:3001/"
let baseUrl = "https://meadowoodapi.site/"

export const ConnectionProvider = (props) => {

    function getConnections() {
        let myHeaders = {
            Authorization: `Bearer ${localStorage.getItem('meadowoodAdminToken')}`
        };
        return axios.get(baseUrl + "api/connection", {
            headers: myHeaders
        })
            .then(response => {
                return response.data
            })
    }

    function getConnection(id) {
        let myHeaders = {
            Authorization: `Bearer ${localStorage.getItem('meadowoodAdminToken')}`
        };
        return axios.get(baseUrl + `api/connection/oneconnection/${id}`, {
            headers: myHeaders
        })
            .then(response => {
                return response.data
            })
    }

    function deleteConnection(id) {
        let myHeaders = {
            Authorization: `Bearer ${localStorage.getItem('meadowoodAdminToken')}`
        };
        return axios.delete(baseUrl + `api/connection/${id}`, {
            headers: myHeaders
        })
            .then(response => {
                return response.data
            })
    }

    function createConnection(connection) {
        return axios.post(baseUrl + "api/connection", connection)
            .then(response => {
                return response
            })
    }

    return (
        <ConnectionContext.Provider
            value={{
                getConnection,
                getConnections,
                deleteConnection,
                createConnection
            }}
        >
            {props.children}
        </ConnectionContext.Provider>
    )
}