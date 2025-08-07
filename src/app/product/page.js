'use client';

import React, { useState } from 'react';
import Image from 'next/image';

// Product list
const products = Array.from({ length: 18 }, (_, i) => ({
  id: i + 1,
  name: 'American Apparel 2100',
  price: 21.23,
  image: ['/Sabaya.webp', '/Darham.webp', '/Ameer.webp'][i % 3],
}));

const ProductCard = ({ product, addToCart }) => {
  const [quantity, setQuantity] = useState(0);

  const increaseQty = () => setQuantity(prev => prev + 1);
  const decreaseQty = () => setQuantity(prev => (prev > 0 ? prev - 1 : 0));

  return (
    <div className="bg-white text-black p-5 shadow-md hover:shadow-lg transition-shadow rounded-2xl flex flex-col items-center border border-gray-200">
      <Image
        src={product.image}
        alt={product.name}
        width={300}
        height={300}
        className="rounded-lg object-cover"
      />
      <h2 className="text-xl font-semibold mt-3 text-center">{product.name}</h2>
      <p className="text-sm text-gray-600 mt-1">${product.price.toFixed(2)}</p>

      <div className="flex items-center gap-3 mt-4 border border-gray-300 rounded-full px-4 py-1">
        <button onClick={decreaseQty} className="text-lg font-bold text-gray-700 hover:text-black transition">-</button>
        <span className="font-semibold text-black">{quantity}</span>
        <button onClick={increaseQty} className="text-lg font-bold text-gray-700 hover:text-black transition">+</button>
      </div>

      <button
        onClick={() => quantity > 0 && addToCart(product, quantity)}
        className={`mt-5 w-full py-2 rounded-lg transition text-white ${
          quantity > 0 ? 'bg-black hover:bg-gray-800' : 'bg-gray-300 cursor-not-allowed'
        }`}
        disabled={quantity === 0}
      >
        Add to Cart
      </button>
    </div>
  );
};

const ProductPage = () => {
  const [cart, setCart] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    phone: '',
    email: '',
    coupon: '',
  });

  const addToCart = (product, quantity) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
        );
      }
      return [...prev, { ...product, quantity }];
    });
  };

  const handleInputChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const calculateTotal = () => {
    const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const discount = formData.coupon.toLowerCase() === '20off' ? subtotal * 0.2 : 0;
    const total = subtotal - discount;
    return { subtotal, discount, total };
  };

  const handleCheckout = () => {
    const { subtotal, discount, total } = calculateTotal();
    console.log('Checkout Info:', formData, cart, { subtotal, discount, total });
    alert(`Order Placed!\nTotal: $${total.toFixed(2)}`);
    setCart([]);
    setFormData({ name: '', address: '', phone: '', email: '', coupon: '' });
    setShowModal(false);
  };

  const { subtotal, discount, total } = calculateTotal();

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 py-12 px-4 sm:px-6">
     <h2 className="w-full text-center text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-l from-purple-500 via-orange-500 to-yellow-500 text-transparent bg-clip-text leading-tight px-4 break-words -m-5 mb-5">  Arabian Mehek is Coming </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6 max-w-7xl mx-auto">
        {products.map(product => (
          <ProductCard key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>

      {cart.length > 0 && (
        <button
          onClick={() => setShowModal(true)}
          className="fixed bottom-6 right-6 bg-gradient-to-r from-pink-500 to-red-500 text-white px-6 py-3 rounded-full shadow-lg hover:opacity-90 transition"
        >
          View Cart ({cart.reduce((sum, item) => sum + item.quantity, 0)})
        </button>
      )}

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 px-4">
          <div className="bg-white w-full max-w-xl p-6 rounded-lg shadow-xl overflow-y-auto max-h-[90vh]">
            <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-red-500 text-white text-center py-3 rounded-md">
              Your Cart
            </h3>

            {cart.map(item => (
              <div key={item.id} className="flex justify-between items-center border-b border-gray-300 py-2">
                <div>
                  <p className="font-semibold text-black">{item.name}</p>
                  <p className="text-sm text-black">Qty: {item.quantity}</p>
                </div>
                <p className="font-semibold text-black">${(item.price * item.quantity).toFixed(2)}</p>
              </div>
            ))}

            <div className="mt-4 text-black">
              <p className="text-sm">Subtotal: ${subtotal.toFixed(2)}</p>
              {discount > 0 && <p className="text-sm text-green-600">Discount (20%): -${discount.toFixed(2)}</p>}
              <p className="font-semibold">Total: ${total.toFixed(2)}</p>
            </div>

            <div className="mt-6 space-y-4">
              <input type="text" name="name" value={formData.name} onChange={handleInputChange} placeholder="Name" className="w-full border border-gray-300 rounded-md px-4 py-2 text-black placeholder-gray-500" />
              <input type="text" name="address" value={formData.address} onChange={handleInputChange} placeholder="Address" className="w-full border border-gray-300 rounded-md px-4 py-2 text-black placeholder-gray-500" />
              <input type="text" name="phone" value={formData.phone} onChange={handleInputChange} placeholder="Phone Number" className="w-full border border-gray-300 rounded-md px-4 py-2 text-black placeholder-gray-500" />
              <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="Email Address" className="w-full border border-gray-300 rounded-md px-4 py-2 text-black placeholder-gray-500" />
              <input type="text" name="coupon" value={formData.coupon} onChange={handleInputChange} placeholder="Enter Coupon (try '20OFF')" className="w-full border border-gray-300 rounded-md px-4 py-2 text-black placeholder-gray-500" />
            </div>

            <div className="flex justify-between items-center mt-6">
              <button onClick={() => setShowModal(false)} className="text-gray-600 hover:text-black transition">Cancel</button>
              <button onClick={handleCheckout} className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 transition">Pay ${total.toFixed(2)}</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductPage;
