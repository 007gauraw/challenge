import Landing  from '../../component/Landing';

import { connect } from 'react-redux';
import { fetchAllShipments } from '../../redux/action';


const mapDispatchToProps = dispatch => {
    return {
        fetchShipments: () => {
            dispatch(fetchAllShipments());
        }
    };
};

const mapStateToProps = state => {
    return {
        shipmentList: state.shipments.shipmentList
      };
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Landing);