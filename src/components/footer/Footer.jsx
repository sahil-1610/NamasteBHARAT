// Footer.js

import React from 'react';

const Footer = () => {
  return (
    <footer id="footer" className="bg-blue-800 text-white py-8">
      <div className="container mx-auto text-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div>
            <div className="font-bold mb-4">
              <p>GSTIN No: 10DOVPK4627H2ZR</p>
              <p>FSSAI No: 10424270000012</p>
            </div>
          </div>
          <div>
            <div className="mb-4">
              <p>Address: Konhwa, Gopalganj - 841428, Bihar</p>
              <p>Contact Us: 9931584900, 8709999875</p>
            </div>
          </div>
          <div className="underline">
            <a href="https://whatsapp.com/channel/0029VaAJdes0QeakCq2VMX1Y" target="_blank" rel="noopener noreferrer">
              Click Here To Join the Ravi Enterprises Tour And Travel channel on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
