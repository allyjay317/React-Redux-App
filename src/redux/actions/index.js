import Axios from "axios"

export const SEARCH_CHANGE = 'SEARCH_CHANGE'
export const FETCH_CHARACTER_SUCCESS = 'FETCH_CHARACTER_SUCCESS'
export const FETCH_SEARCH_START = 'FETCH_CHARACTER_START'
export const FETCH_SEARCH_SUCCESS = 'FETCH_SEARCH_SUCCESS'
export const FETCH_SEARCH_ERROR = 'FETCH_SEARCH_ERROR'
export const FETCH_CHARACTER_START = 'FETCH_CHARACTER_START'
export const FETCH_CHARACTER_ERROR = 'FETCH_CHARACTER_ERROR'

export const searchChange = text => {
  return { type: SEARCH_CHANGE, payload: text }
}

export const fetchCharacter = character => dispatch => {
  dispatch({ type: FETCH_SEARCH_START })
  Axios.get(`https://xivapi.com/character/search?name=${character}`)
    .then(res => {
      console.log(res.data.Results)
      dispatch({ type: FETCH_SEARCH_SUCCESS, payload: res.data.Results })
    })
    .catch(err => {

    })
}