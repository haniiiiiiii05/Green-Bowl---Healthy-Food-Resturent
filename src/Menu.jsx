import React, { useState } from 'react';
import './menu.css';
import { FaCartPlus } from "react-icons/fa";

const menuItems = [
  {
    name: "Green Salad",
    category: "Salads",
    price: 199,
    description: "Fresh greens, cucumber, tomato and a light healthy dressing.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-OL8IvEY-HNKWSHAUE_Isc--PCzshawXiLVf99za_fJ9EOUgn47-wvcqf&s=10"
  },

  {
    name: "Buddha Bowl",
    category: "Bowls",
    price: 279,
    description: "Nutritious grains, roasted vegetables and fresh healthy toppings.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa9sFnw1ytFtM4IzP4uiyyVktEsSXMLO3kIv7uwEw1lQ&s=10"
  },
  {
    name: "Mango Smoothie",
    category: "Smoothies",
    price: 169,
    description: "Sweet and creamy mango blended into a refreshing smoothie.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvd02FG5BzEbypr8Qj6xkquM_u_4hf3wxvo4diDPxVmw&s=10"
  },
  {
    name: "Paneer Power Bowl",
    category: "Bowls",
    price: 289,
    description: "Grilled paneer, fresh vegetables and wholesome grains.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfNj1hrmOUdHdAZCKg6GnQTQif4o_5hPQqciz_L-fveQ&s=10"
  },
  {
    name: "Banana Oat Smoothie",
    category: "Smoothies",
    price: 159,
    description: "A creamy blend of banana, oats and natural goodness.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_m7TsaGttWp7u4e6iLYCi1nlcj119aJ-496-YnNjiuw&s=10"
  },
  {
    name: "Greek Salad",
    category: "Salads",
    price: 229,
    description: "Crisp vegetables, olives and feta with a refreshing dressing.",
    image: "https://www.eatingwell.com/thmb/wUP-REg_TanrtlPSIRKeYLlT-PA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/EWL-Chopped-Greek-Salad-Chicken-1x1-086-09a1b3a5b6d343099fea5a60358dfa76.jpg"
  },
  {
    name: "Green Detox Smoothie",
    category: "Smoothies",
    price: 189,
    description: "A refreshing blend of spinach, apple, cucumber and lemon.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsH-34m0wL45M0Q4ZuuoL3SxTYKS9RJp4jADqPK0QS4Q&s=10"
  },
  {
    name: "Quinoa Salad",
    category: "Salads",
    price: 249,
    description: "Protein-rich quinoa with colorful vegetables and herbs.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi44iley4-57rg9gAt4BA-gnuvMnquvmzZtup2rb1jaQ&s=10"
  },


  {
    name: "Rainbow Salad",
    category: "Salads",
    price: 239,
    description: "A colorful mix of fresh vegetables packed with nutrients.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBUlKjHERyLC9O_Zc3QGrHDwCL1-CeagAlfVSOhufc2A&s=10"
  },
  {
    name: "Sweet Potato Bowl",
    category: "Bowls",
    price: 269,
    description: "Roasted sweet potato, greens and healthy grains in one bowl.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLswKG3jQxFylGhZv1mJ96reiWQgW2vR6rMgEZK-J01A&s=10"
  },
  {
    name: "Avocado Bowl",
    category: "Bowls",
    price: 299,
    description: "Creamy avocado with fresh vegetables and nutritious grains.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnwUYPq4s3MKtgdKCAq9uivxvbltUQRIk9XN96R_kq7UgxePnKDAJ4xz0&s=10"
  },
  {
    name: "Berry Smoothie",
    category: "Smoothies",
    price: 179,
    description: "A refreshing blend of fresh berries and creamy goodness.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyi22d7VuD3dlxl7Xfe0vcOFX3qaEnxXo5DmIcKyXkD5EXsKkdrgMScyb3&s=10"
  },

];

const categories = ["All", "Salads", "Bowls", "Smoothies"];

const Menu = ({ onAddToCart }) => {

  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems =
    activeCategory === "All"
      ? menuItems
      : menuItems.filter(item => item.category === activeCategory);

  return (
    <section className="menu-section" id="menu">

      <div className="menu-header">
        <p className="menu-eyebrow">OUR MENU</p>

        <h2>Healthy • Fresh • Delicious</h2>

        <div className="menu-divider">
          <span></span>
          <b>✦</b>
          <span></span>
        </div>
      </div>


      {/* Categories */}

      <div className="menu-categories">

        {categories.map(category => (
          <button
            key={category}
            className={`menu-category ${activeCategory === category ? "active" : ""
              }`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}

      </div>


      {/* Menu Cards */}

      <div className="menu-grid">

        {filteredItems.map(item => (

          <div className="menu-card" key={item.name}>

            <div className="menu-image-wrapper">

              <img
                src={item.image}
                alt={item.name}
                className="menu-image"
              />

              <span className="menu-category-label">
                {item.category}
              </span>

            </div>


            <div className="menu-card-body">

              <h3>{item.name}</h3>

              <p>{item.description}</p>

              <div className="menu-card-bottom">

                <span className="menu-price">
                  ₹{item.price}
                </span>

                <button type="button" className="menu-cart-btn" onClick={() => onAddToCart(item)}>
                  <FaCartPlus />
                  <span>Add to Cart</span>
                </button>

              </div>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
};

export default Menu;
