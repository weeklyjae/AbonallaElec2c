import Order from "./Order";

function Footer() {
    const hour = new Date().getHours();
    const openHour = 10;
    const closeHour = 22;
    const isOpen = hour >= openHour && hour <= closeHour;

    // console.log(true && "hello"); //second one will show if the 1st one is true 
    // console.log(true || "hello"); //first one will show if the first one is true
    // console.log(true ?? "hello"); //first one will show if the first one is true
  
    return (
      <footer className="footer">
        {isOpen ? (
          <Order closeHour={closeHour} />
        ) : (
          <p>
            We&apos;re happy to welcome you between {openHour}:00 to {closeHour}:00
          </p>
        )}
      </footer>
    );
  }

  export default Footer;