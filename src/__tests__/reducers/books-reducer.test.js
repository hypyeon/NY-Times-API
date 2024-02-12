import Books from "../../components/Books";
import { booksReducer } from "../../reducers/books-reducer";
import * as c from './../../actions/ActionTypes';

describe('booksReducer', () => {

  let action;

  const initialState = {
    isLoaded: false,
    books: [],
    error: null
  };

  test('should successfully throw a new error if a non-matching action type is passed into it', () => {
    expect(
      () => {
        booksReducer(initialState, { type: null })
      }
    ).toThrow("There is no action matching null.");
  });

  test('succeeding to get books should update books array and change isLoaded to true', () => {

    const books = 'A book';
    action = {
      type: c.GET_BOOKS_SUCCESS,
      books
    };

    expect(booksReducer(initialState, action)).toEqual({
      isLoaded: true,
      books: 'A book',
      error: null
    });
  });

  test('failing to get books should change isLoaded to true and add an error message', () => {
    const error = 'An error';
    action = {
      type: c.GET_BOOKS_FAILURE,
      error
    };
    expect(booksReducer(initialState, action)).toEqual({
      isLoaded: true,
      books: [],
      error: error
    });
  });
})