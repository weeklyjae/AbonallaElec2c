import { pizzaData } from '../data';
import Pizza from './Pizza';


function Menu() {
  const pizzas = pizzaData;
  const countPizza = pizzas.length;
    return (
      <div className="menu">
        <header className="menu">
          <h2>Our Menu</h2>
        </header>
        
        {countPizza > 0 ? (
        <>
          <p className="menu">
            Authentic Italian cuisine. 6 creative dishes to choose from. All from our stone oven, all organic, all delicious.
          </p>
          
          <div className="pizzas">
            {pizzas.map((pizza)=>(
              <Pizza pizzaObj={pizza} key={pizza.name}/>
            ))}
          </div>
        </>
        ) : (
          "No pizzas available :( sorry"
        )}
      </div>
    );
  }

  export default Menu;