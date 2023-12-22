
import React, { useState } from 'react';

const ShipmentDetails = ({trackingData }) => {
  const isDelivered = trackingData?.CurrentStatus?.state === "DELIVERED";
  const isCancelled= trackingData?.CurrentStatus?.state === "CANCELLED";
  
  const [transitEvents, setTransitEvents] = useState(trackingData.TransitEvents);



  function formatDate(timestamp) {
    const date = new Date(timestamp);
    const day = date.getDate();
    const month = date.getMonth() + 1; // Months are zero-based
    const year = date.getFullYear();
  
    // Ensure single digit days and months are formatted with leading zeros
    const formattedDay = day < 10 ? `0${day}` : day;
    const formattedMonth = month < 10 ? `0${month}` : month;
  
    return `${formattedDay}/${formattedMonth}/${year}`;
  }


  function formatTime(timestamp) {
    const date = new Date(timestamp);
    let hours = date.getHours();
    const minutes = date.getMinutes();
    const period = hours >= 12 ? 'PM' : 'AM';
  
    // Convert to 12-hour format
    hours = hours % 12 || 12;
  
    // Ensure single digit minutes are formatted with leading zero
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
  
    return `${hours}:${formattedMinutes} ${period}`;
  }

  const tableData = [
    { branch: 'مدينة نصر', date: '', time: '', detail: 'تم إنشاء الشحنة' },
    { branch: 'مدينة نصر', date: '', time: '', detail: 'لم يتم إستلام الشحنة من التاجر ' },
    { branch: 'مدينة نصر', date: '', time: '', detail: ' لم يتم خروج الشحنة للتسليم' },
    { branch: 'مدينة نصر', date: '', time: '', detail: 'لم يتم تسليم الشحنة' },
  ];

// Find the indices of TICKET_CREATED and DELIVERED states
const ticketCreatedIndex = transitEvents.findIndex(event => event.state === 'TICKET_CREATED');
const receivedIndex = transitEvents.findIndex(event => event.state === 'PACKAGE_RECEIVED');
const outIndex = transitEvents.findIndex(event => event.state === 'OUT_FOR_DELIVERY');
const deliveredIndex = transitEvents.findIndex(event => event.state === 'DELIVERED');


// Update the corresponding rows in the tableData array
const updatedTableData = tableData.map((row, index) => {
  if (index === 0 && ticketCreatedIndex !== -1) {
    return {
      ...row,
      date: formatDate(transitEvents[ticketCreatedIndex].timestamp),
      time: formatTime(transitEvents[ticketCreatedIndex].timestamp),
      detail: 'تم إنشاء الشحنة'
    };
  }
 if (index === 1 && receivedIndex !== -1) {
    return {
      ...row,
      date: formatDate(transitEvents[receivedIndex].timestamp),
      time: formatTime(transitEvents[receivedIndex].timestamp),
      detail: 'تم إستلام الشحنة من التاجر '

    };
  }
  if (index === 2 && receivedIndex !== -1) {
    return {
      ...row,
      date: formatDate(transitEvents[outIndex].timestamp),
      time: formatTime(transitEvents[outIndex].timestamp),
      detail: 'الشحنة خرجت للتسليم'

    };
  }
  if (index === 3 && deliveredIndex !== -1) {
    return {
      ...row,
      date: formatDate(transitEvents[deliveredIndex].timestamp),
      time: formatTime(transitEvents[deliveredIndex].timestamp),
      detail: 'تم التسليم'
    };
  }
  return row;
});
  
    return ( 

        <div>
        <h6 className='mb-3'>تفاصيل الشحنة</h6>
          <div className="card-body">
            <table className="table custom-table rounded-8">
              <colgroup>
                <col style={{ width: "auto" }} />
                <col style={{ width: "auto" }} />
                <col style={{ width: "auto" }} />
                <col style={{ width: "auto" }} />
              </colgroup>
              <thead className= "bg-light">
                <tr>
                  <th scope="col">
                    الفرع
                  </th>
                  <th scope="col">
                    التاريخ 
                  </th>
                  <th scope="col">
                    الوقت
                  </th>
                  <th scope="col">
                    تفاصيل
                  </th>
                </tr>
              </thead>
              <tbody>
              {updatedTableData.map((row, index) => (
            <tr key={index}>
              <td>{row.branch}</td>
              <td>{row.date}</td>
              <td>{row.time}</td>
              <td>{row.detail}</td>
            </tr>
          ))}
            </tbody>
            </table>
          </div>
      </div>
  
);
}

export default ShipmentDetails;