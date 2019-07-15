import { INIT_SHIPMENTS } from "../actionTypes";

const initialState = {
 shipmentList:[]
};

export default function(state = initialState, action) {
  switch (action.type) {
    case INIT_SHIPMENTS: {
      const { data } = action.payload;
      return {
        ...state,
        shipmentList: data
      };
    }
    
    default:
      return state;
  }
}
