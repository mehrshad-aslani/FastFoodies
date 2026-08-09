import { HiExclamationTriangle } from "react-icons/hi2";

function ErrorComponents({ message }) {
    return (
        <div className="mx-auto flex max-w-lg items-center gap-3 rounded-xl border border-red-500/30 bg-red-500/10 p-5">
            <HiExclamationTriangle className="text-3xl text-red-500" />

            <div>
                <h3 className="font-semibold text-red-500">
                    Something went wrong
                </h3>

                <p className="text-sm text-zinc-300">{message}</p>
            </div>
        </div>
    );
}

export default ErrorComponents;
