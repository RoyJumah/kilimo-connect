import "./globals.css";

export const metadata = {
  title: "Kilimo-Connect",
  description: "Fresh Produce, Local Farming Solutions",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main className="mx-auto max-w-6xl">{children}</main>
      </body>
    </html>
  );
}
