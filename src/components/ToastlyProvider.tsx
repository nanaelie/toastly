"use client";

import { ToastlyProviderProps } from "../types";
import Provider from "./Provider";

export default function ToastlyProvider({ children, position, duration } : ToastlyProviderProps) {
    return (
        <div className="toastly">
            <Provider position={position} duration={duration} />
            {children}
        </div>
    );
}