// pages/product-details.js
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ProductDetails = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold">Product Name</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
          <div className="w-full h-80 bg-gray-300">Image</div>
          <div>
            <p className="text-lg mb-4">Product description goes here.</p>
            <p className="font-semibold text-xl mb-6">$99.99</p>
            <button className="bg-blue-500 text-white py-2 px-4 rounded">Add to Cart</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetails;
