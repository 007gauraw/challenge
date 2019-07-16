import axios from 'axios';
import { FETCH_SHIPMENTS, UPDATE_SHIPMENTS, INIT_SHIPMENTS, UPDATE_PAGE_NUMBER, SEARCH_SHIPMENT, CLEAR_SEARCH, SORT_SHIPMENT } from "./actionTypes";
import { ROOT_URL } from '../rootvariables';

// let nextTodoId = 0;
export const sortShipments = colName => ({
  type: SORT_SHIPMENT,
  payload: {
    colName
  }
})

export const onSearchShipment = value => ({
  type: SEARCH_SHIPMENT,
  payload: {
    value
  }
});

export const onClearSearch = () => ({
  type: CLEAR_SEARCH
});

export const updatePageNumber = number => ({
  type: UPDATE_PAGE_NUMBER,
  payload: {
    number
  }
});

export const updateShipment = updatedShipment => ({
  type: UPDATE_SHIPMENTS,
  payload: updatedShipment
});

export const initShipmentList = data => ({
  type: INIT_SHIPMENTS,
  payload: { data }
});

export const fetchAllShipments = () => {
  return (dispatch) => {

    const url = `${ROOT_URL}/shipments`;
    return axios.get(url)
      .then(response => {
        dispatch(initShipmentList(response.data));
      })
      .catch(error => {
        throw (error);
      });
  };
};
//export const setFilter = filter => ({ type: SET_FILTER, payload: { filter } });
