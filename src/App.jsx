import { useMemo, useState } from "react";

const SIZE_LABELS = ["S", "M", "L", "XL", "XXL"];

const PRODUCTS = [
  {
    id: "tshirt",
    name: "T-Shirt",
    price: 22,
    colors: [
      { name: "Black", value: "#111", image: "https://placehold.co/600x700/111/fff?text=T-Shirt" },
      { name: "White", value: "#f5f5f5", image: "https://placehold.co/600x700/f5f5f5/111?text=T-Shirt" },
      { name: "Forest", value: "#1f2d24", image: "https://placehold.co/600x700/1f2d24/fff?text=T-Shirt" },
    ],
  },
  {
    id: "hoodie",
    name: "Hoodie",
    price: 38,
    colors: [
      { name: "Black", value: "#111", image: "https://placehold.co/600x700/111/fff?text=Hoodie" },
      { name: "Gray", value: "#d9d9d9", image: "https://placehold.co/600x700/d9d9d9/111?text=Hoodie" },
    ],
  },
];

function getInitial(products) {
  const colors = {};
  const sizes = {};

  products.forEach((p) => {
    colors[p.id] = 0;
    sizes[p.id] = {};
    SIZE_LABELS.forEach((s) => (sizes[p.id][s] = 0));
  });

  return { colors, sizes };
}

export default function App() {
  const init = useMemo(() => getInitial(PRODUCTS), []);
  const [colorIndex, setColorIndex] = useState(init.colors);
  const [quantities, setQuantities] = useState(init.sizes);
  const [cart, setCart] = useState([]);

  function updateQty(productId, size, val) {
    setQuantities((prev) => ({
      ...prev,
      [productId]: {
        ...prev[productId],
        [size]: Math.max(0, Number(val) || 0),
      },
    }));
  }

  function addToCart(product) {
    const color = product.colors[colorIndex[product.id]];
    const sizes = quantities[product.id];
    const total = Object.values(sizes).reduce((a, b) => a + b, 0);

    if (!total) return;

    setCart((prev) => [
      ...prev,
      {
        id: Date.now(),
        name: product.name,
        color: color.name,
        image: color.image,
        sizes,
        total,
        price: product.price,
      },
    ]);
  }

  return (
    <div style={{ fontFamily: "Arial", background: "#fafafa", padding: 30 }}>
      <h1 style={{ fontSize: 40 }}>NAQSH</h1>

      {PRODUCTS.map((product) => {
        const color = product.colors[colorIndex[product.id]];
        const sizes = quantities[product.id];

        return (
          <div key={product.id} style={{ marginTop: 40 }}>
            <h2>{product.name}</h2>

            <img src={color.image} width={250} />

            <div style={{ marginTop: 10 }}>
              {product.colors.map((c, i) => (
                <button key={i} onClick={() =>
                  setColorIndex((prev) => ({ ...prev, [product.id]: i }))
                }>
                  {c.name}
                </button>
              ))}
            </div>

            <div style={{ marginTop: 10 }}>
              {SIZE_LABELS.map((s) => (
                <input
                  key={s}
                  type="number"
                  placeholder={s}
                  onChange={(e) => updateQty(product.id, s, e.target.value)}
                />
              ))}
            </div>

            <button onClick={() => addToCart(product)}>
              Add to Cart
            </button>
          </div>
        );
      })}

      <h2 style={{ marginTop: 50 }}>Cart</h2>

      {cart.map((item) => (
        <div key={item.id}>
          {item.name} ({item.color}) - {item.total} items
        </div>
      ))}
    </div>
  );
}
