import "./globals.css";
import Navbar from "../components/Navbar";

export const metadata = {
  title: "Zentrix System",
  description: "Next.js Vercel Ready",
};

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body>
        <Navbar />
        <main style={{padding:"2rem"}}>
          {children}
        </main>
        <footer style={{padding:"1rem", borderTop:"1px solid #ddd"}}>
          © 2026 Zentrix System
        </footer>
      </body>
    </html>
  );
}