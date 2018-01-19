import _ from 'lodash';
import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function dictionariesReducer(state = initialState.dictionaries, action) {
  switch (action.type) {
    case types.LOAD_FREQUENCY_SUCCESS:
      return Object.assign(_.clone(state), {
        frequencyList: action.frequencyList
      });
    case types.LOAD_DATA_CENTERS_SUCCESS:
      return Object.assign(_.clone(state), {
        dataCentersList: action.dataCentersList
      });
    case types.LOAD_RETENTION_TIME_SUCCESS:
      return Object.assign(_.clone(state), {
        retentionTimeList: action.retentionTimeList
      });

    default:
      return state;
  }
}
