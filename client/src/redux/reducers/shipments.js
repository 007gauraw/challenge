import { INIT_SHIPMENTS, UPDATE_SHIPMENTS, UPDATE_PAGE_NUMBER, SEARCH_SHIPMENT, CLEAR_SEARCH, SORT_SHIPMENT } from "../actionTypes";

const initialState = {
  shipmentList: [],
  pageNumber: 1,
  searchEnable: false,
  serachList: []
};

export default function (state = initialState, action) {
  switch (action.type) {
    case INIT_SHIPMENTS: {
      const { data } = action.payload;
      return {
        ...state,
        shipmentList: data
      };
    }
    case UPDATE_SHIPMENTS: {
      const shipmentUpdatedList = state.shipmentList.map((shipment) => {
        if (shipment.id == action.payload.id) {
          return action.payload
        } else {
          return shipment;
        }
      })
      return {
        ...state, shipmentList: shipmentUpdatedList
      }
    }

    case UPDATE_PAGE_NUMBER: {
      return {
        ...state,
        pageNumber: action.payload.number
      }
    }

    case SEARCH_SHIPMENT: {
      const serachResult = state.shipmentList.filter((shipment) => {
        return action.payload.value === shipment.id;
      })

      return {
        ...state,
        searchEnable: true,
        serachList: serachResult
      }
    }

    case CLEAR_SEARCH: {
      return {
        ...state,
        searchEnable: false,
        serachList: []
      }
    }

    case SORT_SHIPMENT: {
      let sortedList;
      if (state.searchEnable) {
        sortedList = state.serachList.sort((shipmentA, shipmentB) =>
          shipmentA[action.payload.colName] - shipmentB[action.payload.colName])
      } else {
        sortedList = state.shipmentList.sort((shipmentA, shipmentB) =>
          shipmentA[action.payload.colName] - shipmentB[action.payload.colName])
      }

      if (state.searchEnable) {
        return {
          ...state,
          serachList: sortedList
        }
      } else {
        return {
          ...state,
          shipmentList: sortedList
        }
      }
  }

    default:
      return state;
  }
}

function sorting(list) {

}