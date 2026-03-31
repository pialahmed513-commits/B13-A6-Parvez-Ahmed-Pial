import React from 'react';
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
const Footer = () => {
  return (
    <footer className="bg-[#0f172a] text-white py-[120px] px-[200px]">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex justify-between items-start gap-20">
          
     
          <div className="max-w-[300px]">
            <h2 className="text-2xl font-bold mb-4">DigiTools</h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              Premium digital tools for creators, professionals, and businesses. 
              Work smarter with our suite of powerful tools.
            </p>
          </div>

         
          <div className="flex flex-1 justify-between">
        
            <div>
              <h3 className="font-semibold mb-6">Product</h3>
              <ul className="space-y-4 text-gray-400 text-sm">
                <li><a href="#">Features</a></li>
                <li><a href="#">Pricing</a></li>
                <li><a href="#">Templates</a></li>
                <li><a href="#">Integrations</a></li>
              </ul>
            </div>

          
            <div>
              <h3 className="font-semibold mb-6">Company</h3>
              <ul className="space-y-4 text-gray-400 text-sm">
                <li><a href="#">About</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Press</a></li>
              </ul>
            </div>

      
            <div>
              <h3 className="font-semibold mb-6">Resources</h3>
              <ul className="space-y-4 text-gray-400 text-sm">
                <li><a href="#">Documentation</a></li>
                <li><a href="#">Help Center</a></li>
                <li><a href="#">Community</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </div>

      
            <div>
              <h3 className="font-semibold mb-6">Social Links</h3>
              <div className="flex gap-4">
              
                <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center">
                  <span className="text-xs"><FaInstagramSquare /></span>
                </div>
                <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center">
                  <span className="text-xs"><FaFacebook /></span>
                </div>
                <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center ">
                  <span className="text-xs"><FaXTwitter /></span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-[80px] pt-8 border-t border-gray-800 flex justify-between items-center text-xs text-gray-500">
          <p>© 2026 DigiTools. All rights reserved.</p>
          <div className="flex gap-6">
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