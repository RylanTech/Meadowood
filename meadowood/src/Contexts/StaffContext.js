import axios from "axios";
import { createContext } from "react";

export const StaffContext = createContext()
let baseUrl = "http://localhost:3001/"

export const StaffProvider = (props) => {

    function getOneStaff(id) {
        let myHeaders = {
            Authorization: `Bearer ${localStorage.getItem('meadowoodAdminToken')}`
          };
        return axios.get(baseUrl + `api/staff/${id}`, {
            headers: myHeaders
        })
        .then(response => {
            return response.data
        })
    }
    
    function getAllStaff() {
        return axios.get(baseUrl + "api/staff")
        .then(response => {
            return response.data
        })
    }

    function editStaff(editedStaff) {
        let myHeaders = {
            Authorization: `Bearer ${localStorage.getItem('meadowoodAdminToken')}`
          };
        return axios.put(baseUrl + `api/staff/${editedStaff.staffId}`, editedStaff, {
            headers: myHeaders
        })
    }

    function createStaff(newStaff) {
        let myHeaders = {
            Authorization: `Bearer ${localStorage.getItem('meadowoodAdminToken')}`
          };
        return axios.post(baseUrl + "api/staff", newStaff, {
            headers: myHeaders
        })
    }

    function deleteStaff(id) {
        let myHeaders = {
            Authorization: `Bearer ${localStorage.getItem('meadowoodAdminToken')}`
          };
        return axios.delete(baseUrl + `api/staff/${id}`, {
            headers: myHeaders
        })
    }

    return (
        <StaffContext.Provider
            value={{
                getOneStaff,
                getAllStaff,
                createStaff,
                deleteStaff,
                editStaff
            }}
        >
            {props.children}
        </StaffContext.Provider>
    )
}