import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between min-h-screen bg-gradient-to-br from-[#9ec2c4] via-[#c0d4c6] to-[#b8c6d4] px-6 md:px-20 py-10 bg-green-200">
      
      {/* Left Side Image */}
      <div className="flex-1 flex justify-center mb-10 md:mb-0">
        <img
          src="https://cdn3d.iconscout.com/3d/premium/thumb/online-shopping-3d-icon-download-in-png-blend-fbx-gltf-file-formats--store-bag-shop-cart-pack-icons-5713078.png"
          alt="E-commerce illustration"
          className="w-[300px] md:w-[420px] hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Right Side Text + Buttons */}
      <div className="flex-1 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Welcome to <span className="text-green-600">EcomWorld</span> 🛍️
        </h1>
        <p className="text-gray-600 text-lg mb-8 max-w-md">
          Discover amazing products, unbeatable deals, and a smooth shopping experience — all in one place.
        </p>

        
      </div>

    </div>
  );
};

export default Home;
