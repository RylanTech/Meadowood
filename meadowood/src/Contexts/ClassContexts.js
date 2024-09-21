import axios from "axios";
import { createContext } from "react";

export const ClassContext = createContext()
let baseUrl = "http://localhost:3001/"
// let baseUrl = "https://meadowoodapi.site/"

export const ClassProvider = (props) => {

    
    async function getClasses() {
        return await axios.get(baseUrl + "api/classes/")
    }

    async function getOneClass(classId) {
        return await axios.get(baseUrl + `api/classes/get-one/${classId}`)
    }

    async function createClass(classDetails) {
        let myHeaders = {
            Authorization: `Bearer ${localStorage.getItem('meadowoodAdminToken')}`
          };
        return await axios.post(baseUrl + "api/classes/", classDetails, {
            headers: myHeaders
        })
    }

    async function editClass(classDetails) {
        let myHeaders = {
            Authorization: `Bearer ${localStorage.getItem('meadowoodAdminToken')}`
          };
        return await axios.post(baseUrl + `api/classes/update/${classDetails.classId}`, classDetails, {
            headers: myHeaders
        })
    }

    async function deleteClass(classId) {
        let myHeaders = {
            Authorization: `Bearer ${localStorage.getItem('meadowoodAdminToken')}`
          };
        return await axios.delete(baseUrl + `api/classes/delete/${classId}`, {
            headers: myHeaders
        })
    }

    return (
        <ClassContext.Provider
            value={{
                getClasses,
                createClass,
                editClass,
                deleteClass,
                getOneClass
            }}
        >
            {props.children}
        </ClassContext.Provider>
    )
}