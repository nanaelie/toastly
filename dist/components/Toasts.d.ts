import type { Toast } from "../types";
interface ToastProps {
    toasts: Toast[];
    onDismiss?: (id: string) => void;
}
export default function Toasts({ toasts, onDismiss }: ToastProps): import("react").JSX.Element;
export {};
