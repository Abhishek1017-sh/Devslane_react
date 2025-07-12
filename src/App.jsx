import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import ProductCard from './ProductCard';
import Details from './moreDetails';

function App() {
  const [selectedItem, setSelectedItem] = useState(null);
  const handleShowDetails = (item) => {
    setSelectedItem(item);
  };
  const handleGoBack = () => {
    setSelectedItem(null);
  };
  return (
      <div className='bg-gray-300 min-h-screen'>
        {selectedItem ? (
        <Details item={selectedItem} goBack={handleGoBack} />
        ):(
          <>
        <Header />
        <div className="bg-white m-12 rounded-lg shadow-lg p-6">
        <div className="bg-white m-12 mb-0 flex justify-end ">
          <label for="category" className=" text-black font-semibold "></label>
          <select name="category" id="category" className='mr-12 mt-4 border-4' >
            <option value="all">All</option>
            <option value="mugs">Mugs</option>
            <option value="tshirts">Tshirts</option>
          </select>
        </div>
        <div className="bg-white m-12 mt-0 mb-0  p-4 flex flex-wrap justify-center gap-z">
          <ProductCard
            image="https://www.arcprint.in/assets/media/products_common_imgs/black-coffee-mugs/description.jpg"
            title="Black Printed Coffee Mug"
            category="Mugs"
            price="15.00"
            moreDetails={handleShowDetails}
            />
          <ProductCard
            image="https://m.media-amazon.com/images/I/61rc196ZwUL._UF894,1000_QL80_.jpg"
            title="Father's day coffee mug"
            category="Mugs"
            price="19.00"
            moreDetails={handleShowDetails}
          />
          <ProductCard
            image="https://putra.in/cdn/shop/files/IMG-0022_1200x.jpg?v=1732647723"
            title="Green Printed Tshirt"
            category="Tshirts"
            price="34.00"
            moreDetails={handleShowDetails}
          />
          <ProductCard
            image="https://betweenboxes.in/cdn/shop/files/cust-mug-600x600-500x500.webp?v=1720606037"
            title="Personalised mug"
            category="Mugs"
            price="15.00"
            moreDetails={handleShowDetails}
          />
          <ProductCard
            image="https://www.botnia.in/cdn/shop/files/47_b87415d3-951b-4172-aa68-89d63ec8f5f0_800x.png?v=1696434833"
            title="Printed Brown Tshirts"
            category="Tshirts"
            price="25.00"
            moreDetails={handleShowDetails}
          />
          <ProductCard
            image="https://www.rockit.co.in/cdn/shop/files/2240101920-1-38_1.jpg?v=1715680470"
            title="Printed Dark Blue Tshirts"
            category="Tshirts"
            price="34.00"
            moreDetails={handleShowDetails}
          />
          <ProductCard
            image="https://muselot.in/cdn/shop/products/Never-give-up-1.jpg?v=1644528299"
            title="Printed Green tshirts"
            category="Tshirts"
            price="28.00"
            moreDetails={handleShowDetails}
          />
          <ProductCard
            image="https://muselot.in/cdn/shop/products/I-am-coffee-hot4.jpg?v=1625002565"
            title="Printed Tshirt Coffee Black Color"
            category="Tshirts"
            price="25.00"
            moreDetails={handleShowDetails}
          />
          <ProductCard
            image="https://images.meesho.com/images/products/248447273/hlsee_512.webp"
            title="Typography Teal Printed Tshirt"
            category="Tshirts"
            price="32.00"
            moreDetails={handleShowDetails}
          />

        </div>
        <div className="flex m-12 pb-20  p-4 mt-0 bg-white  gap-2">
          <button className="border-red-500 border-4 bg-red-300 text-white px-6 py-2 rounded">1</button>
          <button className="border-red-500 border-4 bg-red-300 text-white px-6 py-2 rounded">2</button>
          <button className="border-red-500 border-4 bg-red-300 text-white px-6 py-2 rounded">3</button>
        </div>
        </div>
        <Footer />
        </>
      )}
      </div>
  )
}

export default App;
