import React from 'react';
import { Link } from "react-router-dom";

export default class ShipmentDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Loading',
            cargo: [],
            services: []
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentDidMount() {
        const params = new URLSearchParams(this.props.location.search);
        const userId = params.get("userId");
        const shipmentId = params.get("shipmentId");
        const { shipmentList } = this.props;
        const shipment = this.getSelectedProduct(shipmentList, userId, shipmentId);
        this.setState(...shipment);

    }

    getSelectedProduct(shipmentList, userId, shipmentId) {
        const shipmentArray = [];
        const shipment = shipmentList.find((shipment) => {
            return shipment.userId == userId && shipment.id == shipmentId;
        })
        shipmentArray.push(shipment);
        return shipmentArray || [];
    }

    handleChange(event) {
        this.setState({ name: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.updateShipment(this.state);
    }

    render() {


        return (
            <div className="shipmentDetailView">
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>
                            Name
                        </label>
                        <input value={this.state.name} onChange={this.handleChange} />
                    </div>
                    <div>
                        <label>
                            Destination

                        </label>
                        <textarea value={this.state.destination} disabled />
                    </div>
                    <div>
                        <label>
                            ID

                        </label>
                        <input value={this.state.id} disabled />
                    </div>
                    <div>


                        <label>
                            Cargo


                        </label>
                        <ul>
                            {this.state.cargo.map((cargoData) =>
                                <li key={`${cargoData.description}-${cargoData.type}-${cargoData.volume}`}>
                                    {`${cargoData.description}-${cargoData.type}-${cargoData.volume}`}</li>
                            )}
                        </ul>
                    </div>
                    <div>


                        <label>
                            Services

                        </label>
                        <ul >
                            {this.state.services.map((servicesType) =>
                                <li key={`${servicesType.type}-${(servicesType.value) ? servicesType.value : '0'}`}>
                                    {`${servicesType.type}-${(servicesType.value) ? servicesType.value : '0'}`}
                                </li>
                            )}</ul>
                    </div>
                    <div>


                        <label>
                            Mode

                        </label>
                        <input value={this.state.mode} disabled />
                    </div>
                    <div>


                        <label>
                            origin

                        </label>
                        <input value={this.state.origin} disabled />
                    </div>
                    <div>


                        <label>
                            Status

                        </label>
                        <input value={this.state.status} disabled />
                    </div>
                    <div>


                        <label>
                            Total

                        </label>
                        <input value={this.state.total} disabled />
                    </div>
                    <div>


                        <label>
                            Type

                        </label>
                        <input value={this.state.type} disabled />
                    </div>
                    <div>


                        <label>
                            User Id

                        </label>
                        <input value={this.state.userId} disabled />
                    </div>
                    <div>
                        <input className="custome-button" type="submit" value="Submit" />
                        <Link className="custome-button" to={{ pathname: "/" }}>Back</Link>
                    </div>

                </form>
            </div >
        );
    }
}