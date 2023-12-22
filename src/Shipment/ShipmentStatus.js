import React from 'react';
import Progress from './Progress';

const ShipmentStatus = ({trackingData }) => {



    function formatTimestamp(timestamp) {
        const options = {
          hour: 'numeric',
          minute: 'numeric',
          hour12: true,
          month: 'numeric',
          day: 'numeric',
          year: 'numeric',
        //   weekday: 'long',
        };
      
        const arabicWeekdays = [
          'الأحد',
          'الاثنين',
          'الثلاثاء',
          'الأربعاء',
          'الخميس',
          'الجمعة',
          'السبت',
        ];
      
        const date = new Date(timestamp);
        const formattedDate = new Intl.DateTimeFormat('en-US', options).format(date);
        const arabicDayOfWeek = arabicWeekdays[date.getDay()];
      
        return `${arabicDayOfWeek} at ${formattedDate}`;
      }

      function formatDate(timestamp) {
        const options = {
          day: 'numeric',
          month: 'long',
          year: 'numeric',
          weekday: 'long',
        };
      
        const date = new Date(timestamp);
        const formattedDate = new Intl.DateTimeFormat('ar-EG', options).format(date);
      
        return formattedDate;
      }
      
      // Example usage:
      const timestamp = "2023-04-04T13:52:13.977Z";
      const formattedDate = formatDate(timestamp);
      console.log(formattedDate);




    return (         
    <div className="d-flex align-items-center justify-content-center flex-fill mx-5">
    <div className="card mt-5 mb-4 w-100 mx-5">

    <div className="card-header">
        <div className='d-flex flex-row justify-content-around p-2'>
            <div className='d-flex flex-column align-items-flex-start'>
                <h6>رقم الشحنة {trackingData.TrackingNumber}</h6>
                {/* status check */}
                { trackingData.CurrentStatus.state =="DELIVERED" &&
                <h6 className='bold-text text-success'>تم تسليم الشحنة</h6>
                }  
                { trackingData.CurrentStatus.state =="DELIVERED_TO_SENDER" &&
                <h6 className='bold-text text-warning'>لم يتم تسليم الشحنة</h6>
                }               
                { trackingData.CurrentStatus.state =="CANCELLED" &&
                <h6 className='bold-text text-danger'>تم إلغاء الشحنة</h6>
                }               
             
            </div>

            <div className='d-flex flex-column align-items-flex-start'>
                <h6> اخر تحديث </h6>
                <h6 className='bold-text'>{formatTimestamp(trackingData.CurrentStatus.timestamp)}</h6>
            </div>

            <div className='d-flex flex-column align-items-flex-start'>
                <h6>اسم التاجر</h6>
                <h6 className='bold-text'>SOUQ.COM</h6>
            </div>

            <div className='d-flex flex-column align-items-flex-start'>
                <h6>موعد التسليم خلال</h6>
                {!trackingData.PromisedDate === null &&
                <h6 className='bold-text'>{formatDate(trackingData.PromisedDate)}</h6>
                }
                {trackingData.PromisedDate === null &&
                <h6 className='bold-text'>-</h6>
                }
            </div>
        </div>
        
    </div>
    <div className="card-body">
        <div className='d-flex justify-content-center'>
        <Progress
            trackingData = {trackingData}
        />
        </div>
    </div>
    </div>
    </div>
    // </div>


);
}

export default ShipmentStatus;