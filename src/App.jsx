import { useState } from "react";

const SIZES = ["S","M","L","XL","XXL"];

const PRODUCTS = [
  "T-Shirt","Long Sleeve","Hoodie","Crewneck","Quarter Zip",
  "Polo","Tank","Sweatpants","Shorts","Zip Hoodie",
  "Jacket","Windbreaker","Thermal","Oversized Tee","Athletic Tee"
].map((name, i) => ({
  id: name.toLowerCase().replace(/\s/g, ""),
  name,
  price: 20 + i * 2,
}));

function Garment({ color }) {
  return (
    <div style={{
      width: 180,
      height: 220,
      borderRadius: 20,
      background: "#f2f2f2",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }}>
      <div style={{
        width: 120,
        height: 160,
        background: color,
        borderRadius: 14,
        boxShadow: "0 15px 40px rgba(0,0,0,0.12)"
      }}/>
    </div>
  );
}

export default function App() {
  const [colors, setColors] = useState(
    Object.fromEntries(PRODUCTS.map(p => [p.id, "#eaeaea"]))
  );

  const [sizes, setSizes] = useState(
    Object.fromEntries(
      PRODUCTS.map(p => [
        p.id,
        Object.fromEntries(SIZES.map(s => [s, 0]))
      ])
    )
  );

  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);

  function updateColor(id, value) {
    setColors(prev => ({ ...prev, [id]: value }));
  }

  function updateSize(productId, size, value) {
    setSizes(prev => ({
      ...prev,
      [productId]: {
        ...prev[productId],
        [size]: Math.max(0, Number(value) || 0)
      }
    }));
  }

  function addToCart(product) {
    const sizeData = sizes[product.id];
    const totalQty = Object.values(sizeData).reduce((a,b)=>a+b,0);

    if (totalQty === 0) return;

    setCart(prev => [
      ...prev,
      {
        id: Date.now(),
        name: product.name,
        color: colors[product.id],
        sizes: sizeData,
        price: product.price,
        totalQty
      }
    ]);

    setCartOpen(true);
  }

  const total = cart.reduce((sum, item) => sum + item.price * item.totalQty, 0);

  return (
    <div style={{
      fontFamily: "-apple-system, Inter, sans-serif",
      background: "#f5f5f7",
      padding: "60px 40px"
    }}>

      {/* HEADER */}
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        marginBottom: 60
      }}>
        <h1 style={{ fontSize: 56, letterSpacing: "-2px" }}>NAQSH</h1>

        <button onClick={() => setCartOpen(true)}>
          Cart ({cart.length})
        </button>
      </div>

      {/* PRODUCT GRID */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
        gap: 40
      }}>
        {PRODUCTS.map(product => (
          <div key={product.id} style={{
            background: "#fff",
            padding: 24,
            borderRadius: 20,
            boxShadow: "0 8px 24px rgba(0,0,0,0.05)"
          }}>
            <h3>{product.name}</h3>

            <Garment color={colors[product.id]} />

            {/* COLOR */}
            <div style={{ marginTop: 10 }}>
              <input
                type="color"
                value={colors[product.id]}
                onChange={(e)=>updateColor(product.id,e.target.value)}
              />
            </div>

            {/* SIZES */}
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(3,1fr)",
              gap: 8,
              marginTop: 12
            }}>
              {SIZES.map(size => (
                <input
                  key={size}
                  placeholder={size}
                  type="number"
                  min="0"
                  onChange={(e)=>updateSize(product.id,size,e.target.value)}
                />
              ))}
            </div>

            <button
              onClick={()=>addToCart(product)}
              style={{
                marginTop: 12,
                width: "100%",
                padding: 10,
                background: "#111",
                color: "#fff",
                borderRadius: 10
              }}
            >
              Add
            </button>
          </div>
        ))}
      </div>

      {/* CART DRAWER */}
      {cartOpen && (
        <div style={{
          position: "fixed",
          top: 0,
          right: 0,
          width: 350,
          height: "100vh",
          background: "#fff",
          boxShadow: "-10px 0 30px rgba(0,0,0,0.1)",
          padding: 20
        }}>
          <h2>Cart</h2>

          {cart.map(item => (
            <div key={item.id} style={{ marginBottom: 12 }}>
              <strong>{item.name}</strong>
              <div>{item.totalQty} items</div>
            </div>
          ))}

          <h3>Total: ${total}</h3>

          <button
            onClick={() => {
              window.location.href = "https://square.link/your-link";
            }}
            style={{
              marginTop: 20,
              width: "100%",
              padding: 12,
              background: "#111",
              color: "#fff"
            }}
          >
            Checkout
          </button>

          <button onClick={()=>setCartOpen(false)} style={{ marginTop: 10 }}>
            Close
          </button>
        </div>
      )}
    </div>
  );
}
