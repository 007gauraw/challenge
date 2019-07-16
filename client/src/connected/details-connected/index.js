import ShipmentDetails from '../../component/shipment/index.js';
import { connect } from 'react-redux';
import { updateShipment } from '../../redux/action';


const mapDispatchToProps = dispatch => {
    return {
      updateShipment: (data) => {
            dispatch(updateShipment(data));
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
)(ShipmentDetails);