import * as c from '../actions/ActionTypes';

export const booksReducer = (state, action) => {
  switch (action.type) {
    case c.GET_BOOKS_SUCCESS:
      return {
        ...state,
        isLoaded: true,
        books: action.books
      };
    case c.GET_BOOKS_FAILURE:
      return {
        ...state,
        isLoaded: true,
        error: action.error
      };
    default:
      throw new Error(`There is no action matching ${action.type}.`);
  }
}