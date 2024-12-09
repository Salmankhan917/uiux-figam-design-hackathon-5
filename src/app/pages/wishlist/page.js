// pages/wishlist/page.js
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';

const Wishlist = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-8">Your Wishlist</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <ProductCard image="product1.jpg" name="Product 1" price="$29.99" />
          <ProductCard image="product2.jpg" name="Product 2" price="$39.99" />
          <ProductCard image="product3.jpg" name="Product 3" price="$19.99" />
          <ProductCard image="product4.jpg" name="Product 4" price="$49.99" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Wishlist;
