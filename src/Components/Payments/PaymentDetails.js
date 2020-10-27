import React from 'react';
import mastercard from '../../images/mastercard.png'
const PaymentDetails = () => {
    return (
        <div className="paymentDetails" >
            <h3>  Payment Details</h3>
            <div className="creditCard">
                <img className="creditcardphoto" src={mastercard} alt="credit card"/>
                <div className="CardDetails">
                    <h4 className="CreditCard">Credit Card</h4>
                    <h5 className="CardNumber">2344 xxxx xxxx 8080</h5>
                </div>
                <input placeholder = "CVC" className ="inputNumber" type="text" />
            </div>
            <div className="creditCard">
                <img className="creditcardphoto" src={mastercard} alt="credit card"/>
                <div className="CardDetails">
                    <h4 className="CreditCard">Credit Card</h4>
                    <h5 className="CardNumber">2344 xxxx xxxx 8080</h5>
                </div>
                <input placeholder = "88" className ="inputNumber" type="text" />
            </div>
        </div>
    );
}

export default PaymentDetails;