import React from "react";

import Info from "./Info";
import { useCart } from "../hooks/useCart";

function Basket({ onClose, onRemove, items = [] }) {
  const { cartItems, setCartItems, allPrice } = useCart();
  const [isOrderComplete, setIsOrderComplete] = React.useState(false);

  const onClickOder = () => {
    setIsOrderComplete(true);
    setCartItems([]);
  }
  return (
    <div className="overlay">
      <div className="aside">
        <div className="block"></div>
        <h3 className="d-flex justify-between mb-20">
          Basket{' '}
          <img onClick={onClose}
            className="cartRemove cartDel"
            width={22}
            height={22}
            src="images/close64.png"
            alt="remove"
          />
        </h3>
        {items.length > 0 ? (
          <div className="d-flex flex-column flex">
            <div className="items flex">
              <div className="items__block">
                <div className="items__block-overflow">
                  {items.map((obj) => (
                    <div className="cart-item d-flex align-center mb-20">
                      <div
                        style={{ backgroundImage: `url(${obj.imageUrl})` }}
                        className="cartItemImg"
                      ></div>
                      <div className="mr-20 flex">
                        <p>{obj.title}</p>
                        <b>{obj.price + " $"}</b>
                      </div>
                      <img
                        onClick={() => onRemove(obj.id)}
                        className="cartRemove"
                        width={22}
                        height={22}
                        src="images/close64.png"
                        alt="Remove"
                      />
                    </div>
                  ))}
                </div>
              </div>
              <div className="cartFinal">
                <ul className="cartTotalBlock">
                  <li className="d-flex">
                    <span>Final price:</span>
                    <div></div>
                    <b>{allPrice} $</b>
                  </li>
                </ul>
                <button onClick={onClickOder}>
                  Сheckout <img src="images/arrowwhite.png" alt="Arrow" />
                </button>
              </div>
            </div>
          </div>
        ) : (
          <Info
            title={isOrderComplete ? "Order is processed!" : "Cart is empty"}
            description={isOrderComplete ? "" : "Add item to cart"}
            image={isOrderComplete ? "images/128completed.png" : "images/cartempty128.png"}
          />
        )}
      </div>
    </div >
  )
}
export default Basket;