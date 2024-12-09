import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between">
      <Link href="/">Home</Link>
      <Link href="/wishlist">Wishlist</Link>
      <Link href="/cart">Cart</Link>
    </nav>
  );
};

export default Navbar;
