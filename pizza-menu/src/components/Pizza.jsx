
function Pizza(props) {
    return (
      <div className={`pizza ${(props.pizzaObj.soldOut)}`}>
        <img src={props.pizzaObj.photoName} alt={props.pizzaObj.name} />
        <span>
          <h3>{props.pizzaObj.name} </h3>
          <p>{props.pizzaObj.ingredients}</p>        
        </span>
      </div>
    );
  }

export default Pizza;