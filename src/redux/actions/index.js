import Axios from "axios"

export const SEARCH_CHANGE = 'SEARCH_CHANGE'

export const FETCH_SEARCH_START = 'FETCH_SEARCH_START'
export const FETCH_SEARCH_SUCCESS = 'FETCH_SEARCH_SUCCESS'
export const FETCH_SEARCH_ERROR = 'FETCH_SEARCH_ERROR'

export const FETCH_CHARACTER_SUCCESS = 'FETCH_CHARACTER_SUCCESS'
export const FETCH_CHARACTER_START = 'FETCH_CHARACTER_START'
export const FETCH_CHARACTER_ERROR = 'FETCH_CHARACTER_ERROR'

export const FETCH_TITLE_SUCCESS = 'FETCH_TITLE_SUCCESS'
export const FETCH_TITLE_ERROR = 'FETCH_TITLE_ERROR'

export const FETCH_GEAR_SUCCESS = 'FETCH_GEAR_SUCCESS'
export const FETCH_GEAR_ERROR = 'FETCH_GEAR_ERROR'
export const FETCH_GLAMOUR_SUCCESS = 'FETCH_GLAMOUR_SUCCESS'
export const FETCH_GLAMOUR_ERROR = 'FETCH_GLAMOUR_ERROR'

export const FETCH_TITLE_START = 'FETCH_TITLE_START'
export const FETCH_GEAR_START = 'FETCH_GEAR_START'
export const FETCH_GLAMOUR_START = 'FETCH_GLAMOUR_START'

export const SAVE_CHARACTER = 'SAVE_CHARACTER'

const api_key = 'de99e0fb3a0b4f6ab3ec8733bd87a199f66fe7fc83ec42ac8f6c4d3a2d153216'

export const searchChange = text => {
  return { type: SEARCH_CHANGE, payload: text }
}

export const fetchSearch = character => dispatch => {
  dispatch({ type: FETCH_SEARCH_START })
  Axios.get(`https://xivapi.com/character/search?name=${character}&private_key=${api_key}`)
    .then(res => {
      dispatch({ type: FETCH_SEARCH_SUCCESS, payload: res.data.Results })
    })
    .catch(err => {
      dispatch({ type: FETCH_SEARCH_ERROR, payload: err.message })
    })
}

export const fetchCharacter = character => dispatch => {

  dispatch({ type: FETCH_CHARACTER_START })
  Axios.get(`https://xivapi.com/character/${character}?data=CJ&private_key=${api_key}`)
    .then(res => {
      dispatch({ type: FETCH_CHARACTER_SUCCESS, payload: res.data.Character })
      Axios.get(`https://xivapi.com/Title/${res.data.Character.Title}`)
        .then(res => {
          console.log(res)
          dispatch({ type: FETCH_TITLE_SUCCESS, payload: res.data.Name })
        })
        .catch(err => {
          dispatch({ type: FETCH_TITLE_ERROR, payload: err.message })
        })
      let promises = []
      let glamour = []

      for (const slot in res.data.Character.GearSet.Gear) {
        promises.push(Axios.get(`https://xivapi.com/item/${res.data.Character.GearSet.Gear[slot].ID}?private_key=de99e0fb3a0b4f6ab3ec8733bd87a199f66fe7fc83ec42ac8f6c4d3a2d153216`))
        if (res.data.Character.GearSet.Gear[slot].Mirage) {
          glamour.push(Axios.get(`https://xivapi.com/item/${res.data.Character.GearSet.Gear[slot].Mirage}?private_key=de99e0fb3a0b4f6ab3ec8733bd87a199f66fe7fc83ec42ac8f6c4d3a2d153216`))
        }
      }
      Axios.all(promises).then(Axios.spread((...responses) => {

        dispatch({
          type: FETCH_GEAR_SUCCESS, payload: responses.map(res => {
            return {
              name: res.data.Name,
              icon: `https://xivapi.com${res.data.Icon}`
            }
          })
        })
      }))
        .catch(err => {
          dispatch({ type: FETCH_GEAR_ERROR, payload: err.message })
        })
      Axios.all(glamour).then(Axios.spread((...responses) => {

        dispatch({
          type: FETCH_GLAMOUR_SUCCESS, payload: responses.map(res => {
            return {
              name: res.data.Name,
              icon: `https://xivapi.com${res.data.Icon}`
            }
          })
        })
      }))
        .catch(err => {
          dispatch({ type: FETCH_GLAMOUR_ERROR, payload: err.message })
        })
    })
    .catch(err => {
      dispatch({ type: FETCH_CHARACTER_ERROR, payload: err.message })
    })
}

export const bookmark = save => {
  return { type: SAVE_CHARACTER, payload: save }
}