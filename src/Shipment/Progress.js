import React from 'react';
import { Dropdown } from 'react-bootstrap';
import redTick from "../Assets/images/red_tick.svg";
import greenTick from "../Assets/images/green_tick.svg";
import yellowTick from "../Assets/images/yellow_tick.svg";
import grayTick from "../Assets/images/gray_tick.svg";
import redCross from "../Assets/images/red_cross.svg"
import yellowCross from "../Assets/images/yellow_cross.svg"
import './styles.scss';

const Progress = ({ trackingData }) => {
  const transitEvents = trackingData?.TransitEvents || [];
  const isDelivered = trackingData?.CurrentStatus?.state === 'DELIVERED';
  const isCancelled = trackingData?.CurrentStatus?.state === 'CANCELLED';

  // Determine the stages based on transit events
  const stage1 = transitEvents.find(event => event.state === 'TICKET_CREATED');
  const stage2 = transitEvents.find(event => event.state === 'PACKAGE_RECEIVED');
  const stage3 = transitEvents.find(event => event.state === 'OUT_FOR_DELIVERY');
  const stage4 = transitEvents.find(event => event.state === 'DELIVERED');

  return (
    <div className="wrapper">
      <div className="margin-area">

        {/* Stage 4 */}
        <div className="dot one">
          {stage4 ? (
            <img src={greenTick} className="flex-shrink-0" height="18" alt="Tick logo" />
          ) : (
            <img src={grayTick} className="flex-shrink-0" height="18" alt="Tick logo" />
          )}
        </div>

        {/* Stage 3 */}
        <div className="dot two">
          {stage3 ? (
            <img src={greenTick} className="flex-shrink-0" height="18" alt="Tick logo" />
          ) : isCancelled ? (
            <img src={redCross} className="flex-shrink-0" height="18" alt="Tick logo" />
          ) : (
            <img src={grayTick} className="flex-shrink-0" height="18" alt="Tick logo" />
          )}
        </div>

        {/* Stage 2 */}
        <div className="dot three">
          {stage2 ? (
            <img src={greenTick} className="flex-shrink-0" height="18" alt="Tick logo" />
          ) : isCancelled ? (
            <img src={redTick} className="flex-shrink-0" height="18" alt="Tick logo" />
          ) : (
            <img src={grayTick} className="flex-shrink-0" height="18" alt="Tick logo" />
          )}
        </div>

        {/* Stage 1 */}
        <div className="dot four">
          {stage1 ? (
            <img src={greenTick} className="flex-shrink-0" height="18" alt="Tick logo" />
          ) : isCancelled ? (
            <img src={redTick} className="flex-shrink-0" height="18" alt="Tick logo" />
          ) : (
            <img src={grayTick} className="flex-shrink-0" height="18" alt="Tick logo" />
          )}
        </div>

        {/* Your progress bars */}
        <div className={`progress-bar first ${isDelivered ? 'progress-bar-green' : ''}`}></div>
        <div className={`progress-bar second ${isDelivered ? 'progress-bar-green' : ''} ${isCancelled ? 'progress-bar-red' : ''}`}></div>
        <div className={`progress-bar third ${isDelivered ? 'progress-bar-green' : ''} ${isCancelled ? 'progress-bar-red' : ''}`}></div>

        {/* Your messages */}
        <div className="message message-1 bold-text">تم التسليم</div>
        <div className="message message-2 bold-text">الشحنة خرجت للتسليم</div>
        <div className="message message-3 bold-text">تم إستلام الشحنة من التاجر</div>
        <div className="message message-4 bold-text">تم إنشاء الشحنة</div>
      </div>
    </div>
  );
}

export default Progress;