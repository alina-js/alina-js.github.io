import React from 'react';
import ContentLoader from "react-content-loader";

import styles from './Card.module.scss';
import AppContext from '../../context';

function Card({ id, imageUrl, title, price, onLike, onPlus, added = false, loading = false }) {

  const {isAddedCard} = React.useContext(AppContext);
  const [isLike, setIsLike] = React.useState(false);
  const obj = { id, parentId: id, title, imageUrl, price };
  const onClickPlus = () => {
    onPlus(obj);
  };
  const onClickLike = () => {
    onLike(obj)
    setIsLike(!isLike);
  }

  return (
    <div className={styles.card}>
      {loading ? <ContentLoader 
    speed={2}
    width={140}
    height={265}
    viewBox="0 0 140 265"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="0" y="0" rx="10" ry="10" width="130" height="90"/> 
    <rect x="0" y="106" rx="6" ry="6" width="130" height="15"/> 
    <rect x="0" y="133" rx="6" ry="6" width="100" height="15"/> 
    <rect x="0" y="211" rx="6" ry="6" width="80" height="24"/> 
    <rect x="106" y="204" rx="6" ry="6" width="32" height="32"/>
  </ContentLoader> : (
        <>
          <div className={styles.like} onClick={onClickLike}>
            <img className='img-like' src={isLike ? "/images/heart_active.png" : "/images/heart.png"} width={22} height={22} alt="Unliked" />
          </div>
          <img className="img1" with={133} height={122} src={imageUrl} alt="backpack"
          />
          <h5 className="title">{title}</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span className="pr-5">Price:</span>
              <b>{price} $</b>
            </div>
            <img onClick={onClickPlus} with={22} height={22} src={isAddedCard(id) ? "/images/done.png" : "/images/plus.png"} alt="plus" />
          </div>
        </>)}

    </div>
  );
}
export default Card;
