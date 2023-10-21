import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import CartProvider from "./context/cart";
import "./globals.css";

export const metadata = {
  title: "Kilimo-Connect",
  description: "Fresh Produce, Local Farming Solutions",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body id="root">
        <CartProvider>
          <div className="grid grid-rows-[auto_1fr_auto]">
            <NavBar />
            <main className="mx-auto max-w-6xl p-6">{children}</main>
            <Footer />
          </div>
        </CartProvider>
      </body>
    </html>
  );
}
