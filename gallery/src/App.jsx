import "./App.css";
import Cards from "./components/cards";
import { useState } from "react";

function App() {
  const [popupVisible, setPopupVisible] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const cards = [
    {
      key: 1,
      name: "T-shirt",
      image: "https://plus.unsplash.com/premium_photo-1673356302067-aac3b545a362?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHRzaGlydHN8ZW58MHx8MHx8fDA%3D"
    },
    {
      key: 2,
      name: "Shoes",
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8fDA%3D"
    },
    {
      key: 3,
      name: "Watch",
      image: "https://images.unsplash.com/photo-1434056886845-dac89ffe9b56?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8d2F0Y2h8ZW58MHx8MHx8fDA%3D"
    },
    {
      key: 4,
      name: "Phone",
      image: "https://plus.unsplash.com/premium_photo-1680985551009-05107cd2752c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c21hcnRwaG9uZXxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      key: 5,
      name: "Laptop",
      image: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGxhcHRvcHxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      key: 6,
      name: "Headphone",
      image: "https://plus.unsplash.com/premium_photo-1678099940967-73fe30680949?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aGVhZHBob25lc3xlbnwwfHwwfHx8MA%3D%3D"
    }
  ];

  const handleCardClick = (card) => {
    setSelectedCard(card);
    setPopupVisible(true);
  };

  const handleClosePopup = () => {
    setPopupVisible(false);
  };

  return (
    <div className="container">
    <h1 className="text-3xl italic underline">SIX PICTURE GALLERY</h1>
      <div className=" px-5 py-24 mx-auto">
        <div className="cursor-pointer flex flex-wrap -m-4 cards-container">
          {cards.map((card) => (
            <Cards
              key={card.key}
              name={card.name}
              image={card.image}
              onpress={() => handleCardClick(card)}
            />
          ))}
        </div>
      </div>
      <div className={`popup-overlay ${popupVisible ? 'visible' : ''}`}>
        <div className="popup-content">
          <h2>{selectedCard?.name}</h2>
          <img src={selectedCard?.image} alt={selectedCard?.name} />
          <button onClick={handleClosePopup}>Close</button>
        </div>
      </div>
    </div>
  );
}

export default App;
