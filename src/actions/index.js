import * as c from './ActionTypes';

export const getBooksSuccess = (books) => ({
  type: c.GET_BOOKS_SUCCESS,
  books
});

export const getBooksFailure = (error) => ({
  type: c.GET_BOOKS_FAILURE,
  error
});