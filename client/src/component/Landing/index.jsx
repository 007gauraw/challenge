import React from 'react';
import { Link } from "react-router-dom";
import Search from "../search/index";

export default class Landing extends React.Component {

  componentDidMount() {

    if (this.props.shipmentList.length == 0) {
      this.props.fetchShipments();
    }

  }

  getVisiableList(list, pageNumber) {
    const index = (pageNumber * 20) - 20;// 20 element per page ;
    const upto = (index + 20 > (pageNumber * 20) + 20) ? (pageNumber * 20) + 20 : index + 20;
    const vList = [];
    for (let i = index; i < upto; i++) {
      if (!list[i]) {
        break;
      }
      vList.push(list[i]);
    }

    return vList;
  }

  createPagination(numberOfPages, keyCounter, curruntPageNumber) {
    const pagesArray = [];
    for (let i = 1; i <= numberOfPages; i++) {
      if (i === curruntPageNumber) {
        pagesArray.push(<option selected key={keyCounter++} value={i}>{i}</option>)
      } else {
        pagesArray.push(<option key={keyCounter++} value={i}>{i}</option>)
      }

    }
    return pagesArray;
  }

  onPageChage(e) {
    this.props.onPageChage(parseInt(e.target.value))
  }

  onSearchShipment = (value) => {
    //binding it to redux store bcause  
    // Search should be work on all data in redux store ... 

    if (value === '') {
      this.props.onClearSearch();
    } else {
      this.props.onSearchShipment(value);

    }
  }

  sortShipment = (event) => {
    const colName = event.target.innerText;
    if (!colName || colName == "Details") {
      return;
    }

    this.props.sortShipments(colName);
  }

  render() {
    const { shipmentList, pageNumber, searchEnable, serachList } = this.props;
    let keyCounter = 0;
    const shipments = (searchEnable) ? serachList : shipmentList;
    const visiableList = this.getVisiableList(shipments, pageNumber);
    const numberOfPages = parseInt(shipmentList.length / 20) + 1;
    const list = visiableList.map((shipment) =>
      <tr key={`${keyCounter++}-${shipment.userId}`}>
        <td>
          <div>
            <select className="custom-select">

              {shipment.cargo.map((cargoType) =>
                <option key={`${keyCounter++}-${cargoType.type}-${cargoType.description}-${cargoType.description}`} value={`${cargoType.type}-${cargoType.description}-${cargoType.description}`} >{`${cargoType.type}-${cargoType.description}-${cargoType.description}`}</option>
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
                <option key={`${keyCounter++}-${servicesType.type}-${(servicesType.value) ? servicesType.value : '0'}`} value={`${servicesType.type}-${(servicesType.value) ? servicesType.value : '0'}`} >{`${servicesType.type}-${(servicesType.value) ? servicesType.value : '0'}`}</option>
              )}</select></div></td>
        <td><div>{shipment.status}</div></td>
        <td><div>{shipment.total}</div></td>
        <td><div>{shipment.type}</div></td>
        <td><div>{shipment.userId}</div></td>
        <td>
          <div>
            <Link to={{ pathname: "/details", search: `?shipmentId=${shipment.id}&userId=${shipment.userId}` }}>
              Details
            </Link>
          </div>
        </td>
      </tr>
    )

    return (
      <div className="listContainer">
        <React.Fragment>
          <Search onSearchShipment={this.onSearchShipment} />
        </React.Fragment>
        <table>
          <tbody>
            <tr key="000" onClick= {this.sortShipment}>
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
        Select The Page
        <select style={{
          width: 128,
          height: 34
        }} onChange={(e) => this.onPageChage(e)}>

          {this.createPagination(numberOfPages, keyCounter, pageNumber)}
        </select >
      </div >
    );
  }
}