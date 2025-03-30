import './Herosection.css';
import modelPink from '../images/1.jpg';
import modelred from '../images/2.jpg';
import modelGray from '../images/3.jpg';
function SummerCollection() {
    const products = [
      { id: 1, image: modelGray , discount: '20%' },
      { id: 2, image: modelPink, discount: '' },
      { id: 3, image: modelred, discount: '' },
      { id: 4, image: modelGray , discount: '40%' },
      { id: 5, image: modelred, discount: '20%' },
      { id: 6, image: modelPink, discount: '' },
      { id: 7, image: modelGray, discount: '' },
      { id: 8, image: modelred, discount: '40%' },
    ];
    
    return (
      <div className="summer-collection">
        <h2 className="section-title">
          <span className="diamond">◆</span>
          Best Collection
          <span className="diamond">◆</span>
        </h2>
        <div className="product-grid">
          {products.map(product => (
            <div key={product.id} className="product-item">
              <div className="product-image">
                <img src={product.image} alt={`Model Cover ${product.id}`} />
                {product.discount && (
                  <div className="discount-circle">
                    <span>{product.discount}</span>
                  </div>
                )}
              </div>
              <button className="add-to-cart-btn">+ ADD TO CART</button>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  export default SummerCollection;