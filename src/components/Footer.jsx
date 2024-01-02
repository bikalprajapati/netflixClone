import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <section>
      <div className="container-fluid  mx-auto">
        <div className="row bg-black text-white py-5 px-2 gap-2">
          <div className="col-md-2">
            <ul className="d-flex list-unstyled justify-content-between">
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
          <div className="d-flex list-unstyled">
            <div className="col-md-2">
              <li>Audio Description</li>
              <li>Investor Relations</li>
              <li>Legal notice</li>
            </div>
            <div className="col-md-2">
              <li>Help center</li>
              <li>Jobs</li>
              <li>Cookie preferences</li>
            </div>
            <div className="col-md-2">
              <li>Gift cards</li>
              <li>Terms of Use</li>
              <li>Corporate information</li>
            </div>
            <div className="col-md-2">
              <li>Media Centre</li>
              <li>Privacy</li>
              <li>Contact us</li>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
