import { ToastlyProvider, toastly } from "../src";
// import "../src/toastly.css";

export default function App() {
    return (
        <div style={{ width: '100vw', padding: 30, height: '100vh', backgroundColor: '#fafafa' }}>
            <ToastlyProvider />
            <main style={{ display: 'flex', gap: 4 }}>
                <button style={{ width: 100, height: 30, borderRadius: 8, borderWidth: 1, backgroundColor: '#0f0' }}
                    onClick={() =>
                        toastly.add({
                            message: "Hello from Toastly Hello from Toastly",
                            variant: "success",
                            allowDismiss: true,
                        })
                    }
                >
                    Success
                </button>

                <button style={{ width: 100, height: 30, borderRadius: 8, borderWidth: 1, backgroundColor: '#eeff00' }}
                    onClick={() =>
                        toastly.add({
                            message: "Hello from Toastly Hello from Toastly",
                            variant: "warning",
                            allowDismiss: true,
                        })
                    }
                >
                    Warning
                </button>

                <button style={{ width: 100, height: 30, borderRadius: 8, borderWidth: 1, backgroundColor: '#f00' }}
                    onClick={() =>
                        toastly.add({
                            message: "Something went wrong",
                            variant: "error",
                            allowDismiss: true,
                        })
                    }
                >
                    Error
                </button>
                <button style={{ width: 100, height: 30, borderRadius: 8, borderWidth: 1, backgroundColor: '#fafafa' }}
                    onClick={() =>
                        toastly.add({
                            message: "Hello from Toastly Hello from Toastly",
                            variant: "info",
                            allowDismiss: true,
                        })
                    }
                >
                    Info
                </button>
                <button style={{ width: 100, height: 30, borderRadius: 8, borderWidth: 1, backgroundColor: '#fafafa' }}
                    onClick={() =>
                        toastly.add({
                            message: "Hello from Toastly Hello from Toastly",
                            allowDismiss: true,
                            loading: true,
                            autoDismissIn: 3_000
                        })
                    }
                >
                    Loading
                </button>
            </main>
        </div>
    );
}