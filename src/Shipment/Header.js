import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import logo from '../Assets/images/logo.png'
import './styles.scss'
import Tracking from './Search';
// import { useTranslation } from 'react-i18next';


function Header() {
  // const { t } = useTranslation();
  const navigate = useNavigate();


  const [trackingNumber, setTrackingNumber] = useState('');
  const [trackingData, setTrackingData] = useState(null);

  const handleTrackingNumberChange = (event) => {
    setTrackingNumber(event.target.value);
  };

  const handleTrackShipment = () => {
    fetch(`https://tracking.bosta.co/shipments/track/${trackingNumber}`)
      .then(response => response.json())
      .then(data => {
        setTrackingData(data);
        console.log(data);
  
        // Move the navigate call here, after setting the trackingData
        navigate(`/trackShipment/${trackingNumber}`, { state: { trackingData: data } });
      })
      .catch(error => {
        console.error('Error fetching shipment data:', error);
      });
  };

    return ( 
<div>
<section>
  <div className='card'>
  <div className='card-header'>
  <div className="container">
  <div className="d-flex flex-row justify-content-between align-items-center">

    <div className='d-flex mb-2'>
    <img
      src={logo}
      className="flex-shrink-0"
      height="42"
      alt="Bosta logo"
    />
    </div>

    <div className="d-flex flex-row gap-5">
      <h6 className='bold-text'>الرئيسية</h6>
      <h6 className='bold-text'>الأسعار</h6>
      <h6 className='bold-text'>كلم المبيعات</h6>
    </div>

    <div className="d-flex flex-row align-items-center gap-5">
        <div className='d-flex'>
          <div className="input-group">
            <input
              type="text"
              value={trackingNumber}
              onChange={handleTrackingNumberChange}
              className="form-control"
              placeholder="رفع التتبع"
            />
          </div>
          <button 
            className='rounded-2'
            onClick={async () => {
              await handleTrackShipment();
              // navigate(`/trackShipment/${trackingNumber}`, { state: { trackingData } });
            }}
          >
            Search
          </button>
          </div>
      <h6 className='bold-text'>تسجيل الدخول</h6>
      <h6 className='text-danger bold-text'>ENG</h6>
      {/* <div>
      <button onClick={() => onLanguageSwitch('ar')}>العربية</button>
      <button onClick={() => onLanguageSwitch('en')}>ENG</button>
      <h1>{t('app.title')}</h1>
    </div> */}
    </div>

  </div>
  </div>
  </div>

  </div>
</section>

</div>
     );
}

export default Header;


