import './Herosection.css';
import modelPink from '../images/1.jpg';
import modelred from '../images/2.jpg';

function CustomerTestimonials() {
    const testimonials = [
      {
        id: 1,
        name: 'Jensi',
        role: 'FASHION STYLIST',
        text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque',
        image: modelPink
      },
      {
        id: 2,
        name: 'Aasta ',
        role: 'DESIGNER',
        text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque',
        image: modelred
      }
    ];
    
    return (
      <div className="testimonials-section">
        <h2 className="section-title">
          <span className="diamond">◆</span>
          Customers Says
          <span className="diamond">◆</span>
        </h2>
        <div className="testimonials-container">
          {testimonials.map(testimonial => (
            <div key={testimonial.id} className="testimonial">
              <div className="testimonial-image">
                <img src={testimonial.image} alt={testimonial.name} />
              </div>
              <div className="testimonial-content">
                <p className="testimonial-text">{testimonial.text}</p>
                <h3 className="testimonial-name">{testimonial.name}</h3>
                <p className="testimonial-role">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  export default CustomerTestimonials;