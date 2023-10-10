import './featuredproducts.css';
import FeaturedProductItem from './FeaturedProductItems';

import dogShopImg from './images/dog.png' ;
import catShopImg from './images/cat.png' ;
import groomShopImg from './images/grooming.png'
import smallShopImg from './images/small.png'

function FeaturedProducts () {
  const featuredProducts = [
    {
      id: 1,
      name: 'Dog Shop',
      image: dogShopImg
    },
    {
      id: 2,
      name: 'Cat Shop',
      image: catShopImg
    },
    {
      id: 3,
      name: 'Small Pet Shop',
      image: smallShopImg
    },
    {
      id: 4,
      name: 'Pet Grooming',
      image: groomShopImg
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