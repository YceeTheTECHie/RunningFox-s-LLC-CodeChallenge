import React from 'react';
import photo from '../../images/photo.jpg'
const CurrentPlan = () => {
    return (
        <div className="currentPlan">
            <img className="plan-photo" src={photo} width="60em" height="62em" alt="plan"/>
            <div className="planInfo">
                <h4>Small Business</h4>
                <h4 className="changePlan">CHANGE PLAN</h4>
            </div>
            <div className="amount">
                <span className="moneysign">$</span><h4 className="money">8,350<span className="duration">/ year</span></h4>
                
            </div>      
        </div>
        
        
            
    );
}

export default CurrentPlan;