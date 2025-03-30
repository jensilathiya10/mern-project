import './Herosection.css';


function BrandsSection() {
    const brands = [
      { id: 1, name: 'Bakery', logo: '/images/bakery-logo.png' },
      { id: 2, name: 'Cavalier', logo: '/images/cavalier-logo.png' },
      { id: 3, name: 'Harvest Co', logo: '/images/harvest-logo.png' },
      { id: 4, name: 'Laidlock', logo: '/images/laidlock-logo.png' },
      { id: 5, name: 'Spectrum', logo: '/images/spectrum-logo.png' },
      { id: 6, name: 'Home Energy', logo: '/images/home-energy-logo.png' },
    ];
    
    return (
      <div className="brands-section">
        <h2 className="section-title">
          <span className="diamond">◆</span>
          Our Brand
          <span className="diamond">◆</span>
        </h2>
        <div className="brand-logos">
          {brands.map(brand => (
            <div key={brand.id} className="brand-logo">
              <img src={brand.logo} alt={`${brand.name} logo`} />
            </div>
          ))}
        </div>
      </div>
    );
  }
  export default BrandsSection;  