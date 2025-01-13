import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAndroid, faApple, faFacebook, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white px-6 py-8 border-t border-gray-700">
      {/* Main Content */}
      <div className="flex flex-col lg:flex-row justify-between gap-8">
        {/* Download Section */}
        <div className="flex flex-col items-center lg:items-end">
          <button className="bg-gray-800 hover:bg-gray-700 px-6 py-2 rounded-md mb-2 flex items-center gap-2">
            <span>Download For</span>
            <FontAwesomeIcon icon={faAndroid} className="h-6" />
          </button>
          <button className="bg-gray-800 hover:bg-gray-700 px-6 py-2 rounded-md flex items-center gap-2">
            <span>Download For</span>
            <FontAwesomeIcon icon={faApple} className="h-7 w-7" />
          </button>
          {/* Social Icons */}
          <div className="flex gap-3 mt-4 sm:mr-10">
            <div className="rounded-full w-10 h-10 flex items-center justify-center bg-slate-700 border-slate-500 border">
              <a href="#" className="text-white hover:text-blue-500">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </div>
            <div className="rounded-full w-10 h-10 flex items-center justify-center bg-slate-700 border-slate-500 border">
              <a href="#" className="text-white hover:text-blue-500">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
            </div>
            <div className="rounded-full w-10 h-10 flex items-center justify-center bg-slate-700 border-slate-500 border">
              <a href="#" className="text-white hover:text-blue-500">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
            </div>
          </div>
        </div>

        {/* Links Sections */}
        <div className="flex flex-col lg:flex-row gap-8 text-center lg:text-left sm:gap-20 sm:mr-10">
          {/* Contact Section */}
          <div className="flex flex-col">
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <p className="text-sm">Email</p>
            <p className="text-sm">Mobile Number</p>
            <p className="text-sm">WhatsApp</p>
          </div>

          {/* Legal Section */}
          <div className="flex flex-col">
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <p className="text-sm">Status</p>
            <p className="text-sm">Privacy Policy</p>
            <p className="text-sm">Cookie Policy</p>
            <p className="text-sm">Terms & Conditions</p>
            <p className="text-sm">Disclaimer</p>
          </div>

          {/* Important Links Section */}
          <div className="flex flex-col">
            <h4 className="text-lg font-semibold mb-4">Important Links</h4>
            <p className="text-sm">Payout Assurance</p>
            <p className="text-sm">Affiliate Program</p>
            <p className="text-sm">How It Works</p>
            <p className="text-sm">Trust Points</p>
            <p className="text-sm">Contact Us</p>
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="mt-8 border-t border-gray-700 pt-4">
        <p className="text-sm text-gray-400 text-center lg:text-left">Disclaimer</p>
        <p className="text-sm text-gray-400 text-center lg:text-left mt-4">
          TheTrustedProp is a registered entity, TTP Prop LTD, in the United Kingdom
          with the company number 15370954, located at House, 27 Old Gloucester Street,
          London, WC1N 3AX. Please be advised that TheTrustedProp is not a financial advisor.
          Our website and mobile products serve as enterprise information searching tools
          for global users. While utilizing TheTrustedProp products, users are expected to
          consciously adhere to the relevant laws and regulations of the country and region
          in which they are situated. All content published on TheTrustedProp is subject to
          UK regulations. It is imperative for individuals to conduct their own research
          before engaging in any financial activities. TheTrustedProp does not assume
          responsibility for any consequences arising from decisions made without thorough
          personal research. Status Firms are subjected to change depending on situations.
        </p>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-700 mt-4">
        <div className="text-center mt-4 text-gray-400 text-sm">
          © 2024 The Trusted Prop. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
