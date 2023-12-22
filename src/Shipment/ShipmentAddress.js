import React from 'react';
import './styles.scss'
import questions from '../Assets/images/questions.png'

function ShipmentAddress() {
    return ( 

    <div className='d-flex flex-column gap-2'>
        
        {/* title */}
        <h6>عنوان التسليم</h6>


        {/* card 1 */}
        <div className="card">
        <div className="card-body bg-body-tertiary">
            <p className="card-text">امبابة شارع طلعت حرب مدينة العمال بجوار البرنس منزل 17 بلوك 22</p>
        </div>
        </div> 

        {/* card 2 */}
        <div className="card">
        <div className="card-body">
            <div className='d-flex flex-row gap-4'>
                <div>
                <img
                    src={questions}
                    className="flex-shrink-0"
                    height="90"
                    alt="Questions img"
                />
                </div>

                <div className='d-flex flex-column'>
                <p className="card-text bold-text"> هل يوجد مشكلة في شحنتك؟!</p>
                <button 
                className='btn btn-danger'
                >إبلاغ عن مشكلة
                </button>
   
                </div>
    

            </div>

        </div>
        </div> 
    </div> 
);
}

export default ShipmentAddress;