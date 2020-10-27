import React from 'react';
import './Components/style.css';
import UpgradePlan from './Components/Plan/UpgradePlan';
import Profile from './Components/ProfileInfo/profile'
import Pricing from './Components/Pricing/Pricing'
const App = () => {
  return (
    <body>
        <div className="container">
        <UpgradePlan />
      </div>
      
      <div className="ndContainer">
        <div className="profilediv">

          <Profile />
        </div>    

        <div className="profilediv1">
          
          <Pricing />
        </div> 
            
        </div>
            
          
      </body>
    );
  } 

export default App;