import { ADDMOVIEREJ, ADDMOVIEREQ, ADDMOVIERES, DELETEMOVIEREJ, DELETEMOVIEREQ, DELETEMOVIERES, EDITMOVIEREJ, EDITMOVIEREQ, EDITMOVIERES, GETMOVIEREJ, GETMOVIEREQ, GETMOVIERES, GETONEMOVIEREJ, GETONEMOVIEREQ, GETONEMOVIERES } from "../const";

const initialState = {
    isLoading: false,
    err: null,
    movies: [],
    movie: null
}

export const movieReducer = (state = initialState, action) => {
    switch (action.type) {
        case GETMOVIEREQ:
            return {
                ...state,
                isLoading: true,
            }
        case GETMOVIERES:
            return {
                ...state,
                isLoading: false,
                movies: action.payload
            }
        case GETMOVIEREJ:
            return {
                ...state,
                isLoading: false,
                err: action.payload
            }
        case GETONEMOVIEREQ:
            return {
                ...state,
                isLoading: true,
            }
        case GETONEMOVIERES:
            return {
                ...state,
                isLoading: false,
                movie: action.payload
            }
        case GETONEMOVIEREJ:
            return {
                ...state,
                isLoading: false,
                err: action.payload
            }
        case DELETEMOVIEREQ:
            return {
                ...state,
                isLoading: true,
            }
        case DELETEMOVIERES:
            return {
                ...state,
                isLoading: false,
            }
        case DELETEMOVIEREJ:
            return {
                ...state,
                isLoading: false,
                err: action.payload
            }
        case EDITMOVIEREQ:
            return {
                ...state,
                isLoading: true,
            }
        case EDITMOVIERES:
            return {
                ...state,
                isLoading: false,
            }
        case EDITMOVIEREJ:
            return {
                ...state,
                isLoading: false,
                err: action.payload
            }
        case ADDMOVIEREQ:
            return {
                ...state,
                isLoading: true,
            }
        case ADDMOVIERES:
            return {
                ...state,
                isLoading: false,
            }
        case ADDMOVIEREJ:
            return {
                ...state,
                isLoading: false,
                err: action.payload
            }
        default:
            return state;
    }
}