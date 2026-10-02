"use client";

import Provider from "./Provider";

export default function ToastlyProvider({ children } : { children?: React.ReactNode }) {
    return (
        <div className="toastly">
            <Provider />
            {children}
        </div>
    );
}