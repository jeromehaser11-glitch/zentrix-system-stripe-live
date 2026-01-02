import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="p-4 border-b flex gap-4">
      <Link href="/">Home</Link>
      <Link href="/shop">Shop</Link>
      <Link href="/cart">Warenkorb</Link>
      <Link href="/repair">Reparatur</Link>
      <Link href="/contact">Kontakt</Link>
      <Link href="/admin">Admin</Link>
    </nav>
  );
}