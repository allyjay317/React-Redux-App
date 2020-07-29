import { SEARCH_CHANGE, FETCH_SEARCH_START, FETCH_SEARCH_SUCCESS } from "../actions";

const initialState = {
  savedCharacters: [{ name: 'Alysonna' }],
  viewCharacter: {},
  loggedIn: false,
  isFetching: false,
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
        isFetching: true,
        error: ''
      }
    case FETCH_SEARCH_SUCCESS:
      return {
        ...state,
        searchResults: action.payload,
        isFetching: false,
      }

    default:
      return state;
  }
}

