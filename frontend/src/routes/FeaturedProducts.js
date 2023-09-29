import './featuredproducts.css';
import FeaturedProductItem from './FeaturedProductItems';

function FeaturedProducts () {
  const featuredProducts = [
    {
      id: 1,
      name: 'Dog Shop',
      image: ''
    },
    {
      id: 2,
      name: 'Cat Shop',
      image: ''
    },
    {
      id: 3,
      name: 'Small Pet Shop',
      image: ''
    },
    {
      id: 4,
      name: 'Fish Shop',
      image: ''
    },
    {
      id: 5,
      name: 'Pet Grooming',
      image: ''
    }

  ];

  return (
    <section className="featured-products">
      <h2>Featured Products</h2>
      <ul>
        {featuredProducts.map(product => (
          <FeaturedProductItem
          key={product.id}
          src={product.image}
          name={product.name} />
        ))}
      </ul>
    </section>
  );
};

export default FeaturedProducts;