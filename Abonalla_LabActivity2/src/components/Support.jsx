import supportItems from "./SupportItems"; 

function MiSupport() {
    return (
      <section className="mi-support">
        <h2 className="support-title">Xiaomi Support</h2>
        <div className="support-container">
          {supportItems.map((item, index) => (
            <div key={index} className="support-item">
              <div className="support-icon">
                <img src={item.icon} alt={item.title} />
              </div>
              <h3 className="support-heading">{item.title}</h3>
              <p className="support-description">{item.description}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }

  export default MiSupport;