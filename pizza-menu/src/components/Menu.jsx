import { pizzaData } from '../data';
import Pizza from './Pizza';


function Menu() {
    return (
      <div className="menu">
        <header className="menu">
          <h2>Our Menu</h2>
        </header>
        <p className="menu">
          Authentic Italian cuisine. 6 creative dishes to choose from. All from our stone oven, all organic, all delicious.
        </p>
        <div className="pizzas">
          {pizzaData.map((pizza)=>(
            <Pizza pizzaObj={pizza} key={pizza.name}/>
            ))}
        </div>
      </div>
    );
  }

  export default Menu;