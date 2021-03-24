import { SUCCESSFULLY_CREATED_SESSION } from "."

export const createSession = (formData) => {
    return (dispatch) => {
        return fetch("http://localhost:3001/sessions", {
            method: "POST",
            body: formData
        })
            .then(res => {
                if (res.ok) {
                    return res.json()
                } else {
                    return res.json().then(errors => Promise.reject(errors))
                }
            })
            .then(sessionJson => {
                dispatch({
                    type: SUCCESSFULLY_CREATED_SESSION,
                    payload: sessionJson
                })
            })
    };
};