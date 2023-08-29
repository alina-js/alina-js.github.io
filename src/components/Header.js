import React from 'react';
import { Link } from 'react-router-dom';


import { useCart } from '../hooks/useCart';

function Header(props) {

  const { allPrice } = useCart();
  return (
    <header className="d-flex justify-between align-center p-35">
      <Link to="/">
        <div className="d-flex align-center">
          <img alt="" with={40} height={40} src="/images/backpack.png" />
          <div>
            <h3 className="text-uppercase">Backpacks</h3>
            <p className="opacity-5">Backpacks shop</p>
          </div>
        </div>
      </Link>
      <ul className="d-flex">
        <li onClick={props.onClickCart} className="mr-20 cu-p">
          <img alt="" with={18} height={18} src="/images/cart.png" />
          <span>
            <b>{allPrice} $</b>
          </span>
        </li>
        <li>
        </li>
        <li>
          <img alt="" with={18} height={18} src="/images/user1.png" className="mr-10 cu-p" />
        </li>
      </ul>
    </header>
  )
}
export default Header;