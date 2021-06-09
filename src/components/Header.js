import React from "react";
import { FaShoppingCart, FaUserPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header sticky flex items-center justify-between py-3 xl:mx-20">
      <div className="logo">
        <div>
          <Link to="/">MySoft</Link>
        </div>

        <ul>
          <li>
            <Link to="/mySoft">Enterprse Software</Link>
          </li>
          <li>
            <Link to="/office">Office Soft</Link>
          </li>

          <li>Laptop</li>
          <li>Game Console</li>
          <li>Deals</li>
          <li>Support</li>
        </ul>
      </div>

      <div className="cart flex">
        <div>
          <FaShoppingCart />
        </div>
        <div className="mx-4">
          <FaUserPlus />
        </div>
      </div>

      <div className="sign-in">
        <ul>
          <li>Search</li>
          <li>Cart</li>
          <li>Sign In</li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
