"use client";
import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: e.target.name.value,
        email: e.target.email.value,
        message: e.target.message.value
      })
    });
    setStatus(res.ok ? "Nachricht gesendet!" : "Fehler beim Senden");
  }

  return (
    <>
      <h1>Kontakt</h1>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Name" required /><br/>
        <input name="email" type="email" placeholder="E-Mail" required /><br/>
        <textarea name="message" placeholder="Nachricht" required /><br/>
        <button type="submit">Senden</button>
      </form>
      <p>{status}</p>
    </>
  );
}