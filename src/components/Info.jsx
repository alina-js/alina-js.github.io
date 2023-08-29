import React from 'react';

import AppContext from '../context';

const Info = ({title, image,  description}) => {
  const {setCartOpened} = React.useContext(AppContext);
  return (

    <div className="cartEmpty d-flex align-center justify-center flex-column flex">
      <img className="mb-20" width={120} height={120} src={image} alt="Empty" />
      <h2>{title}</h2>
      <p>{description}</p>
      <button onClick={() => setCartOpened(false)} className="comeBack">Come back
        <img src="/images/arrowback.png" alt="Back" />
      </button>
    </div>
  )
}

export default Info
