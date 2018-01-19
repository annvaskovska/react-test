import * as types from './actionTypes';
import DictionariesApi from '../../api/mockDictionariesApi';
import {beginAjaxCall, ajaxCallError} from "./ajaxStatusActions";

export function loadFrequencySuccess (frequencyList) {
  return {
    type: types.LOAD_FREQUENCY_SUCCESS,
    frequencyList
  };
}

export function loadFrequencyDictionary () {
  return function (dispatch) {
    dispatch(beginAjaxCall());
    return DictionariesApi.getFrequency().then(frequencyList => {
      dispatch(loadFrequencySuccess(frequencyList));
    }).catch(error => {
      dispatch(ajaxCallError());
      throw(error);
    });
  };
}
