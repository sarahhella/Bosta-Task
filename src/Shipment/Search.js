import React from 'react';
import { Dropdown } from 'react-bootstrap';

function Search() {
    return ( 
<nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="/">Your Logo</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            {/* Track Shipment dropdown */}
            <Dropdown>
              <Dropdown.Toggle variant="link" id="track-shipment-dropdown">
                Track Shipment
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.ItemText>Track Shipment</Dropdown.ItemText>
                <Dropdown.Item>
                  <input type="text" className="form-control" placeholder="Enter tracking number" />
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </li>
          {/* Add other navbar items here */}
        </ul>
      </div>
    </nav>
    );
    }
    
    export default Search;