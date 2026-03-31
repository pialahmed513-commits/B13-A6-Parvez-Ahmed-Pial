import React from 'react';
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#0f172a] text-white py-16 px-5 md:px-10 lg:px-20">
      <div className="max-w-[1200px] mx-auto">
        
        <div className="flex flex-col lg:flex-row justify-between items-start gap-10">
          
      
          <div className="max-w-[300px]">
            <h2 className="text-2xl font-bold mb-4">DigiTools</h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              Premium digital tools for creators, professionals, and businesses. 
              Work smarter with our suite of powerful tools.
            </p>
          </div>

        
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 w-full">
            
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-3 text-gray-400 text-sm">
                <li><a href="#">Features</a></li>
                <li><a href="#">Pricing</a></li>
                <li><a href="#">Templates</a></li>
                <li><a href="#">Integrations</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-3 text-gray-400 text-sm">
                <li><a href="#">About</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Press</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-3 text-gray-400 text-sm">
                <li><a href="#">Documentation</a></li>
                <li><a href="#">Help Center</a></li>
                <li><a href="#">Community</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Social Links</h3>
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center">
                  <FaInstagramSquare />
                </div>
                <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center">
                  <FaFacebook />
                </div>
                <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center">
                  <FaXTwitter />
                </div>
              </div>
            </div>

          </div>
        </div>

       
        <div className="mt-16 pt-6 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>© 2026 DigiTools. All rights reserved.</p>
          <div className="flex gap-4 flex-wrap justify-center">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookies</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;