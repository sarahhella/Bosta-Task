import React from 'react';
import ShipmentAddress from './ShipmentAddress';
import ShipmentDetails from './ShipmentDetails';

const Details = ({trackingData }) => {
    return ( 
        <div className="container">
        <div className="row">
          <div className="col-md-8">
            {/* ShipmentDetails with 2:1 ratio */}
            <ShipmentDetails
              trackingData = {trackingData}
             />
          </div>
          <div className="col-md-4">
            {/* ShipmentAddress with 2:1 ratio */}
            <ShipmentAddress />
          </div>
        </div>
      </div>   
        );
    }
    
    export default Details;