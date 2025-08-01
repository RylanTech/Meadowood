import axios from "axios";
import { createContext } from "react";

export const PersonContext = createContext()
// let baseUrl = "http://localhost:3001/"
// let baseUrl = "https://meadowoodapi.site/"
let baseUrl = "https://meadowood.workmanapi.site/"

export const PersonProvider = (props) => {

    function getAllPeople() {
        let myHeaders = {
            Authorization: `Bearer ${localStorage.getItem('meadowoodAdminToken')}`
        };
        return axios.get(baseUrl + "api/people/", {
            headers: myHeaders
        })
            .then(response => {
                return response.data
            })
    }

    function getPerson(id) {
        let myHeaders = {
            Authorization: `Bearer ${localStorage.getItem('meadowoodAdminToken')}`
        };
        return axios.get(baseUrl + `api/people/${id}`, {
            headers: myHeaders
        })
            .then(response => {
                return response.data
            })
    }

    function getPersonByEventId(id) {
        let myHeaders = {
            Authorization: `Bearer ${localStorage.getItem('meadowoodAdminToken')}`
        };
        return axios.get(baseUrl + `api/people/event/${id}`, {
            headers: myHeaders
        })
            .then(response => {
                return response.data
            })
    }


    function deletePerson(id) {
        let myHeaders = {
            Authorization: `Bearer ${localStorage.getItem('meadowoodAdminToken')}`
        };
        return axios.delete(baseUrl + `api/people/${id}`, {
            headers: myHeaders
        })
            .then(response => {
                return response.data
            })
    }

    function createPerson(person) {
        return axios.post(baseUrl + "api/people/", person)
            .then(response => {
                return response
            })
    }

    function editPerson(person) {
        let myHeaders = {
            Authorization: `Bearer ${localStorage.getItem('meadowoodAdminToken')}`
        };
        return axios.put(baseUrl + `api/events/${person.signedUpUserId}`, person, {
            headers: myHeaders
        })
            .then(response => {
                return response
            })
    }

    return (
        <PersonContext.Provider
            value={{
                getPerson,
                getAllPeople,
                editPerson,
                deletePerson,
                createPerson,
                getPersonByEventId
            }}
        >
            {props.children}
        </PersonContext.Provider>
    )
}