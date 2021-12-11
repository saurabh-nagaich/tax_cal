import axios from "axios"


const { FETCH_USERS_REQUEST, FETCH_USERS_FAILURE, FETCH_USERS_SUCCESS } = require("./userType")


export const fetchUserRequest =()=>{
    return {
        type:FETCH_USERS_REQUEST
    }
}
export const fetchUserSuccess =user=>{
    return {
        type:FETCH_USERS_SUCCESS,
        payload:user
    }
}
export const fetchUserFailure =(error)=>{
    return {
        type:FETCH_USERS_FAILURE,
        payload:error
    }
}

export const fetchData =()=>{
    return (dispatch)=> {
        dispatch(fetchUserRequest())
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then(res=>{
                const users = res.data
                dispatch(fetchUserSuccess(users))
            })
            .catch(err=>{
                const error = err.message
                dispatch(fetchUserFailure(error))
            })
    }
}