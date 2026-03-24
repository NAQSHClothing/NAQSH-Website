import { useMemo, useState } from "react";

const SIZE_LABELS = ["S", "M", "L", "XL", "XXL"];

const PRODUCTS = [
  {
    id: "tshirt",
    name: "T-Shirt",
    subtitle: "Soft everyday staple",
    price: 22,
    description:
      "A clean everyday essential with a modern silhouette and easy styling.",
    colors: [
      {
        name: "Black",
        value: "#171717",
        image: "https://placehold.co/1200x1400/171717/ffffff?text=Blank+T-Shirt",
      },
      {
        name: "White",
        value: "#F5F5F5",
        image: "https://placehold.co/1200x1400/F5F5F5/111111?text=Blank+T-Shirt",
      },
      {
        name: "Forest",
        value: "#243126",
        image: "https://placehold.co/1200x1400/243126/ffffff?text=Blank+T-Shirt",
      },
      {
        name: "Navy",
        value: "#1F2A44",
        image: "https://placehold.co/1200x1400/1F2A44/ffffff?text=Blank+T-Shirt",
      },
    ],
  },
  {
    id: "hoodie",
    name: "Hoodie",
    subtitle: "Heavyweight and elevated",
    price: 38,
    description:
      "A premium hoodie option with a thicker feel and a more elevated finish.",
    colors: [
      {
        name: "Black",
        value: "#171717",
        image: "https://placehold.co/1200x1400/171717/ffffff?text=Blank+Hoodie",
      },
      {
        name: "Ash",
        value: "#D8D8D8",
        image: "https://placehold.co/1200x1400/D8D8D8/111111?text=Blank+Hoodie",
      },
      {
        name: "Cream",
        value: "#EDE7DD",
        image: "https://placehold.co/1200x1400/EDE7DD/111111?text=Blank+Hoodie",
      },
      {
        name: "Forest",
        value: "#243126",
        image: "https://placehold.co/1200x1400/243126/ffffff?text=Blank+Hoodie",
      },
    ],
  },
  {
    id: "crewneck",
    name: "Crewneck",
    subtitle: "Classic custom essential",
    price: 34,
    description:
      "A versatile crewneck that works well for student orgs, teams, and events.",
    colors: [
      {
        name: "Black",
        value: "#171717",
        image: "https://placehold.co/1200x1400/171717/ffffff?text=Blank+Crewneck",
      },
      {
        name: "Gray",
        value: "#CFCFCB",
        image: "https://placehold.co/1200x1400/CFCFCB/111111?text=Blank+Crewneck",
      },
      {
        name: "Cream",
        value: "#EEE7DB",
        image: "https://placehold.co/1200x1400/EEE7DB/111111?text=Blank+Crewneck",
      },
      {
        name: "Navy",
        value: "#1F2A44",
        image: "https://placehold.co/1200x1400/1F2A44/ffffff?text=Blank+Crewneck",
      },
    ],
  },
  {
    id: "quarterzip",
    name: "Quarter Zip",
    subtitle: "Polished and versatile",
    price: 42,
    description:
      "A cleaner, more polished garment option for a refined custom look.",
    colors: [
      {
        name: "Black",
        value: "#171717",
        image: "https://placehold.co/1200x1400/171717/ffffff?text=Blank+Quarter+Zip",
      },
      {
        name: "Stone",
        value: "#DDD5C8",
        image: "https://placehold.co/1200x1400/DDD5C8/111111?text=Blank+Quarter+Zip",
      },
      {
        name: "Forest",
        value: "#243126",
        image: "https://placehold.co/1200x1400/243126/ffffff?text=Blank+Quarter+Zip",
      },
      {
        name: "Navy",
        value: "#1F2A44",
        image: "https://placehold.co/1200x1400/1F2A44/ffffff?text=Blank+Quarter+Zip",
      },
    ],
  },
];

function createInitialQuantities() {
  const data = {};
  for (const product of PRODUCTS) {
    data[product.id] = {};
    for (const size of SIZE_LABELS) data[product.id][size] = 0;
  }
  return data;
}

function createInitialColors() {
  const data = {};
  for (const product of PRODUCTS) data[product.id] = 0;
  return data;
}

