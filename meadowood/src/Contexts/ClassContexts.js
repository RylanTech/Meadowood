import axios from "axios";
import { createContext } from "react";

export const ClassContext = createContext()
// let baseUrl = "http://localhost:3001/"
let baseUrl = "https://meadowoodapi.site/"

export const ClassProvider = (props) => {

    
    async function getClasses() {
        let res = await axios.get(baseUrl + "api/classes/")
        return res.data
    }

    async function getOneClass(classId) {
        let res = await axios.get(baseUrl + `api/classes/get-one/${classId}`)
        return res.data
    }

    async function createClass(classDetails) {
        let myHeaders = {
            Authorization: `Bearer ${localStorage.getItem('meadowoodAdminToken')}`
          };
          let res = await axios.post(baseUrl + "api/classes/", classDetails, {
            headers: myHeaders
        })
        return res.data
    }

    async function editClass(classDetails) {
        let myHeaders = {
            Authorization: `Bearer ${localStorage.getItem('meadowoodAdminToken')}`
          };
        let res = await axios.put(baseUrl + `api/classes/update/${classDetails.classId}`, classDetails, {
            headers: myHeaders
        })
        return res.data
    }

    async function deleteClass(classId) {
        let myHeaders = {
            Authorization: `Bearer ${localStorage.getItem('meadowoodAdminToken')}`
          };
          let res = await axios.delete(baseUrl + `api/classes/delete/${classId}`, {
            headers: myHeaders
        })
        return res.data
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