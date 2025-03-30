import './Herosection.css';
import modelPink from '../images/1.jpg';
import modelred from '../images/2.jpg';
import modelGray from '../images/3.jpg';

function HandpickedSection() {
    return (
      <div className="handpicked-section">
        <h2 className="section-title">
          <span className="diamond">◆</span>
          HandPicked
          <span className="diamond">◆</span>
        </h2>
        <div className="handpicked-grid">
          <div className="grid-item">
          <div className="product-card" style={{ marginLeft: "122px" }}>
          <img src={modelPink} alt=" boots" />
              <button className="shop-now-btn small">SHOP NOW</button>
            </div>
          </div>
          <div className="grid-item collection">
            <div className="collection-card">
              <h3>PARIS Hilton</h3>
              <h2>COLLECTION</h2>
            </div>
          </div>
          <div className="grid-item">
            <div className="product-card">
              <img src={modelred} alt="Black " />
              <div className="discount-badge">
                <h2>50%</h2>
                <h3>OFF</h3>
              </div>
            </div>
          </div>
          <div className="grid-item">
          <div className="product-card" style={{ marginLeft: "122px" }}>
          <img src={modelGray} alt="Silver " />
              <div className="discount-text">
                <h3>DISCOUNT 30%</h3>
                <p>Resin PRODUCT</p>
              </div>
            </div>
          </div>
          <div className="grid-item">
            <div className="product-card">
              <img src={modelPink} alt="Card holder" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  export default HandpickedSection;