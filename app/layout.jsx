import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import "./globals.css";

export const metadata = {
  title: "Kilimo-Connect",
  description: "Fresh Produce, Local Farming Solutions",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body id="root">
        <div className="grid grid-rows-[auto_1fr_auto]">
          <NavBar />
          <main className="mx-auto max-w-6xl p-6">{children}</main>

          <Footer />
        </div>
      </body>
    </html>
  );
}
