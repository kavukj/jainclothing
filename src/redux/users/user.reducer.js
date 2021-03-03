import { useReducer } from "react"

const INITIAL_STATE = {
    currentUser:null
}
//if the state is undefined in any instance, its value will be set as initial value
const userReducer = (state=INITIAL_STATE,action) => {
    //Action has two properties: type and payload.
    switch(action.type){
        case 'SET_CURRENT_USER':
            //if type is this, return an object with updated currentUser value
            return {
                ...state,
                currentUser:action.payload
            }
        default:
            return state;
    }
}

export default userReducer;