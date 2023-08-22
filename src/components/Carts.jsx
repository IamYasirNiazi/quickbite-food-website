import React from "react";
import CartItem from "./CartItem";
import { useDispatch, useSelector } from "react-redux";
import { cartUiActions } from "../store/cartSlice/cartUiSlice";


const Carts = () => {
  const cartProducts = useSelector((state) => state.cart.cartItems);
  console.log(cartProducts)
  const cartProductsPrice = useSelector((state) => state.cart.totalAmount);

  const dispatch = useDispatch()
  const toggleCart = ()=>{
    dispatch(cartUiActions.toggle())
  }

  return (
    <div className="cart-sidebar">
      <div className="header">
        {/* <span className="d-flex align-items-center">購物車 &nbsp;<span className="count">50</span></span> */}
        <i className="ri-close-line close" id="close-btn1" onClick={toggleCart}></i>
      </div>

      <div className="add-to-cart-main">
        {cartProducts.length === 0 ? (
          <h6 className="text-center pt-5 add-to-cart-main">
            No item added to the cart.
          </h6>
        ) : (
          cartProducts.map((item, index) => (
            <CartItem item={item} key={index} />
          ))
        )}
      </div>

      <div className="footer">
        <div>
          <h6>
            Subtotal : <span>${cartProductsPrice}</span>
          </h6>
        </div>
        <a href="/checkout.html" className="btn">
          Checkout
        </a>
      </div>
    </div>
  );
};

export default Carts;
