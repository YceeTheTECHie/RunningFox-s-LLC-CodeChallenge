import React from 'react';
import arrow from '../../images/arrow.png'
const AddPayments = () => {
    
    const handlePayment = e => {
        e.preventDefault();

    }
    // To update the state 
    // const onChange = (e) => {
    //     this.setState({
    //         [e.target.name] : e.target.value
    //     })
    // }
    return (
        <React.Fragment>
            <br /><br /><br /><br />
            <h3 className="AddPayment"> ADD PAYMENT METHOD</h3>
            <form onSubmit={handlePayment}>
                <input
                    className="email"
                    type="email"
                    placeholder="  Email Address"    
                />
                <button className="paymentBtn">Proceed To Payment</button>
            </form>
        </React.Fragment>
    );
}

export default AddPayments;