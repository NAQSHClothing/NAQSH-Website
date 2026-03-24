import { useMemo, useState } from "react";

const SIZES = ["S", "M", "L", "XL", "XXL"];

const PRODUCTS = [
  {
    id: "tshirt",
    name: "T-Shirt",
    subtitle: "Soft everyday staple",
    price: 22,
    description:
      "A clean everyday essential with an easy silhouette and versatile feel.",
    defaultHex: "#F5F3EE",
  },
  {
    id: "hoodie",
    name: "Hoodie",
    subtitle: "Heavyweight and elevated",
    price: 38,
    description:
      "A thicker, more premium option that feels substantial and polished.",
    defaultHex: "#ECE4D8",
  },
  {
    id: "crewneck",
    name: "Crewneck",
    subtitle: "Classic custom essential",
    price: 34,
    description:
      "A versatile choice for student organizations, teams, events, and brands.",
    defaultHex: "#EEE7DB",
  },
  {
    id: "quarterzip",
    name: "Quarter Zip",
    subtitle: "Polished and versatile",
    price: 42,
    description:
      "A more refined silhouette with a cleaner, elevated custom look.",
    defaultHex: "#DDD5C8",
  },
];

function isValidHex(value) {
  return /^#([0-9A-Fa-f]{6})$/.test(value);
}

function createInitialQuantities() {
  const data = {};
  for (const product of PRODUCTS) {
    data[product.id] = {};
    for (const size of SIZES) data[product.id][size] = 0;
  }
  return data;
}

function createInitialHexes() {
  const data = {};
  for (const product of PRODUCTS) data[product.id] = product.defaultHex;
  return data;
}

