"use client";

import { useCart } from "@/context/CartContext";

function CartInfo() {
    const { cartItems, increaseQuantity, decreaseQuantity, removeFromCart } =
        useCart();

    return (
        <div className="space-y-4">
            {!cartItems.length && (
                <p className="rounded-2xl bg-orange-400 py-10 text-center text-2xl capitalize">
                    there is no order here!!!
                </p>
            )}
            {cartItems.map((item) => (
                <div
                    key={item.id}
                    className="flex flex-col gap-5 rounded-2xl border border-zinc-800 bg-zinc-900 p-4 sm:flex-row sm:items-center"
                >
                    <div className="h-28 w-full shrink-0 overflow-hidden rounded-xl sm:w-28">
                        <img
                            src={item.image}
                            alt="Cheese Burger"
                            className="h-full w-full object-cover"
                        />
                    </div>

                    {/* Info */}
                    <div className="flex-1">
                        <div className="flex items-start justify-between gap-4">
                            <h2 className="text-lg font-bold">{item.title}</h2>

                            <button
                                className="cursor-pointer text-sm text-zinc-500 transition hover:text-red-500"
                                onClick={() => removeFromCart(item.id)}
                            >
                                Remove
                            </button>
                        </div>

                        {/* Bottom */}
                        <div className="mt-5 flex items-center justify-between">
                            {/* Quantity */}
                            <div className="flex items-center gap-3 rounded-xl border border-zinc-700 bg-zinc-950 px-2 py-1">
                                <button
                                    className="flex h-7 w-7 items-center justify-center rounded-lg text-lg transition hover:bg-zinc-800 hover:text-orange-500"
                                    onClick={() => decreaseQuantity(item.id)}
                                >
                                    −
                                </button>

                                <span className="min-w-5 text-center text-sm font-semibold">
                                    {item.quantity}
                                </span>

                                <button
                                    className="flex h-7 w-7 items-center justify-center rounded-lg text-lg transition hover:bg-zinc-800 hover:text-orange-500"
                                    onClick={() => increaseQuantity(item.id)}
                                >
                                    +
                                </button>
                            </div>

                            {/* Price */}
                            <div className="flex flex-col items-end">
                                <span className="text-lg font-bold text-orange-500">
                                    ${(item.price * item.quantity).toFixed(2)}
                                </span>
                                <span className="text-xs text-zinc-500">
                                    ${item.price} each
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default CartInfo;
