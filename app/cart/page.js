"use client";
import { useEffect, useState } from "react";

export default function Cart() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cart") || "[]"));
  }, []);

  const total = cart.reduce((sum, p) => sum + p.price, 0);

  async function checkout() {
    const res = await fetch("/api/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items: cart })
    });
    const data = await res.json();
    window.location.href = data.url;
  }

  return (
    <div className="max-w-xl mx-auto">
      <h1 className="text-2xl mb-4">Warenkorb</h1>
      {cart.map((p,i) => (
        <div key={i} className="flex justify-between border-b py-2">
          <span>{p.name}</span>
          <span>{p.price} €</span>
        </div>
      ))}
      <div className="mt-4 font-bold">Gesamt: {total} €</div>
      <button
        onClick={checkout}
        className="mt-4 bg-black text-white px-4 py-2 rounded"
      >
        Jetzt bezahlen
      </button>
    </div>
  );
}