function ProductMockup({ type, color }) {
  const safeColor = isValidHex(color) ? color : "#DDDDDD";

  const common = {
    width: "100%",
    height: "100%",
    viewBox: "0 0 420 520",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
  };

  if (type === "tshirt") {
    return (
      <svg {...common}>
        <rect x="0" y="0" width="420" height="520" rx="36" fill="#F3F3F3" />
        <path
          d="M136 110L165 78C176 66 191 60 210 60C229 60 244 66 255 78L284 110L330 132L306 184L278 170V412C278 426 266 438 252 438H168C154 438 142 426 142 412V170L114 184L90 132L136 110Z"
          fill={safeColor}
        />
        <path
          d="M180 84C188 74 198 70 210 70C222 70 232 74 240 84L248 96C237 102 225 105 210 105C195 105 183 102 172 96L180 84Z"
          fill="#E8E8E8"
          opacity="0.55"
        />
        <path
          d="M170 97C181 104 194 108 210 108C226 108 239 104 250 97"
          stroke="#000"
          strokeOpacity="0.12"
          strokeWidth="8"
          strokeLinecap="round"
        />
        <path
          d="M142 170L114 184L90 132L136 110"
          stroke="#000"
          strokeOpacity="0.08"
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M278 170L306 184L330 132L284 110"
          stroke="#000"
          strokeOpacity="0.08"
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (type === "hoodie") {
    return (
      <svg {...common}>
        <rect x="0" y="0" width="420" height="520" rx="36" fill="#F3F3F3" />
        <path
          d="M150 100C156 70 180 50 210 50C240 50 264 70 270 100L296 120L334 146L312 205L286 192V414C286 428 274 440 260 440H160C146 440 134 428 134 414V192L108 205L86 146L124 120L150 100Z"
          fill={safeColor}
        />
        <path
          d="M168 108C171 81 186 66 210 66C234 66 249 81 252 108L240 136C231 146 222 152 210 152C198 152 189 146 180 136L168 108Z"
          fill="#EAEAEA"
          opacity="0.55"
        />
        <path
          d="M174 180H246"
          stroke="#000"
          strokeOpacity="0.1"
          strokeWidth="8"
          strokeLinecap="round"
        />
        <rect
          x="167"
          y="260"
          width="86"
          height="44"
          rx="18"
          fill="#000"
          fillOpacity="0.08"
        />
        <path
          d="M192 118L186 160M228 118L234 160"
          stroke="#000"
          strokeOpacity="0.12"
          strokeWidth="4"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (type === "crewneck") {
    return (
      <svg {...common}>
        <rect x="0" y="0" width="420" height="520" rx="36" fill="#F3F3F3" />
        <path
          d="M136 112L164 82C176 70 192 64 210 64C228 64 244 70 256 82L284 112L328 136L304 194L278 180V414C278 428 266 440 252 440H168C154 440 142 428 142 414V180L116 194L92 136L136 112Z"
          fill={safeColor}
        />
        <ellipse cx="210" cy="96" rx="38" ry="20" fill="#E9E9E9" opacity="0.52" />
        <path
          d="M174 98C184 108 195 112 210 112C225 112 236 108 246 98"
          stroke="#000"
          strokeOpacity="0.12"
          strokeWidth="8"
          strokeLinecap="round"
        />
        <rect x="142" y="408" width="136" height="20" rx="10" fill="#000" fillOpacity="0.06" />
      </svg>
    );
  }

  return (
    <svg {...common}>
      <rect x="0" y="0" width="420" height="520" rx="36" fill="#F3F3F3" />
      <path
        d="M136 112L164 84C177 70 191 64 210 64C229 64 243 70 256 84L284 112L328 138L304 198L280 186V414C280 428 268 440 254 440H166C152 440 140 428 140 414V186L116 198L92 138L136 112Z"
        fill={safeColor}
      />
      <path
        d="M180 88C188 78 198 74 210 74C222 74 232 78 240 88L248 98H172L180 88Z"
        fill="#E9E9E9"
        opacity="0.55"
      />
      <rect x="206" y="94" width="8" height="118" rx="4" fill="#111111" fillOpacity="0.16" />
      <rect x="198" y="146" width="24" height="12" rx="6" fill="#111111" fillOpacity="0.18" />
      <path
        d="M172 98H248"
        stroke="#000"
        strokeOpacity="0.1"
        strokeWidth="8"
        strokeLinecap="round"
      />
    </svg>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    background: "#F5F5F7",
    color: "#111111",
    fontFamily:
      'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
  },
  header: {
    position: "sticky",
    top: 0,
    zIndex: 30,
    backdropFilter: "blur(14px)",
    background: "rgba(255,255,255,0.82)",
    borderBottom: "1px solid rgba(0,0,0,0.05)",
  },
  container: {
    maxWidth: 1280,
    margin: "0 auto",
    padding: "0 24px",
  },
  nav: {
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
  blackBtn: {
    border: "none",
    borderRadius: 999,
    background: "#111111",
    color: "#FFFFFF",
    padding: "14px 24px",
    fontSize: 14,
    fontWeight: 600,
    cursor: "pointer",
  },
  whiteBtn: {
    border: "none",
    borderRadius: 999,
    background: "#FFFFFF",
    color: "#111111",
    padding: "14px 24px",
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
    padding: "56px 0 92px",
  },
  eyebrow: {
    fontSize: 12,
    fontWeight: 700,
    letterSpacing: "0.28em",
    textTransform: "uppercase",
    color: "rgba(0,0,0,0.42)",
  },
  heroTitle: {
    margin: "16px 0 0",
    fontSize: "clamp(44px, 7vw, 84px)",
    lineHeight: 1.02,
    letterSpacing: "-0.05em",
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
    borderRadius: 40,
    background: "#FFFFFF",
    padding: 24,
    boxShadow: "0 18px 60px rgba(0,0,0,0.07)",
  },
  heroInner: {
    overflow: "hidden",
    borderRadius: 30,
    background: "linear-gradient(180deg, #fafafa 0%, #eeeeee 100%)",
    aspectRatio: "4 / 5",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 22,
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
  grid: {
    display: "grid",
    gap: 32,
    marginTop: 52,
  },
  card: {
    display: "grid",
    gridTemplateColumns: "1.05fr 1fr",
    gap: 32,
    borderRadius: 38,
    background: "#FFFFFF",
    padding: 28,
    boxShadow: "0 16px 48px rgba(0,0,0,0.05)",
  },
  mockShell: {
    borderRadius: 30,
    background: "#F3F3F3",
    padding: 18,
  },
  mockInner: {
    borderRadius: 24,
    overflow: "hidden",
    aspectRatio: "4 / 5",
  },
  productHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    gap: 16,
    flexWrap: "wrap",
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
  price: {
    background: "#F4F4F4",
    borderRadius: 999,
    padding: "10px 16px",
    fontSize: 14,
    fontWeight: 600,
    color: "rgba(0,0,0,0.68)",
  },
  blockTitle: {
    marginTop: 34,
    marginBottom: 12,
    fontSize: 12,
    fontWeight: 700,
    textTransform: "uppercase",
    letterSpacing: "0.28em",
    color: "rgba(0,0,0,0.40)",
  },
  hexRow: {
    display: "flex",
    gap: 12,
    alignItems: "center",
    flexWrap: "wrap",
  },
  swatch: {
    width: 42,
    height: 42,
    borderRadius: "50%",
    border: "1px solid rgba(0,0,0,0.08)",
    flexShrink: 0,
  },
  hexInput: {
    width: 170,
    border: "1px solid rgba(0,0,0,0.08)",
    borderRadius: 999,
    background: "#FFFFFF",
    padding: "12px 16px",
    fontSize: 14,
    outline: "none",
  },
  helper: {
    fontSize: 13,
    color: "rgba(0,0,0,0.45)",
  },
  qtyGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
    gap: 12,
    maxWidth: 440,
  },
  qtyCard: {
    borderRadius: 22,
    background: "#F6F6F6",
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
    background: "#FFFFFF",
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
  smallText: {
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
    background: "#FFFFFF",
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
    background: "#F7F7F8",
    padding: 16,
  },
  drawerRow: {
    display: "flex",
    gap: 14,
  },
  thumb: {
    width: 82,
    height: 108,
    borderRadius: 18,
    overflow: "hidden",
    background: "#FFFFFF",
    flexShrink: 0,
  },
  drawerFooter: {
    borderTop: "1px solid rgba(0,0,0,0.05)",
    padding: 24,
  },
};

export default function App() {
  const initialQuantities = useMemo(() => createInitialQuantities(), []);
  const initialHexes = useMemo(() => createInitialHexes(), []);

  const [hexByProduct, setHexByProduct] = useState(initialHexes);
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

  function updateHex(productId, value) {
    setHexByProduct((prev) => ({
      ...prev,
      [productId]: value,
    }));
  }

  function addToCart(product) {
    const hex = isValidHex(hexByProduct[product.id])
      ? hexByProduct[product.id]
      : product.defaultHex;

    const sizeMap = quantities[product.id];
    const totalQty = Object.values(sizeMap).reduce((sum, qty) => sum + qty, 0);

    if (totalQty === 0) return;

    setCart((prev) => [
      ...prev,
      {
        id: `${product.id}-${Date.now()}`,
        productId: product.id,
        name: product.name,
        price: product.price,
        hex,
        sizes: { ...sizeMap },
        totalQty,
      },
    ]);

    setCartOpen(true);

    setQuantities((prev) => ({
      ...prev,
      [product.id]: Object.fromEntries(SIZES.map((s) => [s, 0])),
    }));
  }

  function removeFromCart(id) {
    setCart((prev) => prev.filter((item) => item.id !== id));
  }

  const cartCount = cart.reduce((sum, item) => sum + item.totalQty, 0);
  const subtotal = cart.reduce((sum, item) => sum + item.totalQty * item.price, 0);

  return (
    <div style={styles.page}>
      <header style={styles.header}>
        <div style={styles.container}>
          <div style={styles.nav}>
            <div style={styles.logo}>NAQSH</div>
            <button style={styles.blackBtn} onClick={() => setCartOpen(true)}>
              Cart ({cartCount})
            </button>
          </div>
        </div>
      </header>

      <section style={{ ...styles.container, ...styles.hero }}>
        <div>
          <div style={styles.eyebrow}>Custom apparel, simplified</div>
          <h1 style={styles.heroTitle}>Build your full order in one clean flow.</h1>
          <p style={styles.heroText}>
            Choose multiple products, enter your own hex color, set quantities by
            size, and add everything to one cart.
          </p>

          <div style={styles.heroActions}>
            <a href="#products" style={{ textDecoration: "none" }}>
              <button style={styles.blackBtn}>Start building</button>
            </a>
            <button style={styles.whiteBtn} onClick={() => setCartOpen(true)}>
              View cart
            </button>
          </div>
        </div>

        <div style={styles.heroCard}>
          <div style={styles.heroInner}>
            <ProductMockup type="hoodie" color="#ECE4D8" />
          </div>
        </div>
      </section>

      <section id="products" style={{ ...styles.container, ...styles.section }}>
        <div style={{ maxWidth: 760 }}>
          <div style={styles.eyebrow}>Products</div>
          <h2 style={styles.sectionTitle}>Choose the pieces you want.</h2>
          <p style={styles.sectionText}>
            Every product preview updates live when the hex color changes.
          </p>
        </div>

        <div style={styles.grid}>
          {PRODUCTS.map((product) => {
            const currentHex = hexByProduct[product.id];
            const safeHex = isValidHex(currentHex) ? currentHex : product.defaultHex;
            const selectedQty = Object.values(quantities[product.id]).reduce(
              (sum, qty) => sum + qty,
              0
            );

            return (
              <div key={product.id} style={styles.card}>
                <div style={styles.mockShell}>
                  <div style={styles.mockInner}>
                    <ProductMockup type={product.id} color={safeHex} />
                  </div>
                </div>

                <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
                  <div style={styles.productHeader}>
                    <div style={{ maxWidth: 560 }}>
                      <p style={styles.productSubtitle}>{product.subtitle}</p>
                      <h3 style={styles.productTitle}>{product.name}</h3>
                      <p style={styles.productDesc}>{product.description}</p>
                    </div>
                    <div style={styles.price}>from ${product.price}</div>
                  </div>

                  <div style={styles.blockTitle}>Color hex</div>
                  <div style={styles.hexRow}>
                    <div style={{ ...styles.swatch, background: safeHex }} />
                    <input
                      value={currentHex}
                      onChange={(e) => updateHex(product.id, e.target.value)}
                      placeholder="#F5F5F5"
                      style={styles.hexInput}
                    />
                    <span style={styles.helper}>Use a 6-digit hex like #1F2A44</span>
                  </div>

                  <div style={styles.blockTitle}>Quantities by size</div>
                  <div style={styles.qtyGrid}>
                    {SIZES.map((size) => (
                      <label key={size} style={styles.qtyCard}>
                        <span style={styles.qtyLabel}>{size}</span>
                        <input
                          type="number"
                          min="0"
                          value={quantities[product.id][size]}
                          onChange={(e) => updateQuantity(product.id, size, e.target.value)}
                          style={styles.qtyInput}
                        />
                      </label>
                    ))}
                  </div>

                  <div style={styles.addRow}>
                    <button style={styles.blackBtn} onClick={() => addToCart(product)}>
                      Add to cart
                    </button>
                    <p style={styles.smallText}>{selectedQty} selected</p>
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
          <button style={styles.whiteBtn} onClick={() => setCartOpen(false)}>
            Close
          </button>
        </div>

        <div style={styles.drawerBody}>
          {cart.length === 0 ? (
            <div
              style={{
                borderRadius: 26,
                background: "#F5F5F7",
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
                <div style={styles.drawerRow}>
                  <div style={styles.thumb}>
                    <ProductMockup type={item.productId} color={item.hex} />
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
                          {item.hex}
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
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 18 }}>
            <span style={{ fontSize: 14, color: "rgba(0,0,0,0.45)" }}>Estimated subtotal</span>
            <span style={{ fontSize: 32, fontWeight: 700, letterSpacing: "-0.03em" }}>
              ${subtotal.toFixed(2)}
            </span>
          </div>
          <button style={{ ...styles.blackBtn, width: "100%" }}>Request quote</button>
        </div>
      </aside>
    </div>
  );
}
