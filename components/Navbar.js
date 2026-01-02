
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="bg-slate-950 text-white px-8 py-4 flex items-center justify-between">
      <Image src="/logo.svg" alt="Zentrix" width={140} height={40} />
      <div className="flex gap-6 text-sm">
        <Link href="/" className="hover:text-slate-300">Home</Link>
        <Link href="/shop" className="hover:text-slate-300">Shop</Link>
        <Link href="/cart" className="hover:text-slate-300">Warenkorb</Link>
        <Link href="/contact" className="hover:text-slate-300">Kontakt</Link>
      </div>
    </nav>
  );
}
