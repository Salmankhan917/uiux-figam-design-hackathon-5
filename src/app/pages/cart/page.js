// pages/cart/page.js
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Cart = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-8">Your Cart</h1>
        <div className="border p-4 mb-6">
          <div className="flex justify-between items-center">
            <p>Product 1</p>
            <p>$29.99</p>
          </div>
          <button className="bg-red-500 text-white py-2 px-4 rounded mt-4">Remove</button>
        </div>
        <div className="text-right">
          <p className="text-xl">Total: $59.98</p>
        </div>
        <button className="bg-blue-500 text-white py-2 px-6 rounded mt-6">Proceed to Checkout</button>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
