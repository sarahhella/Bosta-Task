import React, { useEffect, useState } from "react";
// import { I18nextProvider } from 'react-i18next';
// import i18n from '../i18n'; // Your i18n configuration file
import { useNavigate, useParams } from "react-router";
import { useLocation } from 'react-router-dom';
import Header from './Header';
import ShipmentStatus from './ShipmentStatus';
import Details from './Details';


function TrackShipment() {

    // const [language, setLanguage] = useState('ar'); // Default language is Arabic

    // const switchLanguage = (newLanguage) => {
    // setLanguage(newLanguage);
    // };

    const location = useLocation();
    const trackingData = location.state?.trackingData;
    console.log('trackingData', trackingData);
    
    return ( 
        <>
        <Header />
        <ShipmentStatus
           trackingData = {trackingData}
        />
        <Details
            trackingData = {trackingData}
        />
        </>
        );
    }
    
    export default TrackShipment;