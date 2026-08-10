import CartInfo from "@/Components/Cart/CartInfo";
import Summary from "@/Components/Cart/Summary";

function Cart() {
    return (
        <main className="mt-20 min-h-screen bg-zinc-950 px-5 py-10 text-white">
            <div className="mx-auto max-w-6xl">
                {/* Header */}
                <div className="mb-10">
                    <p className="mb-2 text-sm font-medium tracking-wider text-orange-500 uppercase">
                        Your Order
                    </p>

                    <h1 className="text-4xl font-black md:text-5xl">
                        Shopping Cart
                    </h1>

                    <p className="mt-3 text-zinc-500">
                        Review your selected meals before checkout.
                    </p>
                </div>

                <div className="grid gap-8 lg:grid-cols-[1fr_360px]">
                    <CartInfo />
                    <Summary />
                </div>
            </div>
        </main>
    );
}

export default Cart;
