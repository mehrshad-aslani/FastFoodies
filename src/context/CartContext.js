"use client";

import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        const savedCart = localStorage.getItem("cart");

        if (savedCart) {
            setCartItems(JSON.parse(savedCart));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cartItems));
    }, [cartItems]);

    function addToCart(recipe) {
        setCartItems((currentItems) => {
            const existingItem = currentItems.find(
                (item) => item.id === recipe.id,
            );

            if (existingItem) {
                return currentItems.map((item) =>
                    item.id === recipe.id
                        ? {
                              ...item,
                              quantity: item.quantity + 1,
                          }
                        : item,
                );
            }

            return [
                ...currentItems,
                {
                    id: recipe.id,
                    title: recipe.title,
                    image: recipe.image,
                    price: recipe.price,
                    quantity: 1,
                },
            ];
        });
    }

    function increaseQuantity(id) {
        setCartItems((currentItems) => {
            return currentItems.map((item) =>
                item.id === id
                    ? {
                          ...item,
                          quantity: item.quantity + 1,
                      }
                    : item,
            );
        });
    }

    function decreaseQuantity(id) {
        setCartItems((currentItems) => {
            return currentItems
                .map((item) =>
                    item.id === id
                        ? {
                              ...item,
                              quantity: item.quantity - 1,
                          }
                        : item,
                )
                .filter((item) => item.quantity > 0);
        });
    }

    function removeFromCart(id) {
        setCartItems((currentItems) => {
            return currentItems.filter((item) => item.id !== id);
        });
    }

    return (
        <CartContext.Provider
            value={{
                cartItems,
                addToCart,
                increaseQuantity,
                decreaseQuantity,
                removeFromCart,
            }}
        >
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    return useContext(CartContext);
}
