import { SEARCH_CHANGE, FETCH_SEARCH_START, FETCH_SEARCH_SUCCESS, FETCH_CHARACTER_START, FETCH_CHARACTER_SUCCESS, FETCH_CHARACTER_ERROR, FETCH_SEARCH_ERROR, FETCH_TITLE_SUCCESS, FETCH_GEAR_SUCCESS, FETCH_GLAMOUR_SUCCESS, FETCH_TITLE_START, FETCH_GEAR_START, FETCH_GLAMOUR_START, FETCH_GLAMOUR_ERROR, FETCH_GEAR_ERROR, SAVE_CHARACTER } from "../actions";

const initialState = {
  savedCharacters: [],
  viewCharacter: { ActiveClassJob: {}, ClassJobs: [], gearData: [], glamourData: [] },
  loggedIn: false,
  isFetching: [],
  searchText: '',
  searchResults: []
}



export const CharacterReducer = (state = initialState, action) => {

  switch (action.type) {
    case SEARCH_CHANGE:
      return {
        ...state,
        searchText: action.payload
      }
    case FETCH_SEARCH_START:
      return {
        ...state,
        searchResults: [],
        isFetching: [...state.isFetching, FETCH_SEARCH_START],
        error: ''
      }
    case FETCH_SEARCH_SUCCESS:
      return {
        ...state,
        searchResults: action.payload,
        isFetching: state.isFetching.filter(fetch => fetch !== FETCH_SEARCH_START),
      }
    case FETCH_SEARCH_ERROR:
      return {
        ...state,
        isFetching: state.isFetching.filter(fetch => fetch !== FETCH_SEARCH_START),
        error: action.payload
      }

    case FETCH_CHARACTER_START: {

      let newFetch = [...state.isFetching, FETCH_CHARACTER_START, FETCH_TITLE_START, FETCH_GEAR_START, FETCH_GLAMOUR_START]
      return {
        ...state,
        viewCharacter: {},
        isFetching: newFetch
      }
    }
    case FETCH_CHARACTER_SUCCESS:
      return {
        ...state,
        viewCharacter: { ...action.payload, gearData: [], glamourData: [] },
        isFetching: state.isFetching.filter(fetch => fetch !== FETCH_CHARACTER_START),
      }
    case FETCH_CHARACTER_ERROR:
      return {
        ...state,
        isFetching: [],
        error: action.payload
      }
    case FETCH_TITLE_SUCCESS:
      return {
        ...state,
        viewCharacter: { ...state.viewCharacter, Title: action.payload },
        isFetching: state.isFetching.filter(fetch => fetch !== FETCH_TITLE_START),
      }
    case FETCH_GEAR_SUCCESS:
      return {
        ...state,
        isFetching: state.isFetching.filter(fetch => fetch !== FETCH_GEAR_START),
        viewCharacter: { ...state.viewCharacter, gearData: action.payload }
      }
    case FETCH_GLAMOUR_SUCCESS:
      return {
        ...state,
        viewCharacter: { ...state.viewCharacter, glamourData: action.payload },
        isFetching: state.isFetching.filter(fetch => fetch !== FETCH_GLAMOUR_START),
      }
    case FETCH_GEAR_ERROR:
      return {
        ...state,
        isFetching: state.isFetching.filter(fetch => fetch !== FETCH_GEAR_START),
        viewCharacter: { ...state.viewCharacter, gearData: [] }
      }
    case FETCH_GLAMOUR_ERROR:
      return {
        ...state,
        isFetching: state.isFetching.filter(fetch => fetch !== FETCH_GLAMOUR_START),
        viewCharacter: { ...state.viewCharacter, glamourData: [] }
      }
    case SAVE_CHARACTER: {
      let newState
      state.savedCharacters.filter(test => test.id === action.payload.id).length === 0 ?
        newState = {
          ...state,
          savedCharacters: [...state.savedCharacters, action.payload]
        } :
        newState = state

      return newState
    }
    default:
      return state;
  }
}

