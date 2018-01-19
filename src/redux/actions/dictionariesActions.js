import * as types from './actionTypes';
import DictionariesApi from '../../api/mockDictionariesApi';
import {beginAjaxCall, ajaxCallError} from "./ajaxStatusActions";

export function loadFrequencySuccess (frequencyList) {
  return {
    type: types.LOAD_FREQUENCY_SUCCESS,
    frequencyList
  };
}

export function loadDataCentersSuccess (dataCentersList) {
  return {
    type: types.LOAD_DATA_CENTERS_SUCCESS,
    dataCentersList
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

export function loadDataCentersDictionary () {
  return function (dispatch) {
    dispatch(beginAjaxCall());
    return DictionariesApi.getDataCenters().then(dataCentersList => {
      dispatch(loadDataCentersSuccess(dataCentersList));
    }).catch(error => {
      dispatch(ajaxCallError());
      throw(error);
    });
  };
}
