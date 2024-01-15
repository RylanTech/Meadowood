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
                createClip
            }}
        >
            {props.children}
        </ClipContext.Provider>
    )
}