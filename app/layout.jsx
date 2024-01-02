"use client";
import { Provider } from "react-redux";

import Footer from "./_components/Footer";
import NavBar from "./_components/NavBar";
import "./globals.css";
import TanstackProvider from "./_providers/TanstackProvider";
import store from "./_redux/store";
import { Toaster } from "react-hot-toast";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title>Kilimo Connect</title>
        <meta
          name="description"
          content="Fresh Produce, Local Farming Solutions"
        />
        <meta name="author" content="Kilimo-Connect" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body id="root">
        <TanstackProvider>
          <Provider store={store}>
            <div className="grid min-h-screen grid-rows-[auto,1fr,auto]">
              <NavBar />
              <main>{children}</main>
              <Footer />
            </div>
          </Provider>
          <Toaster
            position="bottom-right"
            gutter={12}
            containerStyle={{ margin: "8px" }}
            toastOptions={{
              success: {
                duration: 3000,
              },
              error: {
                duration: 5000,
              },
              style: {
                fontSize: "16px",
                maxWidth: "500px",
                padding: "16px 24px",
                backgroundColor: "#f8f9fa",
                color: "#495057",
              },
            }}
          />
        </TanstackProvider>
      </body>
    </html>
  );
}
