import React from 'react';
import clock from '../../images/clock.jpg'
import doc from '../../images/docs.png'
import PriceScroll from './PriceScroll';
const Pricing = () => {
    return (
        <div className="pricing">   
            <h1 className="setup">Set Up Your Pricing</h1>
            <h4 className="time-text">Please set up your hourly or fixed rate so that <br/> the client is aware of your pricing </h4>
            <div className="button-group">
                <button className="hourly">
                    <img width="25em" height="28em" className="clock" src={clock} alt="icon"/>
                    <div className="text">Hourly</div>
                 </button>
                <button className="Fixed">
                    <img width="25em" height="28em" className="clock" src={doc} alt="icon" />
                    
                    <div className="text">Fixed</div>
                    
                    </button>
                
            </div>
            
            <PriceScroll/>
            
        </div>
    );
}

export default Pricing;