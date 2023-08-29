
// function Likes() {
//   return (
//     <div className="contant p-25">
//       <div className="d-flex align-center justify-between mb-35">
//         <h1>My favorites</h1>
//         <div className="search-block d-flex">
//         </div>

//       </div>
//       <div className="d-flex flex-wrap">


//       </div>
//     </div>
//   );
// }
// export default Likes;
// import data from '../db.json'
import React from 'react';
import Card from '../components/Card';


const Likes = ({items}) => {
  // const [selectedItem, setSelectedItem] = React.useState(null);

  // const handleClick = (item) => {
  //   setSelectedItem(item);
  // };

  return (
    <div>
      <div className="zagolovok">
        <h2>Backpacks product list</h2>
        <p>Here are my backpacks</p>
        {items.map((item) => (
          <Card
            key={item.title}
            title={item.title}
            price={item.price}
            imageUrl={item.imageUrl}
            />))}
      </div>
      <ul>
        {/* {data.map((item) => (
          <li key={item.title} onClick={() => handleClick(item)}>
           {item.title} - {item.price} $
          </li>
        ))} */}
      </ul>
      {/* {selectedItem && (
        <div>
          <h3>Обраний продукт:</h3>
          <p>Назва: {selectedItem.title}</p>
          <div>IMG: {selectedItem.imageUrl}</div>
          <p>Ціна: {selectedItem.price}</p>
        </div>
      )} */}
    </div>
  );
};

export default Likes;
