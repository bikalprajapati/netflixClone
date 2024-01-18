import React from "react";

import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <section className="position relative">
      <div className="container-fluid  mx-auto position-absolute ">
        <div className="row bg-black text-white py-5 px-2 gap-2">
          <div className="col-md-2">
            <ul className="d-flex list-unstyled justify-content-between ">
              <li>
                <FaFacebookF
                  style={{
                    fontSize: "25px",
                  }}
                />
              </li>
              <li>
                <FaInstagram
                  style={{
                    fontSize: "25px",
                  }}
                />
              </li>
              <li>
                <FaTwitter
                  style={{
                    fontSize: "25px",
                  }}
                />
              </li>
              <li>
                <FaYoutube
                  style={{
                    fontSize: "25px",
                  }}
                />
              </li>
            </ul>
          </div>
          <div className="d-flex list-unstyled gap-4">
            <div className="col-md-2 col-sm-3">
              <li className="mb-3">Audio Description</li>
              <li className="mb-3">Investor Relations</li>
              <li className="mb-3">Legal notice</li>
            </div>
            <div className="col-md-2 col-sm-3">
              <li className="mb-3">Help center</li>
              <li className="mb-3">Jobs</li>
              <li className="mb-3">Cookie preferences</li>
            </div>
            <div className="col-md-2 col-sm-3">
              <li className="mb-3">Gift cards</li>
              <li className="mb-3">Terms of Use</li>
              <li className="mb-3">Corporate information</li>
            </div>
            <div className="col-md-2 col-sm-3">
              <li className="mb-3">Media Centre</li>
              <li className="mb-3">Privacy</li>
              <li className="mb-3">Contact us</li>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
