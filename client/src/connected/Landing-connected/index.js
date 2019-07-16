import Landing  from '../../component/landing';

import { connect } from 'react-redux';
import { fetchAllShipments, updatePageNumber, onSearchShipment, onClearSearch, sortShipments } from '../../redux/action';


const mapDispatchToProps = dispatch => {
    return {
        fetchShipments: () => {
            dispatch(fetchAllShipments());
        },
        onPageChage: (number) => {    
            dispatch(updatePageNumber(number));
        },
        onSearchShipment: (value) => {
            dispatch(onSearchShipment(value));
        },
        onClearSearch: ()=> {
            dispatch(onClearSearch())
        },
        sortShipments : (colName) => {
            dispatch(sortShipments(colName))
        }
    };
};

const mapStateToProps = state => {
    return {
        shipmentList: state.shipments.shipmentList,
        pageNumber: state.shipments.pageNumber,
        serachList: state.shipments.serachList,
        searchEnable: state.shipments.searchEnable
      };
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Landing);