import React from "react";
import "./Footer.css";

const Footer = () => {

  return (
    <footer className="bg-dark">
      <div className="mt-5 pt-5 pb-5 footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-xs-12 about-company">
              <p className="pr-5 text-white-50">
                Let's make your study fun with your virtual teachers. We can
                provide you the best teaching service. Our teachers will care
                you 24/7. So enroll now!
              </p>
            </div>
            <div className="col-lg-3 col-xs-12 links">
              <ul className="m-0 p-0 text">
                <li>
                  <a
                    class="text-decoration-none text-light"
                    href="/home#services"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a class="text-decoration-none text-light" href="/home#teachers">
                    Teachers
                  </a>
                </li>
                <li>
                  <a class="text-decoration-none text-light" href="/blogs">
                    Blogs
                  </a>
                </li>
                <li>
                  <a class="text-decoration-none text-light" href="/about">
                    About
                  </a>
                </li>
                <li>
                  <a class="text-decoration-none text-light" href="/login">
                    Login
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-4 col-xs-12 location text-white">
              <h4 className="mt-lg-0 mt-sm-4">Location</h4>
              <p>222/2, Islampur, Dhaka-1100</p>
              <p className="mb-0">
                <i className="fa fa-phone mr-3"></i>(02) 0034-0014
              </p>
              <p>
                <i className="fa fa-envelope-o mr-3"></i>info@yourvirtualteacher
              </p>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col copyright">
              <p className="">
                <small className="text-white-50">
                  © 2022. All Rights Reserved.
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
