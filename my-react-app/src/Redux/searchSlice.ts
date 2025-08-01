import { AnyAction } from "@reduxjs/toolkit"

const initialState = {
    searchTerm : ""
}

const searchReducer = (state = initialState, action : AnyAction) => {
    switch (action.type) {
        case "SET_SEARCH_TERM" : return {...state, searchTerm : action.payload}
        default:
            return state;
    }

}

export default searchReducer