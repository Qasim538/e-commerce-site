import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { items } from "./Data";
import { useState } from "react";
import { FaCartShopping } from "react-icons/fa6";

const Navbar = ({ setData, cart }) => {
  // console.log(useLocation);
  const location = useLocation()


  const [searchTerm, setSearchTerm] = useState("");

  const navigate = useNavigate();
  const filterByCategory = (category) => {
    const element = items.filter((product) => product.category == category);
    // console.log(element);
    setData(element);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${searchTerm}`);
    searchTerm("");
  };

  const filterByPrice = (price) => {
    const element = items.filter((product) => product.price >= price);
    setData(element);
  };
  return (
    <header className="sticky-top">
      <div className="nav-bar">
        <Link to={"/"} className="brand">
          eCommerce
        </Link>

        <form onSubmit={handleSubmit} className="search-bar">
          <input
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="search for items"
          ></input>
        </form>

        <Link to={"/cart"} className="cart">
          <button type="button" className="btn btn-primary position-relative">
            <FaCartShopping />
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {cart.length}
              <span className="visually-hidden">unread messages</span>
            </span>
          </button>
        </Link>
      </div>

      {
        location.pathname == '/' &&
        (<div className="nav-bar-wrapper">
        <div className="items">Filter by</div>
        <div onClick={() => setData(items)} className="items">
          No Filter
        </div>
        <div onClick={() => filterByCategory("mobiles")} className="items">
          Mobiles
        </div>
        <div onClick={() => filterByCategory("laptops")} className="items">
          Laptops
        </div>
        <div onClick={() => filterByCategory("tablets")} className="items">
          Tablets
        </div>

        <div onClick={() => filterByPrice(29999)} className="items">
          {"->"} $29999
        </div>
        <div onClick={() => filterByPrice(39999)} className="items">
          {"->"} $39999
        </div>
        <div onClick={() => filterByPrice(49999)} className="items">
          {"->"} $49999
        </div>
        <div onClick={() => filterByPrice(59999)} className="items">
          {"->"} $59999
        </div>
      </div>)
      }

    
    </header>
  );
};

export default Navbar;
