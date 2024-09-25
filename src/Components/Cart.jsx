import React from "react";
import { Link } from "react-router-dom";

const Cart = ({ cart, setCart }) => {
  return (
    <>
      <div className="container my-5" style={{ width: "54%" }}>
        {cart.length == 0 ? (
          <>
            <div className="text-center">
              <h1>Your Cart is Empty.</h1>
              <Link to={"/"} className="btn btn-warning">
                Continue Shopping
              </Link>
            </div>
          </>
        ) : (
          cart.map((product) => {
            return (
              <>
                <div className="card mb-3 my-5">
                  <div className="row g-0">
                    <div className="col-md-4">
                      <img
                        src={product.imgSrc}
                        className="img-fluid rounded-start"
                        alt="..."
                      />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h5 className="card-title">{product.title}</h5>
                        <p className="card-text">{product.description}</p>

                        <button className="btn btn-primary mx-2">
                          {product.price}
                        </button>
                        <button className="btn btn-warning mx-2">
                          Buy now
                        </button>
                        <button className="btn btn-danger mx-2">Remove</button>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })
        )}
      </div>
      {cart.length != 0 && (
        <div className="container text-center my-5">
          <button className="btn btn-warning mx-4">Checkout</button>
          <button
            onClick={() => {
              if (
                window.confirm(
                  "Are you sure you want to clear the shopping cart?"
                )
              ) {
                setCart("");
              }
            }}
            className="btn btn-danger mx-4"
          >
            Clear shopping?
          </button>{" "}
        </div>
      )}
    </>
  );
};

export default Cart;
