import React from 'react';
import Button from './Button'; // Ensure this path is correct for your Button component

function LandingSection() {
  return (
    <div className='landing-container'>
      <img src="/res/sky.png" alt="Sky" /> {/* Updated image path */}
      <h2>Reach the skies with</h2>
      <h1>REACHER</h1>
 
      <div className="landing-btns">
        <Button className='btns' buttonStyle='btn--outline' buttonSize='btn-large'>
          GET STARTED
        </Button>
      </div>
    </div>
  );
}

export default LandingSection;
