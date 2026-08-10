"use client";

import { useCart } from "@/context/CartContext";

function Summary() {
    const { cartItems } = useCart();

    const subtotal = cartItems.reduce((total, item) => {
        return total + item.price * item.quantity;
    }, 0);

    const delivery = (cartItems.length && 4) || 0;
    const total = subtotal + delivery;

    return (
        <aside className="h-fit rounded-2xl border border-zinc-800 bg-zinc-900 p-6 lg:sticky lg:top-24">
            <h2 className="text-xl font-bold">Order Summary</h2>

            <div className="mt-6 space-y-4 text-sm">
                <div className="flex justify-between">
                    <span className="text-zinc-500">Subtotal</span>

                    <span> ${subtotal.toFixed(2)}</span>
                </div>

                <div className="flex justify-between">
                    <span className="text-zinc-500">Delivery</span>
                    <span>${delivery.toFixed(2)}</span>{" "}
                </div>

                <div className="border-t border-zinc-800 pt-4">
                    <div className="flex items-center justify-between">
                        <span className="font-semibold">Total</span>

                        <span className="text-2xl font-black text-orange-500">
                            ${total.toFixed(2)}
                        </span>
                    </div>
                </div>
            </div>

            <button className="mt-6 flex w-full items-center justify-center rounded-xl bg-orange-500 px-5 py-3 font-semibold transition hover:scale-[1.02] hover:bg-orange-600">
                Proceed to Checkout
            </button>
        </aside>
    );
}

export default Summary;
