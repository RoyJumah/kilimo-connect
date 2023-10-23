"use client";

import { useRouter } from "next/navigation";
import { createContext, useState, useContext } from "react";

const Context = createContext();

const Provider = ({ children }) => {
  const router = useRouter();

  const [isItemAdded, setIsItemAdded] = useState(false);

  const getCart = () => {
    let cart = [];
    if (typeof localStorage !== "undefined") {
      cart = JSON.parse(localStorage.getItem("cart")) || [];
    }
    return cart;
  };

  const addToCart = (product) => {
    let cart = [];
    if (typeof localStorage !== "undefined") {
      cart = JSON.parse(localStorage.getItem("cart")) || [];
    }
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));

    setIsItemAdded(true);
  };

  const removeFromCart = (product) => {
    let cart = getCart();
    cart = cart.filter((item) => item.product_id !== product?.product_id);
    localStorage.setItem("cart", JSON.stringify(cart));
    // isItemAddedToCart(product);

    setIsItemAdded(false);
  };

  const increaseItemQuantity = (product) => {
    let cart = [];
    if (typeof localStorage !== "undefined") {
      cart = JSON.parse(localStorage.getItem("cart")) || [];
    }

    const item = cart.find((item) => item.product_id === product?.product_id);
    item.quantity += 1;
    item.totalPrice = item.quantity * item.price;
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  const decreaseItemQuantity = (product) => {
    let cart = [];
    if (typeof localStorage !== "undefined") {
      cart = JSON.parse(localStorage.getItem("cart")) || [];
    }

    const item = cart.find((item) => item.product_id === product?.product_id);
    item.quantity -= 1;
    item.totalPrice = item.quantity * item.price;
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  const cartCount = () => {
    let cart = [];
    if (typeof localStorage !== "undefined") {
      cart = JSON.parse(localStorage.getItem("cart")) || [];
    }
    return cart.length;
  };

  const getCurrentQuantityById = (id) => {
    let cart = [];
    if (typeof localStorage !== "undefined") {
      cart = JSON.parse(localStorage.getItem("cart")) || [];
    }

    const item = cart.find((item) => item.product_id === id)?.quantity ?? 0;
    return item.quantity;
  };

  const cartTotal = () => {
    let total = 0;
    let cart = [];
    if (typeof localStorage !== "undefined") {
      cart = JSON.parse(localStorage.getItem("cart")) || [];
    }
    for (let i = 0; i < cart.length; i++) {
      const element = cart[i];
      total += element.price;
    }

    return total;
  };

  const clearCart = () => {
    localStorage.removeItem("cart");
    router.refresh();
  };

  const exposed = {
    isItemAdded,

    getCart,
    addToCart,
    removeFromCart,
    increaseItemQuantity,
    decreaseItemQuantity,
    getCurrentQuantityById,
    cartCount,
    cartTotal,
    clearCart,
  };

  return <Context.Provider value={exposed}>{children}</Context.Provider>;
};

export const useCart = () => useContext(Context);

export default Provider;
