"use client";
const products = [
  { id: 1, name: "Testprodukt A", price: 1 },
  { id: 2, name: "Testprodukt B", price: 1 },
  { id: 3, name: "Testprodukt C", price: 1 },
];

export default function Shop() {
  function addToCart(product) {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Produkt im Warenkorb");
  }

  return (
    <>
      <h1>Shop</h1>
      <ul>
        {products.map(p => (
          <li key={p.id}>
            {p.name} – {p.price} €
            <button onClick={() => addToCart(p)} style={{marginLeft:"1rem"}}>
              In den Warenkorb
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}