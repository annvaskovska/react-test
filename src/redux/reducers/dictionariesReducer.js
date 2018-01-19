import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function dictionariesReducer (state = initialState.dictionaries, action) {
  switch (action.type) {
    case types.LOAD_FREQUENCY_SUCCESS:
      return {
        frequencyList: action.frequencyList
      };

    default:
      return state;
  }
}
