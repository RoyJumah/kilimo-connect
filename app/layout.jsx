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
        <NavBar />

        <main className="mx-auto max-w-7xl p-6">{children}</main>
      </body>
    </html>
  );
}
