import axios from 'axios';
import { FETCH_SHIPMENTS, UPDATE_SHIPMENTS, INIT_SHIPMENTS } from "./actionTypes";
import { ROOT_URL } from '../rootvariables';

// let nextTodoId = 0;

// export const fetchShipments = content => ({
//   type: ADD_TODO,
//   payload: {
//     id: ++nextTodoId,
//     content
//   }
// });

// export const toggleTodo = id => ({
//   type: TOGGLE_TODO,
//   payload: { id }
// });
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
