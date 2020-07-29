const initialState = {
  savedCharacters: [{ name: 'Alysonna' }],
  loggedIn: false,
  isFetching: false
}

export const CharacterReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
}