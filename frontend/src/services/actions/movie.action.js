import { ADDMOVIEREJ, ADDMOVIEREQ, ADDMOVIERES, DELETEMOVIEREJ, DELETEMOVIEREQ, DELETEMOVIERES, EDITMOVIEREJ, EDITMOVIEREQ, EDITMOVIERES, GETMOVIEREJ, GETMOVIEREQ, GETMOVIERES, GETONEMOVIEREJ, GETONEMOVIEREQ, GETONEMOVIERES } from "../const"
import axios from 'axios'
const getMovieReq = () => {
    return {
        type: GETMOVIEREQ
    }
}
const getMovieRes = (data) => {
    return {
        type: GETMOVIERES,
        payload: data
    }
}
const getMovieRej = (err) => {
    return {
        type: GETMOVIEREJ,
        payload: err
    }
}

export const getMovie = () => {
    return async dispatch => {
        dispatch(getMovieReq())
        await axios.get('http://localhost:3000/').then((res) => {
            dispatch(getMovieRes(res.data.data))
        }).catch((err) => {
            dispatch(getMovieRej(err))
        })
    }
}

const addMovieReq = () => {
    return {
        type: ADDMOVIEREQ
    }
}
const addMovieRes = () => {
    return {
        type: ADDMOVIERES,
    }
}
const addMovieRej = (err) => {
    return {
        type: ADDMOVIEREJ,
        payload: err
    }
}

export const addMovie = (data) => {
    return async dispatch => {
        dispatch(addMovieReq())
        await axios.post('http://localhost:3000/add', data).then((res) => {
            dispatch(addMovieRes())
            dispatch(getMovie())
        }).catch((err) => {
            dispatch(addMovieRej(err))
        })
    }
}
const getOneMovieReq = () => {
    return {
        type: GETONEMOVIEREQ
    }
}
const getOneMovieRes = (data) => {
    return {
        type: GETONEMOVIERES,
        payload: data
    }
}
const getOneMovieRej = (err) => {
    return {
        type: GETONEMOVIEREJ,
        payload: err
    }
}

export const getOneMovie = (id) => {
    return async dispatch => {
        dispatch(getOneMovieReq())
        await axios.get(`http://localhost:3000/getone/${id}`).then((res) => {
            dispatch(getOneMovieRes(res.data.data))
        }).catch((err) => {
            dispatch(getOneMovieRej(err))
        })
    }
}

const editMovieReq = () => {
    return {
        type: EDITMOVIEREQ
    }
}
const editMovieRes = () => {
    return {
        type: EDITMOVIERES,
    }
}
const editMovieRej = (err) => {
    return {
        type: EDITMOVIEREJ,
        payload: err
    }
}

export const editMovie = (id, data) => {
    return async dispatch => {
        dispatch(editMovieReq())
        console.log(id , data);
        await axios.put(`http://localhost:3000/edit/${id}`, data).then((res) => {
            dispatch(editMovieRes())
            dispatch(getMovie())
        }).catch((err) => {
            dispatch(editMovieRej(err))
        })
    }
}
const deleteMovieReq = () => {
    return {
        type: DELETEMOVIEREQ
    }
}
const deleteMovieRes = () => {
    return {
        type: DELETEMOVIERES,
    }
}
const deleteMovieRej = (err) => {
    return {
        type: DELETEMOVIEREJ,
        payload: err
    }
}

export const deleteMovie = (id) => {
    return async dispatch => {
        dispatch(deleteMovieReq())
        await axios.delete(`http://localhost:3000/delete/${id}`).then((res) => {
            dispatch(deleteMovieRes())
            dispatch(getMovie())
        }).catch((err) => {
            dispatch(deleteMovieRej(err))
        })
    }
}
