import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white text-center py-6">
      <div className="container mx-auto">
        <p>Designed and Built by Aravind Busarapu with Love & Coffee</p>
        <div className="flex justify-center space-x-4 mt-3">
          <a href=" github.com/Aravind505-stack" className="hover:underline">GitHub</a>
          <a href="www.linkedin.com/in/aravind-busarapu-41389a1a3" className="hover:underline">LinkedIn</a>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
