function Footer() {
    const hour = new Date().getHours();
    const openHour = 10;
    const closeHour = 22;
    const isOpen = hour >= openHour && hour <= closeHour
  
    const order = {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap:  "2.4rem",
    }
  
    return (
      <footer className="footer">
        <div className="order">
          <p>
            {new Date().toLocaleTimeString()}. We&apos;re currently {" "}
            {isOpen ? "Open" : "Close" }
          </p>
          <button className="btn" style={order}>
            Order now
          </button>
        </div>
      </footer  >
    );
  }

  export default Footer;