import { ToastlyProvider, toastly } from "../src";
// import "../src/toastly.css";

export default function App() {
    return (
        <div style={{ width: '100vw', padding: 30, height: '100vh', backgroundColor: '#0F0F0F' }}>
            <ToastlyProvider />
            <main>
                <button style={{ width: 100, height: 30, backgroundColor: '#eeff00' }}
                    onClick={() =>
                        toastly.add({
                            message: "Hello from Toastly Hello from Toastly",
                            variant: "success",
                            autoDismissIn: 30000,
                            allowDismiss: true,
                        })
                    }
                >
                    Success
                </button>

                <button
                    onClick={() =>
                        toastly.add({
                            message: "Something went wrong",
                            variant: "error"
                        })
                    }
                >
                    Error
                </button>
            </main>
        </div>
    );
}