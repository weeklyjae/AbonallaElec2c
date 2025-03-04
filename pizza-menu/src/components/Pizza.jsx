/* eslint-disable react/prop-types */

function Pizza({pizzaObj}) {
    return pizzaObj.soldOut ? (
        ""
      ) : (
      <div className={`pizza ${(pizzaObj.soldOut)}`}>
        <img src={pizzaObj.photoName} alt={pizzaObj.name} />
        <span>
          <h3>{pizzaObj.name} </h3>
          <p>{pizzaObj.ingredients}</p>        
        </span>
      </div>
    );
  }

export default Pizza;