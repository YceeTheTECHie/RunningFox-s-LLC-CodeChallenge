import React from 'react';
import AddPayments from '../Payments/AddPayments';
import PaymentDetails from '../Payments/PaymentDetails';
import CurrentPlan from './CurrentPlan';
const UpgradePlan = () => {
    return (
        <div className="Plan-container">
            <h3>Upgrade your plan</h3>
            <h4 className="shadow-text">Please make the payment to start enjoying all the features <br /> of our premium plan as soon as possible</h4><br/>
            <div className="currentBorder"><CurrentPlan/></div>
            <PaymentDetails/>
            <AddPayments/> 
        </div>
    );

}
export default UpgradePlan
