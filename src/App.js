import { useState, useEffect } from "react";
// import { I18nextProvider } from 'react-i18next';
// import i18n from './i18n'; // Your i18n configuration file
import "./App.scss";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
  Link,
  Redirect,
  Navigate,
} from "react-router-dom";

import Header from "./Shipment/Header";
import ShipmentStatus from "./Shipment/ShipmentStatus";
import ShipmentDetails from "./Shipment/ShipmentDetails";
import Details from "./Shipment/Details";
import Landing from "./Landing/Landing";
import TrackShipment from "./Shipment/TrackShipment";

// import { Link } from 'react-router-dom';

function App() {

  // const [language, setLanguage] = useState('ar'); // Default language is Arabic

  // const switchLanguage = (newLanguage) => {
  //   setLanguage(newLanguage);
  // };


  return (
    // <I18nextProvider i18n={i18n(language)}>
    <Router>
      <Routes>
        <Route
            path="/"
            element={<Landing />}
          />

        <Route
          path="/trackShipment/:tracking_number"
          element={<TrackShipment />}
        />
      </Routes>
    </Router>
    // </I18nextProvider>
  );
}

export default App;
