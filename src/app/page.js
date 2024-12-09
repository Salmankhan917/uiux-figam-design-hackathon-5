import Navbar from './components/Navbar';
import ProductCard from './components/ProductCard';

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="text-center mt-10">
        <h1 className="text-4xl font-bold">Welcome to Our Store</h1>
        <p className="mt-4">Find the best products here!</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-8">
        <ProductCard name="Product 1" price="29.99" image="/product1.jpg" />
        <ProductCard name="Product 2" price="39.99" image="/product2.jpg" />
        <ProductCard name="Product 3" price="19.99" image="/product3.jpg" />
        <ProductCard name="Product 4" price="49.99" image="/product4.jpg" />
      </div>
      
    </div>
  );
}


