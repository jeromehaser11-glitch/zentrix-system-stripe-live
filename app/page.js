
import Link from "next/link";

export default function Home() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white flex items-center">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h1 className="text-5xl font-bold mb-6">Zentrix System</h1>
        <p className="text-xl text-slate-300 mb-10">
          Moderne Technik. Digitale Services. Einfach online bestellen.
        </p>
        <div className="flex justify-center gap-6">
          <Link href="/shop"
            className="bg-white text-slate-900 px-8 py-4 rounded-2xl font-semibold hover:bg-slate-200 transition">
            Zum Shop
          </Link>
          <Link href="/contact"
            className="border border-white px-8 py-4 rounded-2xl hover:bg-white hover:text-slate-900 transition">
            Kontakt
          </Link>
        </div>
      </div>
    </section>
  );
}
