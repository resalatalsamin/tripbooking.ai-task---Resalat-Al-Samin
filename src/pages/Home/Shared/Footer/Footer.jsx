import React from "react";
import logo from "../../../../assets/2nd logo.png";
import phone from "../../../../assets/phone.svg";

import fb from "../../../../assets/social/facebook.svg";
import insta from "../../../../assets/social/insta.svg";
import x from "../../../../assets/social/x.svg";
import tube from "../../../../assets/social/tube.svg";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer>
      <div className="mt-14.5 footer sm:footer-horizontal bg-[#0640C3] text-white p-10 mb-0 font-primary flex justify-between">
        <aside>
          <div>
            <Link to="/">
              <img className="w-49.25 h-21.75 -ml-4.5" src={logo} alt="Logo" />
            </Link>
            <p className="font-medium">
              Dive into local recommendations for a truly authentic experience.
            </p>
          </div>
          <div className="mt-16.25 space-y-3">
            <div className="flex items-center">
              <img className="w-4 h-4 mr-3" src={phone} alt="location" />
              <p className=" font-medium">Need help? Call us</p>
            </div>
            <div>
              <p className="mt-1 font-extrabold text-2xl">1-800-222-8888</p>
            </div>
          </div>
        </aside>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-7">
          <nav>
            <h6 className="font-medium text-lg mb-4">Company</h6>
            <div>
              <Link to="#" className="mb-4.5 block">
                About us
              </Link>
              <Link to="#" className="mb-4.5 block">
                Community Blog
              </Link>
              <Link to="#" className="mb-4.5 block">
                Jobs & Careers
              </Link>
              <Link to="#" className="mb-4.5 block">
                Contact Us
              </Link>
              <Link to="#" className=" block">
                Our Awards
              </Link>
            </div>
          </nav>

          <nav>
            <h6 className="font-medium text-lg mb-4">Services</h6>
            <div>
              <Link to="#" className="mb-4.5 block">
                Tour Guide
              </Link>
              <Link to="#" className="mb-4.5 block">
                Tour booking
              </Link>
              <Link to="#" className="mb-4.5 block">
                Hotel Booking
              </Link>
              <Link to="#" className="mb-4.5 block">
                ticket Booking
              </Link>
              <Link to="#" className=" block">
                Rental Services
              </Link>
            </div>
          </nav>

          {/* Newsletter Section */}
          <div>
            <form className="hidden lg:block">
              <h6 className="font-medium text-lg mb-3.75">Newsletter</h6>
              <fieldset className="w-80 font-secondary">
                <div className="flex">
                  <input
                    type="text"
                    placeholder="enter your email"
                    className="input bg-white py-5 rounded-full text-[#737373] join-item w-89.5 px-8 "
                  />
                  <button className="btn   py-5 px-5 rounded-full bg-[#FAB326] font-bold -ml-31">
                    SUBSCRIBE
                  </button>
                </div>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
      {/* Copyright */}
      <div className="footer sm:footer-horizontal footer-center bg-[#0640C3] text-white p-4 border-t-2 border-gray-600 ">
        <aside className="flex justify-between items-center">
          <p className="ml-4.5">© 2024 Travila Inc. All rights reserved.</p>
          <div className="flex justify-between items-center gap-2">
            <p>Follow Us</p>
            <div className="flex items-center">
              <img className="w-6 mr-3" src={fb} alt="location" />
              <img className="w-6 mr-3" src={insta} alt="location" />
              <img className="w-6 mr-3" src={x} alt="location" />
              <img className="w-6 mr-3" src={tube} alt="location" />
            </div>
          </div>
        </aside>
      </div>
    </footer>
  );
};

export default Footer;
