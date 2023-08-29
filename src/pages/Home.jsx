import React from 'react';

import Card from '../components/Card';

function Home({ items, cartItems,  searchValue, setSearchValue, onChangeSearchInput, onAddToCard, isLoading}) {
  
  const renderItems = () => {
    const filtredItems = items.filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase()));
    return (isLoading ? [...Array(1, 2, 3, 4, 5)] : filtredItems).map((item) => (
      <Card
        key={item.title}
       
        onPlus={(obj) => onAddToCard(obj)}
        onLike={(obj) => onAddToCard(obj)}
        loading={isLoading}
        {...item}
        />
        ));
  };
  return (
    <div className="contant p-25">
      <div className="d-flex align-center justify-between mb-35">
        <h1>All the backpacks</h1>
        <div className="search-block d-flex">
          <img
            src="/images/search2.jpg"
            alt="Search"
            width={54}
            height={54}
          >
          </img>
          {searchValue && (<img onClick={() => setSearchValue('')} 
          className="clear cu-p" src="/images/cancel_close48.png" width={22} height={22} alt="Clear"/>)}
          <input onChange={onChangeSearchInput} value={searchValue} placeholder="Search..."/>
        </div>
      </div>
      <div className="d-flex flex-row">
        {renderItems()}
      </div>
    </div>
  );
}
export default Home;