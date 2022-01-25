import { useDispatch } from "react-redux"

const INITIAL_STATE ={
    pays: [],
    id: ''
}

function paysReducer(state = INITIAL_STATE, action) {
    
    switch (action.type) {
        case 'LOADAPI': {
            return {
                ...state,
                pays: action.payload
            }
        }
        case 'IDCHANGE': {
            return {
                ...state, 
                id: action.payload
            }
        }
    }

    return state
}

export default paysReducer

export const getPaysApi = () => dispatch => {
    fetch('https://restcountries.com/v2/all')
    .then(response => response.json())
    .then(data => {
        dispatch({
            type: 'LOADAPI',
            payload: data
        })
    })
}