const styles = {
  page: {
    minHeight: "100vh",
    background: "#f5f5f7",
    color: "#111111",
    fontFamily:
      'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
  },
  header: {
    position: "sticky",
    top: 0,
    zIndex: 30,
    backdropFilter: "blur(14px)",
    background: "rgba(255,255,255,0.78)",
    borderBottom: "1px solid rgba(0,0,0,0.05)",
  },
  container: {
    maxWidth: 1280,
    margin: "0 auto",
    padding: "0 24px",
  },
  navInner: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "16px 0",
  },
  logo: {
    fontSize: 15,
    fontWeight: 700,
    letterSpacing: "0.24em",
  },
  blackButton: {
    border: "none",
    borderRadius: 999,
    background: "#111111",
    color: "#ffffff",
    padding: "14px 26px",
    fontSize: 14,
    fontWeight: 600,
    cursor: "pointer",
  },
  whiteButton: {
    border: "none",
    borderRadius: 999,
    background: "#ffffff",
    color: "#111111",
    padding: "14px 26px",
    fontSize: 14,
    fontWeight: 600,
    cursor: "pointer",
    boxShadow: "0 2px 18px rgba(0,0,0,0.06)",
  },
  hero: {
    display: "grid",
    gridTemplateColumns: "1.05fr 0.95fr",
    gap: 48,
    alignItems: "center",
    padding: "56px 0 88px",
  },
  eyebrow: {
    fontSize: 12,
    fontWeight: 600,
    letterSpacing: "0.28em",
    textTransform: "uppercase",
    color: "rgba(0,0,0,0.42)",
  },
  heroTitle: {
    fontSize: "clamp(44px, 7vw, 84px)",
    lineHeight: 1.02,
    letterSpacing: "-0.05em",
    margin: "16px 0 0",
    fontWeight: 700,
  },
  heroText: {
    marginTop: 24,
    maxWidth: 620,
    fontSize: 20,
    lineHeight: 1.7,
    color: "rgba(0,0,0,0.58)",
  },
  heroActions: {
    display: "flex",
    gap: 16,
    flexWrap: "wrap",
    marginTop: 36,
  },
  heroCard: {
    borderRadius: 42,
    background: "#ffffff",
    padding: 24,
    boxShadow: "0 18px 60px rgba(0,0,0,0.07)",
  },
  heroImageWrap: {
    borderRadius: 30,
    overflow: "hidden",
    background: "#eeeeee",
  },
  section: {
    paddingBottom: 96,
  },
  sectionTitle: {
    marginTop: 16,
    fontSize: "clamp(34px, 5vw, 64px)",
    lineHeight: 1.04,
    letterSpacing: "-0.04em",
    fontWeight: 700,
  },
  sectionText: {
    marginTop: 18,
    fontSize: 18,
    lineHeight: 1.75,
    color: "rgba(0,0,0,0.55)",
  },
  productList: {
    display: "grid",
    gap: 32,
    marginTop: 52,
  },
  productCard: {
    display: "grid",
    gridTemplateColumns: "1.05fr 1fr",
    gap: 32,
    borderRadius: 38,
    background: "#ffffff",
    padding: 28,
    boxShadow: "0 16px 48px rgba(0,0,0,0.05)",
  },
  productImageShell: {
    borderRadius: 30,
    background: "#f3f3f3",
    padding: 18,
  },
  productImageInner: {
    borderRadius: 24,
    overflow: "hidden",
  },
  productHeader: {
    display: "flex",
    justifyContent: "space-between",
    gap: 16,
    flexWrap: "wrap",
    alignItems: "flex-start",
  },
  productSubtitle: {
    fontSize: 14,
    color: "rgba(0,0,0,0.42)",
    margin: 0,
  },
  productTitle: {
    margin: "6px 0 0",
    fontSize: "clamp(30px, 4vw, 54px)",
    lineHeight: 1.02,
    letterSpacing: "-0.035em",
    fontWeight: 700,
  },
  productDesc: {
    marginTop: 16,
    fontSize: 18,
    lineHeight: 1.65,
    color: "rgba(0,0,0,0.56)",
    maxWidth: 560,
  },
  pricePill: {
    background: "#f4f4f4",
    borderRadius: 999,
    padding: "10px 16px",
    fontSize: 14,
    fontWeight: 600,
    color: "rgba(0,0,0,0.68)",
  },
  blockTitle: {
    marginTop: 34,
    marginBottom: 14,
    fontSize: 12,
    fontWeight: 700,
    textTransform: "uppercase",
    letterSpacing: "0.28em",
    color: "rgba(0,0,0,0.40)",
  },
  chipRow: {
    display: "flex",
    gap: 12,
    flexWrap: "wrap",
  },
  chip: {
    border: "none",
    borderRadius: 999,
    padding: "11px 16px",
    fontSize: 14,
    fontWeight: 600,
    cursor: "pointer",
    background: "#f3f3f3",
    color: "rgba(0,0,0,0.72)",
  },
  chipActive: {
    background: "#111111",
    color: "#ffffff",
    boxShadow: "0 8px 24px rgba(0,0,0,0.16)",
  },
  qtyGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
    gap: 12,
    maxWidth: 440,
  },
  qtyCard: {
    borderRadius: 22,
    background: "#f6f6f6",
    padding: 14,
  },
  qtyLabel: {
    display: "block",
    marginBottom: 8,
    fontSize: 14,
    fontWeight: 600,
    color: "rgba(0,0,0,0.64)",
  },
  qtyInput: {
    width: "100%",
    border: "1px solid rgba(0,0,0,0.06)",
    borderRadius: 999,
    background: "#ffffff",
    padding: "12px 14px",
    fontSize: 14,
    outline: "none",
  },
  addRow: {
    display: "flex",
    alignItems: "center",
    gap: 16,
    flexWrap: "wrap",
    marginTop: 32,
  },
  selectedText: {
    fontSize: 14,
    color: "rgba(0,0,0,0.46)",
  },
  overlay: {
    position: "fixed",
    inset: 0,
    background: "rgba(0,0,0,0.3)",
    zIndex: 40,
  },
  drawer: {
    position: "fixed",
    top: 0,
    right: 0,
    width: "100%",
    maxWidth: 430,
    height: "100vh",
    background: "#ffffff",
    zIndex: 50,
    boxShadow: "-24px 0 60px rgba(0,0,0,0.12)",
    display: "flex",
    flexDirection: "column",
  },
  drawerHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "22px 24px",
    borderBottom: "1px solid rgba(0,0,0,0.05)",
  },
  drawerBody: {
    flex: 1,
    overflowY: "auto",
    padding: 16,
    display: "grid",
    gap: 16,
  },
  drawerItem: {
    borderRadius: 28,
    background: "#f7f7f8",
    padding: 16,
  },
  drawerItemRow: {
    display: "flex",
    gap: 14,
  },
  thumb: {
    width: 82,
    height: 108,
    borderRadius: 18,
    overflow: "hidden",
    background: "#ffffff",
    flexShrink: 0,
  },
  drawerFooter: {
    borderTop: "1px solid rgba(0,0,0,0.05)",
    padding: 24,
  },
  subtotalRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 18,
  },
};

