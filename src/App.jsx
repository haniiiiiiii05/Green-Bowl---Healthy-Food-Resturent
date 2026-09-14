import { useEffect, useRef, useState } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { FaArrowUp } from 'react-icons/fa6';
import './App.css';
import Navbar from './navbar';
import Hero from './hero';
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import BookTable from "./components/BookTable";
import Cart from "./components/Cart";
import Chose from './Chose';
import About from './About';
import LearnMore from "./components/LearnMore";
import Menu from './Menu';
import Testimonials from './Testimonial';
import SpecialOffer from './SpecialOffer'
import Gallery from './Gallery';
import Contact from './contact';
import Footer from "./Footer";

function Home({ cartItems, onAddToCart }) {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const location = useLocation();
  const isPageReload = useRef(
    performance.getEntriesByType('navigation')[0]?.type === 'reload'
  );

  useEffect(() => {
    const updateScrollButton = () => setShowScrollTop(window.scrollY > 300);

    window.addEventListener('scroll', updateScrollButton, { passive: true });
    updateScrollButton();

    return () => window.removeEventListener('scroll', updateScrollButton);
  }, []);

  useEffect(() => {
    if (isPageReload.current) {
      isPageReload.current = false;
      window.history.replaceState(null, '', window.location.pathname);
      window.scrollTo({ top: 0, behavior: 'auto' });
      return;
    }

    if (!location.hash) return;

    const sectionId = location.hash.startsWith('#/?section=')
      ? new URLSearchParams(location.hash.slice(2)).get('section')
      : location.hash.slice(1);

    if (!sectionId) return;

    const scrollTimeout = window.setTimeout(() => {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    }, 0);

    return () => window.clearTimeout(scrollTimeout);
  }, [location.hash]);

  const scrollToHome = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="App">
      <Navbar cartCount={cartItems.reduce((total, item) => total + item.quantity, 0)} />
      <Hero />
      <About />
      <Chose />
      <Menu onAddToCart={onAddToCart} />
      <SpecialOffer onAddToCart={onAddToCart} />
      <Testimonials />
      <Gallery />
      <Contact />
      <Footer />
      {showScrollTop && (
        <button
          className="scroll-to-top"
          type="button"
          onClick={scrollToHome}
          aria-label="Scroll to the top of the page"
        >
          <FaArrowUp />
        </button>
      )}

    </div>
  );
}

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (menuItem) => {
    setCartItems((currentItems) => {
      const existingItem = currentItems.find((item) => item.id === menuItem.name);

      if (existingItem) {
        return currentItems.map((item) =>
          item.id === menuItem.name ? { ...item, quantity: item.quantity + 1 } : item
        );
      }

      return [...currentItems, { ...menuItem, id: menuItem.name, quantity: 1 }];
    });

    window.alert(`${menuItem.name} has been added to your cart.`);
  };

  const changeCartQuantity = (id, amount) => {
    setCartItems((currentItems) => currentItems.map((item) =>
      item.id === id ? { ...item, quantity: Math.max(1, item.quantity + amount) } : item
    ));
  };

  const removeFromCart = (id) => {
    setCartItems((currentItems) => currentItems.filter((item) => item.id !== id));
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home cartItems={cartItems} onAddToCart={addToCart} />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/book-table" element={<BookTable />} />
        <Route
          path="/cart"
          element={<Cart cartItems={cartItems} onChangeQuantity={changeCartQuantity} onRemoveItem={removeFromCart} />}
        />
        <Route
    path="/learn-more"
    element={
        <>
            <Navbar
                cartCount={cartItems.reduce(
                    (total, item) => total + item.quantity,
                    0
                )}
            />

            <LearnMore />

            <Footer />
        </>
    }
/>      </Routes>
    </BrowserRouter>
  );
}

export default App;
