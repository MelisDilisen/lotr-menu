import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const foodData = [
  {
    name: "Lembas Bread",
    ingredients:
      "Traveler's sustenance made by elves, impervious to corruption",
    price: 5,
    photoName: "./lotr-menu/food/bread.png",
    soldOut: false,
  },
  {
    name: "Samwise's Stout Stew",
    ingredients: "A hearty stew made with Hobbiton's finest beef",
    price: 12,
    photoName: "./lotr-menu/food/stew.png",
    soldOut: false,
  },
  {
    name: "Hobbiton Mushroom Caps",
    ingredients: "Hobbit style mushroom toast",
    price: 9,
    photoName: "./lotr-menu/food/toast.png",
    soldOut: false,
  },
  {
    name: "Bilbo's Bountiful Pie",
    ingredients: "Chicken, mushrooms, and leeks",
    price: 10,
    photoName: "./lotr-menu/food/pie.png",
    soldOut: false,
  },
  {
    name: "Beorn's Honeycake",
    ingredients: "Cake with honey made from Beorn’s bee",
    price: 3,
    photoName: "./lotr-menu/food/cake.png",
    soldOut: true,
  },
  {
    name: "Ranger's Roast Chicken:",
    ingredients: "A succulent chicken marinated in herbs and lemon",
    price: 10,
    photoName: "./lotr-menu/food/chicken.png",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  const style = {};
  return (
    <header className="header">
      <h1 style={style}>
        The Green Dragon Inn:
        <br />A Taste of the Shire
      </h1>
    </header>
  );
}

function Menu() {
  const foods = foodData;
  //const foods = [];
  const numFood = foods.length;

  return (
    <main class="menu">
      <h2>Our Menu</h2>

      {numFood > 0 ? (
        <>
          <p>
            Authentic Shire cuisine. Indulge in hearty, Shire-style cuisine
            crafted with care and served with a side of Middle-earth charm. The
            Green Dragon Inn offers a haven where weary souls can rest,
            replenish, and revel in the simple pleasures of life.
          </p>
          <ul className="foods">
            {foods.map((food) => (
              <Food foodObject={food} key={food.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>
          Thank you for your interest in The Green Dragon Inn! Our online menu
          is coming soon, but in the meantime, join us in person to if you'd
          like to immerse yourself in Shire hospitality
        </p>
      )}
    </main>
  );
}

function Food({ foodObject }) {
  //if (foodObject.soldOut) return null;

  return (
    <li className={`food ${foodObject.soldOut ? "sold-out" : ""}`}>
      <img src={foodObject.photoName} alt={foodObject.name} />
      <div>
        <h3>{foodObject.name}</h3>
        <p>{foodObject.ingredients}</p>
        <span>
          {foodObject.soldOut
            ? "SOLD OUT"
            : "Price: " + foodObject.price + " coin"}
        </span>
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 15;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);

  return (
    <footer className="footer">
      {isOpen ? (
        <Order openHour={openHour} closeHour={closeHour} />
      ) : (
        <p>
          We're happy to welcome you between {openHour}:00 and {closeHour}:00
        </p>
      )}
    </footer>
  );
  //return React.createElement("footer", null, "We're currently open!");
}

function Order({ openHour, closeHour }) {
  return (
    <div className="order">
      <p>
        Join us at The Green Dragon Inn from {openHour}:00 until {closeHour}:00,
        dine-in or online, for a taste of Shire comfort.
      </p>
      <button className="btn">Order</button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
