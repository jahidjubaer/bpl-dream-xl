import React from "react";

const Footer = () => {
  return (
    <div className="bg-black pt-60 z-2 relative ">
      <footer className=" footer flex gap-46 justify-between sm:footer-horizontal max-w-[1280px] mx-auto text-white mb-18">
        <nav>
         <h6 className="footer-title">About us</h6>
          <p className="text-sm text-gray-100 max-w-65">
            We are a passionate team dedicated to providing the best services to
            our customers.
          </p>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>

        <form>
          <h6 className="footer-title">Newsletter</h6>
          <fieldset className="w-80 ">
            <p className="mb-9 max-w-65 text-sm text-gray-100">Subscribe to our newsletter for the latest updates.</p>

            <div className="join">
              <input
                type="text"
                placeholder="username@site.com"
                className="input input-bordered join-item"
              />
              <button className="btn border-none text-xl font-bold join-item bg-linear-to-bl from-violet-500 to-fuchsia-500">
                Subscribe
              </button>
            </div>
          </fieldset>
        </form>
      </footer>
      <hr />
      <p className="text-white text-center p-8">
        @2024 Your Company All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
