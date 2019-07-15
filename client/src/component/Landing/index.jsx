import React from 'react';

export default class Landing extends React.Component {

  componentDidMount() {
    this.props.fetchShipments();
  }

  render() {
    const { shipmentList } = this.props;
    //getGrid(shipmentList);

    const list = shipmentList.map((shipment) =>
      <tr key={shipment.userId}>
        <td>
          <div>
            <select className="custom-select">

              {shipment.cargo.map((cargoType) =>
                <option key={`${cargoType.type}-${cargoType.description}-${cargoType.description}` } value={`${cargoType.type}-${cargoType.description}-${cargoType.description}`} >{`${cargoType.type}-${cargoType.description}-${cargoType.description}`}</option>
              )}

            </select>
          </div>
        </td>
        <td><div>{shipment.destination}</div></td>
        <td><div>{shipment.id}</div></td>
        <td><div>{shipment.mode}</div></td>
        <td><div>{shipment.name}</div></td>
        <td><div>{shipment.origin}</div></td>
        <td>
          <div>
            <select className="custom-select">
              {shipment.services.map((servicesType) =>
                <option key = {`${servicesType.type}-${(servicesType.value) ? servicesType.value : '0'}`} value={`${servicesType.type}-${(servicesType.value) ? servicesType.value : '0'}`} >{`${servicesType.type}-${(servicesType.value) ? servicesType.value : '0'}`}</option>
              )}</select></div></td>
        <td><div>{shipment.status}</div></td>
        <td><div>{shipment.total}</div></td>
        <td><div>{shipment.type}</div></td>
        <td><div>{shipment.userId}</div></td>  
        
      </tr>
    )

    return (
      <div className="listContainer">
        <table>
          <tbody>
          <tr key="000">
            <th>cargo</th>
            <th>destination</th>
            <th>id</th>
            <th>mode</th>
            <th>name</th>
            <th>origin</th>
            <th>services</th>
            <th>status</th>
            <th>total</th>
            <th>type</th>
            <th>userId</th>
            <th>Details</th>
          </tr>
          {list}
          </tbody>
        </table>
      </div > 
    ); 
  } 
}