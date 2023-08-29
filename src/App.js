import React from 'react';
import axios from 'axios';
import { Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import Basket from './components/Basket';
import Home from './pages/Home';
import Likes from './pages/Likes';
import AppContext from './context';

import './components/Card/Card.module.scss';


function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [likes, setLikes] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');
  const [cartOpened, setCartOpened] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {

    async function fetchData() {
      const cartResponse = await axios.get('https://64b0176bc60b8f941af536aa.mockapi.io/cart');
      const itemsResponse = await axios.get('https://64b0176bc60b8f941af536aa.mockapi.io/items');
      setIsLoading(false);
      setCartItems(cartResponse.data);
      setItems(itemsResponse.data);
    }
    fetchData();

  }, []);
  const onAddToCard = async (obj) => {
    try {
      const findItem = cartItems.find((item) => Number(item.parentId) === Number(obj.id));
      if (findItem) {
        setCartItems(prev => prev.filter(item => Number(item.parentId) !== Number(obj.id)));
        await axios.delete(`https://64b0176bc60b8f941af536aa.mockapi.io/cart/${findItem.id}`);

      } else {
        setCartItems((prev) => [...prev, obj]);
        const { data } = await axios.post('https://64b0176bc60b8f941af536aa.mockapi.io/cart', obj);
        setCartItems((prev) => prev.map(item => {
          if(item.parentId === data.parentId) {
            return {
              ...item,
              id: data.id
            };
          }
            return item;
        }));
      }
    } catch (error) {
      alert('ERROR');
      console.error(error);
    }

  };
  const onRemoveItem = (id) => {

    axios.delete(`https://64b0176bc60b8f941af536aa.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter(item => Number(item.id) !== Number(id)));
  }

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  const isAddedCard = (id) => {
    return cartItems.some((obj) => Number(obj.parentId) === Number(id))
  };
  return (
    <AppContext.Provider value={{ items, cartItems, likes, isAddedCard, setCartOpened, setCartItems }}>
      <div className="wrapper clear">
        {cartOpened && <Basket items={cartItems} onClose={() => setCartOpened(false)} onRemove={onRemoveItem} />}

        <Routes>
          <Route path='/' element={<Header onClickCart={() => setCartOpened(true)} exact />}></Route>
        </Routes>
        <Routes>
          <Route path='/' element={
            <Home
              items={items}
              cartItems={cartItems}
              searchValue={searchValue}
              setSearchValue={setSearchValue}
              onChangeSearchInput={onChangeSearchInput}
              onAddToCard={onAddToCard}
              isLoading={isLoading} />} />
        </Routes>

        <Routes>
          <Route path='/likes'
            element=
            {<Likes items={likes} />} exact />
        </Routes>
      </div>
    </AppContext.Provider>

  );
}
export default App;
