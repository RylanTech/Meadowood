import axios from "axios";
import { createContext } from "react";

export const EventContext = createContext()
let baseUrl = "http://localhost:3001/"

export const EventProvider = (props) => {

    function getAllEvents() {
        return axios.get(baseUrl + "api/events/")
            .then(response => {
                return response.data
            })
    }

    function getEvent(id) {
        let myHeaders = {
            Authorization: `Bearer ${localStorage.getItem('meadowoodAdminToken')}`
        };
        return axios.get(baseUrl + `api/events/${id}`, {
            headers: myHeaders
        })
            .then(response => {
                return response.data
            })
    }

    function deleteEvent(id) {
        let myHeaders = {
            Authorization: `Bearer ${localStorage.getItem('meadowoodAdminToken')}`
        };
        return axios.delete(baseUrl + `api/events/${id}`, {
            headers: myHeaders
        })
            .then(response => {
                return response.data
            })
    }

    function createEvent(event) {
        let myHeaders = {
            Authorization: `Bearer ${localStorage.getItem('meadowoodAdminToken')}`
        };
        return axios.post(baseUrl + "api/events/", event, {
            headers: myHeaders
        })
            .then(response => {
                return response
            })
    }

    function editEvent(event) {
        let myHeaders = {
            Authorization: `Bearer ${localStorage.getItem('meadowoodAdminToken')}`
        };
        return axios.put(baseUrl + `api/events/${event.eventId}`, event, {
            headers: myHeaders
        })
            .then(response => {
                return response
            })
    }

    return (
        <EventContext.Provider
            value={{
                getEvent,
                getAllEvents,
                createEvent,
                deleteEvent,
                editEvent
            }}
        >
            {props.children}
        </EventContext.Provider>
    )
}