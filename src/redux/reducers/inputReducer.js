const INITIAL_STATE ={
    value: "",
    filter: ""
}

function inputReducer(state = INITIAL_STATE, action) {
    
    switch (action.type) {
        case 'VALUE': {
            return {
                ...state,
                value: action.payload
            }
        }
        case 'FILTER': {
            return {
                ...state,
                filter: action.payload
            }
        }
    }

    return state
}

export default inputReducer