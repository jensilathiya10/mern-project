import './Herosection.css';

function ShippingInfo() {
    return (
      <div className="shipping-info">
        <div className="info-box free-shipping">
          <i className="icon-plane"></i>
          <h3>FREE SHIPPING</h3>
          <p>In Order Min $200</p>
        </div>
        <div className="info-box returns">
          <i className="icon-clock"></i>
          <h3>30-DAYS RETURNS</h3>
          <p>Money Back Guarantee</p>
        </div>
        <div className="info-box support">
          <i className="icon-headset"></i>
          <h3>24/7 SUPPORT</h3>
          <p>Lifestyle Support</p>
        </div>
      </div>
    );
  }
  export default ShippingInfo;