export default function App() {
  const initialQuantities = useMemo(() => createInitialQuantities(), []);
  const initialColors = useMemo(() => createInitialColors(), []);

  const [selectedColors, setSelectedColors] = useState(initialColors);
  const [quantities, setQuantities] = useState(initialQuantities);
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);

  function updateQuantity(productId, size, value) {
    const parsed = Number(value);
    const safe = Number.isNaN(parsed) || parsed < 0 ? 0 : parsed;

    setQuantities((prev) => ({
      ...prev,
      [productId]: {
        ...prev[productId],
        [size]: safe,
      },
    }));
  }

  function addToCart(product) {
    const color = product.colors[selectedColors[product.id] ?? 0];
    const sizeMap = quantities[product.id];
    const totalQty = Object.values(sizeMap).reduce((sum, qty) => sum + qty, 0);

    if (totalQty === 0) return;

    const lineItem = {
      id: `${product.id}-${color.name}-${Date.now()}`,
      productId: product.id,
      name: product.name,
      price: product.price,
      colorName: color.name,
      colorValue: color.value,
      image: color.image,
      sizes: { ...sizeMap },
      totalQty,
    };

    setCart((prev) => [...prev, lineItem]);
    setCartOpen(true);

    setQuantities((prev) => ({
      ...prev,
      [product.id]: Object.fromEntries(SIZE_LABELS.map((s) => [s, 0])),
    }));
  }

  function removeFromCart(id) {
    setCart((prev) => prev.filter((item) => item.id !== id));
  }

  const cartItemCount = cart.reduce((sum, item) => sum + item.totalQty, 0);
  const subtotal = cart.reduce((sum, item) => sum + item.totalQty * item.price, 0);

  return (
    <div style={styles.page}>
      <header style={styles.header}>
        <div style={styles.container}>
          <div style={styles.navInner}>
            <div style={styles.logo}>NAQSH</div>
            <button style={styles.blackButton} onClick={() => setCartOpen(true)}>
              Cart ({cartItemCount})
            </button>
          </div>
        </div>
      </header>

      <section style={{ ...styles.container, ...styles.hero }}>
        <div>
          <div style={styles.eyebrow}>Custom apparel, simplified</div>
          <h1 style={styles.heroTitle}>Build your full order in one clean flow.</h1>
          <p style={styles.heroText}>
            Select multiple garments, switch colors, choose quantities by size,
            and add everything to a single cart.
          </p>

          <div style={styles.heroActions}>
            <a href="#products" style={{ textDecoration: "none" }}>
              <button style={styles.blackButton}>Start building</button>
            </a>
            <button style={styles.whiteButton} onClick={() => setCartOpen(true)}>
              View cart
            </button>
          </div>
        </div>

        <div style={styles.heroCard}>
          <div style={styles.heroImageWrap}>
            <img
              src="https://placehold.co/1400x1600/f0f0f0/111111?text=NAQSH+Custom+Apparel"
              alt="NAQSH apparel hero"
              style={{ width: "100%", aspectRatio: "4 / 5", objectFit: "cover" }}
            />
          </div>
        </div>
      </section>

      <section id="products" style={{ ...styles.container, ...styles.section }}>
        <div style={{ maxWidth: 760 }}>
          <div style={styles.eyebrow}>Products</div>
          <h2 style={styles.sectionTitle}>Choose the pieces you want.</h2>
          <p style={styles.sectionText}>
            Add one item or mix multiple products in the same order.
          </p>
        </div>

        <div style={styles.productList}>
          {PRODUCTS.map((product) => {
            const selectedColorIndex = selectedColors[product.id] ?? 0;
            const activeColor = product.colors[selectedColorIndex];
            const productQty = Object.values(quantities[product.id]).reduce(
              (sum, qty) => sum + qty,
              0
            );

            return (
              <div key={product.id} style={styles.productCard}>
                <div style={styles.productImageShell}>
                  <div style={styles.productImageInner}>
                    <img
                      src={activeColor.image}
                      alt={`${product.name} ${activeColor.name}`}
                      style={{ width: "100%", aspectRatio: "4 / 5", objectFit: "cover" }}
                    />
                  </div>
                </div>

                <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
                  <div style={styles.productHeader}>
                    <div style={{ maxWidth: 560 }}>
                      <p style={styles.productSubtitle}>{product.subtitle}</p>
                      <h3 style={styles.productTitle}>{product.name}</h3>
                      <p style={styles.productDesc}>{product.description}</p>
                    </div>
                    <div style={styles.pricePill}>from ${product.price}</div>
                  </div>

                  <div style={styles.blockTitle}>Color</div>
                  <div style={styles.chipRow}>
                    {product.colors.map((color, i) => {
                      const active = i === selectedColorIndex;
                      return (
                        <button
                          key={color.name}
                          onClick={() =>
                            setSelectedColors((prev) => ({
                              ...prev,
                              [product.id]: i,
                            }))
                          }
                          style={{
                            ...styles.chip,
                            ...(active ? styles.chipActive : {}),
                          }}
                        >
                          <span style={{ display: "flex", alignItems: "center", gap: 10 }}>
                            <span
                              style={{
                                width: 14,
                                height: 14,
                                borderRadius: "50%",
                                background: color.value,
                                display: "inline-block",
                              }}
                            />
                            {color.name}
                          </span>
                        </button>
                      );
                    })}
                  </div>

                  <div style={styles.blockTitle}>Quantities by size</div>
                  <div style={styles.qtyGrid}>
                    {SIZE_LABELS.map((size) => (
                      <label key={size} style={styles.qtyCard}>
                        <span style={styles.qtyLabel}>{size}</span>
                        <input
                          type="number"
                          min="0"
                          value={quantities[product.id][size]}
                          onChange={(e) =>
                            updateQuantity(product.id, size, e.target.value)
                          }
                          style={styles.qtyInput}
                        />
                      </label>
                    ))}
                  </div>

                  <div style={styles.addRow}>
                    <button style={styles.blackButton} onClick={() => addToCart(product)}>
                      Add to cart
                    </button>
                    <p style={styles.selectedText}>{productQty} selected</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {cartOpen && <div style={styles.overlay} onClick={() => setCartOpen(false)} />}

      <aside
        style={{
          ...styles.drawer,
          transform: cartOpen ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.3s ease",
        }}
      >
        <div style={styles.drawerHeader}>
          <div>
            <div style={styles.eyebrow}>Cart</div>
            <h3 style={{ margin: "6px 0 0", fontSize: 30, letterSpacing: "-0.03em" }}>
              Your order
            </h3>
          </div>
          <button style={styles.whiteButton} onClick={() => setCartOpen(false)}>
            Close
          </button>
        </div>

        <div style={styles.drawerBody}>
          {cart.length === 0 ? (
            <div
              style={{
                borderRadius: 26,
                background: "#f5f5f7",
                padding: "32px 24px",
                textAlign: "center",
                color: "rgba(0,0,0,0.5)",
              }}
            >
              Your cart is empty.
            </div>
          ) : (
            cart.map((item) => (
              <div key={item.id} style={styles.drawerItem}>
                <div style={styles.drawerItemRow}>
                  <div style={styles.thumb}>
                    <img
                      src={item.image}
                      alt={item.name}
                      style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                  </div>

                  <div style={{ minWidth: 0, flex: 1 }}>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        gap: 12,
                        alignItems: "flex-start",
                      }}
                    >
                      <div>
                        <div style={{ fontSize: 20, fontWeight: 700, letterSpacing: "-0.02em" }}>
                          {item.name}
                        </div>
                        <div style={{ marginTop: 4, fontSize: 14, color: "rgba(0,0,0,0.45)" }}>
                          {item.colorName}
                        </div>
                      </div>
                      <div style={{ fontSize: 14, fontWeight: 600 }}>
                        ${(item.totalQty * item.price).toFixed(2)}
                      </div>
                    </div>

                    <div style={{ marginTop: 12, fontSize: 14, lineHeight: 1.6, color: "rgba(0,0,0,0.56)" }}>
                      {Object.entries(item.sizes)
                        .filter(([, qty]) => qty > 0)
                        .map(([size, qty]) => `${size} (${qty})`)
                        .join(" · ")}
                    </div>

                    <div
                      style={{
                        marginTop: 12,
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <div style={{ fontSize: 14, color: "rgba(0,0,0,0.45)" }}>
                        {item.totalQty} item{item.totalQty === 1 ? "" : "s"} × ${item.price}
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        style={{
                          border: "none",
                          background: "transparent",
                          fontSize: 14,
                          fontWeight: 600,
                          color: "rgba(0,0,0,0.6)",
                          cursor: "pointer",
                        }}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        <div style={styles.drawerFooter}>
          <div style={styles.subtotalRow}>
            <span style={{ fontSize: 14, color: "rgba(0,0,0,0.45)" }}>Estimated subtotal</span>
            <span style={{ fontSize: 32, fontWeight: 700, letterSpacing: "-0.03em" }}>
              ${subtotal.toFixed(2)}
            </span>
          </div>

          <button style={{ ...styles.blackButton, width: "100%" }}>Request quote</button>
        </div>
      </aside>
    </div>
  );
}
