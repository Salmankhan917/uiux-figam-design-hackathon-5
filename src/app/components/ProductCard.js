// components/ProductCard.js
const ProductCard = ({ image, name, price }) => {
    return (
      <div className="border p-4 rounded-lg shadow-lg">
        <img src={image} alt={name} className="w-full h-40 object-cover rounded-t-lg" />
        <h2 className="text-lg font-semibold mt-4">{name}</h2>
        <p className="text-gray-600">{price}</p>
        <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">Add to Cart</button>
      </div>
    );
  };
  
  export default ProductCard;
  