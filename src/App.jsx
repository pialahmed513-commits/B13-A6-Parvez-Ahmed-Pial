import { useState, useEffect } from 'react';
import './App.css';
import Navber from './Component/Navber/Navber';
import Banner from './Component/Banner/Banner';
import Text from './Component/Banner/Text';
import Title from './Component/Banner/Title';
import Products from './Component/Products/Products';
import SelectedCard from './Component/SelectedCard/SelectedCard';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [activeTab, setActiveTab] = useState('product'); // 'product' or 'cart'

  useEffect(() => {
    fetch("/Data.json")
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  const handleAddToCart = (product) => {
    const isExist = cart.find(item => item.id === product.id);
    if (!isExist) {
      setCart([...cart, product]);
      toast.success(`${product.name} Added to Cart! 🛒`);
    } else {
      toast.warn("Product already in cart!");
    }
  };

  const handleRemove = (id) => {
    const remaining = cart.filter(item => item.id !== id);
    setCart(remaining);
    toast.error("Item Removed ❌");
  };

  const handleCheckout = () => {
    setCart([]);
    toast.info("Checkout Success! Cart Cleared. 🚀");
  };

  return (
    <div className="bg-white min-h-screen">
      <Navber cartCount={cart.length} />
      <Banner />
      <Text />
      <Title />

      {/* 🔄 Toggling Buttons Section */}
      <div className="flex justify-center gap-4 my-12">
        <button 
          onClick={() => setActiveTab('product')} 
          className={`btn px-10 rounded-xl transition-all ${activeTab === 'product' ? 'btn-primary shadow-lg scale-105' : 'btn-outline border-[#4F39F6] text-[#4F39F6]'}`}
        >
          Product Showcase
        </button>
        <button 
          onClick={() => setActiveTab('cart')} 
          className={`btn px-10 rounded-xl transition-all ${activeTab === 'cart' ? 'btn-secondary shadow-lg scale-105' : 'btn-outline border-secondary text-secondary'}`}
        >
          My Cart ({cart.length})
        </button>
      </div>

      {/* 📊 Section Rendering */}
      <div className="container mx-auto px-4 pb-24">
        {activeTab === 'product' ? (
          <Products products={products} handleAddToCart={handleAddToCart} cart={cart} />
        ) : (
          <SelectedCard 
            cart={cart} 
            handleRemove={handleRemove} 
            handleCheckout={handleCheckout} 
          />
        )}
      </div>

      <ToastContainer position="top-right" autoClose={1500} />
    </div>
  );
}

export default App;