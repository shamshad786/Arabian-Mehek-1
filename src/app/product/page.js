'use client';

import React, { useState } from 'react';
import Image from 'next/image';

const products = [
  { id: 1, name: 'SABAYA By Al Rehab ', size: '50ml', price: 699, image: '/Sabaya.webp' },
  { id: 2, name: 'RASASI Dirham Perfume Eau de Parfum', size: '35ml', price: 1799, image: '/Darham.webp' },
  { id: 3, name: 'Ameer Al Oud', size: '35ml', price: 899, image: '/Ameer.webp' },
  { id: 4, name: 'Club 77', size: '100ml', price: 1799, image: '/Club.webp' },
  { id: 5, name: 'Marquis', size: '60ml', price: 1599, image: '/Marquis.webp' },
  { id: 6, name: 'Versatile Crystal', size: '100ml', price: 1450, image: '/Versatile.webp' },
  { id: 7, name: 'Rumba Eau De Toilette Natural Spray', size: '100ml', price: 2999, image: '/Ramba.webp' },
  { id: 8, name: 'Rasha', size: '35', price: 1299, image: '/Ravha.webp' },
];

const ProductCard = ({ product, cartQuantity, updateCart }) => {
  const increaseQty = () => updateCart(product, 1);
  const decreaseQty = () => updateCart(product, -1);

  return (
    <div className="bg-white text-black p-5 shadow-md hover:shadow-lg transition-shadow rounded-2xl flex flex-col items-center border border-gray-200">
      {/* Consistent image height container */}
      <div className="w-full h-[300px] flex items-center justify-center overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          width={190}
          height={220}
          className="object-contain"
        />
      </div>

      <h2 className="text-xl font-semibold mt-3 text-center">{product.name}</h2>
      <p className="text-sm text-gray-500">{product.size}</p>
      <p className="text-sm text-gray-600 mt-1">₹{product.price.toFixed(2)}</p>

      <div className="flex items-center gap-3 mt-4 border border-gray-300 rounded-full px-4 py-1">
        <button onClick={decreaseQty} className="text-lg font-bold text-gray-700 hover:text-black transition">-</button>
        <span className="font-semibold text-black">{cartQuantity || 0}</span>
        <button onClick={increaseQty} className="text-lg font-bold text-gray-700 hover:text-black transition">+</button>
      </div>
    </div>
  );
};

const ProductPage = () => {
  const [cart, setCart] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({ name: '', address: '', phone: '', email: '', coupon: '' });
  const [discount, setDiscount] = useState(0);

  const updateCart = (product, quantityChange) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        const newQuantity = existing.quantity + quantityChange;
        if (newQuantity <= 0) return prev.filter(item => item.id !== product.id);
        return prev.map(item => item.id === product.id ? { ...item, quantity: newQuantity } : item);
      } else if (quantityChange > 0) {
        return [...prev, { ...product, quantity: quantityChange }];
      }
      return prev;
    });
  };

  const getProductQuantity = productId => {
    const item = cart.find(i => i.id === productId);
    return item ? item.quantity : 0;
  };

  const handleInputChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (name === 'coupon') {
      setDiscount(value === 'ARBPRE20' ? 0.2 : 0);
    }
  };

  const getTotal = () => {
    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    return total - total * discount;
  };

  const handleCheckout = () => {
    const { name, address, phone, email } = formData;
    if (!name || !address || !phone || !email) {
      alert('Please fill in all required fields.');
      return;
    }

    alert(`Proceeding to payment of ₹${getTotal().toFixed(2)} with Razorpay...`);

    setCart([]);
    setFormData({ name: '', address: '', phone: '', email: '', coupon: '' });
    setDiscount(0);
    setShowModal(false);
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 py-12 px-4 sm:px-6">
      <h2 className="w-full text-center text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-l from-purple-500 via-orange-500 to-yellow-500 text-transparent bg-clip-text leading-tight px-4 break-words -m-5 mb-5"> Pre Launch Limited Product </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {products.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            cartQuantity={getProductQuantity(product.id)}
            updateCart={updateCart}
          />
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
            <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-red-500 text-white text-center py-3 rounded-md">Your Cart</h3>

            {cart.map(item => (
              <div key={item.id} className="flex justify-between items-center border-b border-gray-300 py-2">
                <div>
                  <p className="font-semibold text-black">{item.name}</p>
                  <p className="text-sm text-black">Qty: {item.quantity}</p>
                </div>
                <p className="font-semibold text-black">₹{(item.price * item.quantity).toFixed(2)}</p>
              </div>
            ))}

            <div className="mt-6 space-y-4">
              <input name="name" placeholder="Your Name" value={formData.name} onChange={handleInputChange} className="w-full border border-gray-300 rounded-md px-4 py-2 text-black" />
              <input name="address" placeholder="Delivery Address" value={formData.address} onChange={handleInputChange} className="w-full border border-gray-300 rounded-md px-4 py-2 text-black" />
              <input name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleInputChange} className="w-full border border-gray-300 rounded-md px-4 py-2 text-black" />
              <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleInputChange} className="w-full border border-gray-300 rounded-md px-4 py-2 text-black" />
              <input name="coupon" placeholder="Enter Coupon (if any)" value={formData.coupon} onChange={handleInputChange} className="w-full border border-gray-300 rounded-md px-4 py-2 text-black" />
            </div>

            <div className="mt-4 text-black text-right font-semibold">
              Total: ₹{getTotal().toFixed(2)} {discount > 0 && <span className="text-green-600">(20% OFF)</span>}
            </div>

            <div className="flex justify-between items-center mt-6">
              <button onClick={() => setShowModal(false)} className="text-gray-600 hover:text-black transition">Cancel</button>
              <a href='http://razorpay.me/@kwiqsoftllp' onClick={handleCheckout} className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 transition">Pay</a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductPage;
