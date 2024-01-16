import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const ClipContext = createContext()
let baseUrl = "http://localhost:3001/"

export const ClipProvider = (props) => {

    function getClips() {
        return axios.get(baseUrl + "api/clips")
            .then(response => {
                return response.data
            })
    }

    function getClip(id) {
        let myHeaders = {
            Authorization: `Bearer ${localStorage.getItem('meadowoodAdminToken')}`
        };
        return axios.get(baseUrl + `api/clips/oneclip/${id}`, {
            headers: myHeaders
        })
            .then(response => {
                return response.data
            })
    }

    function deleteClip(id) {
        let myHeaders = {
            Authorization: `Bearer ${localStorage.getItem('meadowoodAdminToken')}`
        };
        return axios.delete(baseUrl + `api/clips/${id}`, {
            headers: myHeaders
        })
            .then(response => {
                return response.data
            })
    }

    function editClip(updatedClip) {
        let myHeaders = {
            Authorization: `Bearer ${localStorage.getItem('meadowoodAdminToken')}`
        };
        return axios.put(baseUrl + `api/clips/${updatedClip.clipId}`, updatedClip, {
            headers: myHeaders
        })
            .then(response => {
                return response.data
            })
    }

    function createClip(clip) {
        let myHeaders = {
            Authorization: `Bearer ${localStorage.getItem('meadowoodAdminToken')}`
        };
        return axios.post(baseUrl + "api/clips", clip, {
            headers: myHeaders
        })
            .then(response => {
                return response.data
            })
    }

    return (
        <ClipContext.Provider
            value={{
                getClips,
                getClip,
                editClip,
                createClip,
                deleteClip
            }}
        >
            {props.children}
        </ClipContext.Provider>
    )
}