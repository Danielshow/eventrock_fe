import React from 'react';

const SignInLink: React.FC = () => {
 return (
   <div className="signin">
     <div className="signin__brand">
       <h3>Event-Rock</h3>
     </div>
     <div className="signin__input">
        <input type="text" placeholder="search for events"/>
     </div>
     <div className="signin__list">
        <div className="signin__list--tag">
          <span>Events</span>
        </div>
        <div className="signin__list--tag">
          <span>Login</span>
        </div>
        <div className="signin__list--tag">
          <span>Get Started</span>
        </div>
     </div>
   </div>
 )
}

export default SignInLink;
