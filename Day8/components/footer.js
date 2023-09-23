import React from 'react';

const Footer = () => {
  return (
    <footer>
     
      <p>&copy; {new Date().getFullYear()} Tracking System</p>
      <p className='term'><a href="/terms">Terms and Conditions</a></p>
      
    </footer>
  );
};

export default Footer;
