
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
    <div className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-10">Shop</h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
        {products.map(p => (
          <div key={p.id}
            className="bg-white rounded-3xl shadow hover:shadow-2xl transition p-6 flex flex-col">
            <div className="h-36 bg-slate-100 rounded-xl mb-4 flex items-center justify-center text-slate-400">
              Produktbild
            </div>
            <h2 className="text-lg font-semibold">{p.name}</h2>
            <p className="text-slate-600 mb-6">{p.price} €</p>
            <button
              onClick={() => addToCart(p)}
              className="mt-auto bg-slate-900 text-white py-3 rounded-xl hover:bg-slate-700 transition">
              In den Warenkorb
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
