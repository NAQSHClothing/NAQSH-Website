import React, { useState } from "react";

const PRODUCTS = [
  "T-Shirt",
  "Long Sleeve",
  "Crewneck Sweatshirt",
  "Pullover Hoodie",
  "Zip Hoodie",
  "Quarter Zip",
  "Mock Neck Hoodie",
  "Varsity Jacket",
  "Windbreaker",
  "Denim Jacket",
  "Track Jacket",
  "Crop Hoodie"
];

export default function NaqshClothingCustomizer() {
  const [selectedProduct, setSelectedProduct] = useState(PRODUCTS[0]);
  const [color, setColor] = useState("#222222");
  const [sizes, setSizes] = useState({ S: 0, M: 0, L: 0, XL: 0 });
  const [designFile, setDesignFile] = useState(null);

  const handleSizeChange = (size, value) => {
    setSizes({ ...sizes, [size]: parseInt(value) || 0 });
  };

  return (
    <div style={{ fontFamily: "sans-serif", padding: "30px", background: "#dddddd" }}>
      
      <h1 style={{ color: "#222222" }}>NAQSH Clothing</h1>
      <p style={{ color: "#575454" }}>Leave your mark.</p>

      {/* Product Selection */}
      <h3>Select Product</h3>
      <select
        value={selectedProduct}
        onChange={(e) => setSelectedProduct(e.target.value)}
      >
        {PRODUCTS.map((p) => (
          <option key={p}>{p}</option>
        ))}
      </select>

      {/* Color Picker */}
      <h3>Pick Color</h3>
      <input
        type="color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />

      {/* Mockup */}
      <div
        style={{
          marginTop: "20px",
          width: "250px",
          height: "250px",
          background: color,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          fontWeight: "bold",
          borderRadius: "10px"
        }}
      >
        {selectedProduct}
      </div>

      {/* Sizes */}
      <h3>Sizes</h3>
      {["S", "M", "L", "XL"].map((size) => (
        <div key={size}>
          {size}:{" "}
          <input
            type="number"
            min="0"
            onChange={(e) => handleSizeChange(size, e.target.value)}
          />
        </div>
      ))}

      {/* Upload */}
      <h3>Upload Design</h3>
      <input
        type="file"
        onChange={(e) => setDesignFile(e.target.files[0])}
      />

      {/* Contact */}
      <h3>Contact</h3>
      <p>Email: orders.naqshclothing@gmail.com</p>
      <p>Phone: 470-851-4486</p>

      {/* Submit */}
      <button
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          background: "#222222",
          color: "white",
          border: "none",
          borderRadius: "5px"
        }}
        onClick={() => alert("Order submitted (we'll contact you!)")}
      >
        Submit Order
      </button>
    </div>
  );
}
