// import { pizzaData } from "./data";

function App() {
  return (
    <div>
      <Header />
      <Menu />
      <Pizzas  />
      <Footer/>
      <Order />
    </div>
  );
}

export default App;

function Pizza(props) {
  return (
    <div className={`pizza ${(props.soldOut = "true" ? "sold-out" : "")}`}>
      <img src={props.photoName} alt={props.name} className="" />
      <div>
        <h3>{props.name}</h3>
        <p>{props.ingredients}</p>
        {props.soldOut ? <span>SOLD OUT</span> : <span>{props.price}</span> }
        
      </div>
    </div>
  );
}

//grid
function Pizzas() {
  return (
    <div className="pizzas">
      <Pizza
        name= "Focaccia"
        ingredients= "Bread with italian olive oil and rosemary"
        price= "6"
        photoName= "pizzas/focaccia.jpg"
        soldOut= "false"
      />
      <Pizza
        name= "Pizza Margherita"
        ingredients= "Tomato and mozarella"
        price= "10"
        photoName= "pizzas/margherita.jpg"
        soldOut= "false"
      />
      <Pizza
        name= "Pizza Spinaci"
        ingredients= "Tomato, mozarella, spinach, and ricotta cheese"
        price= "12"
        photoName= "pizzas/spinaci.jpg"
        soldOut= "false"
      />
      <Pizza
        name= "Pizza Funghi"
        ingredients= "Tomato, mozarella, mushrooms, and onion"
        price= "12"
        photoName= "pizzas/funghi.jpg"
        soldOut= "false"
      />
      <Pizza
        name= "Pizza Salamino"
        ingredients= "Tomato, mozarella, and pepperoni"
        price= "15"
        photoName= "pizzas/salamino.jpg"
        soldOut= "true"
      />
      <Pizza
        name= "Pizza Prosciutto"
        ingredients= "Tomato, mozarella, ham, aragula, and burrata cheese"
        price= "18"
        photoName= "pizzas/prosciutto.jpg"
        soldOut= "false"
      />
    </div>
  )
}

function Header() {
  return (
    <div className="header">
      <header className="header">
        <h1 className="header">
          Fast React Pizza Co.
        </h1>
      </header>
    </div>
  );
}

function Menu() {
  return (
    <div className="menu">
      <header className="menu">
        <h2>Our Menu</h2>
      </header>
      <p className="menu">
        Authentic Italian cuisine. 6 creative dishes to choose from. All from our stone oven, all organic, all delicious.
      </p>
    </div>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 10;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour
  console.log(isOpen);

  // if(hour >= openHour && hour <= closeHour) 
  //   alert("We're open")
  // else
  //   alert("We're close")

  return (
    <div className="footer">
      {new Date().toLocaleTimeString()}. We're currently {" "}
      {isOpen ? "Open" : "Close" }
    </div>
  );
}

function Order() {
  return (
    <div className="order">
      <button className="btn">
        Order now
      </button>
    </div>
  )
}