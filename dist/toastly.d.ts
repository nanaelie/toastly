import { AlertEvent, ConfirmEvent, ToastEvent } from "./types";
export declare const toastly: {
    add: (alert: ToastEvent) => void;
    dismiss: (id: string) => void;
    confirm: (confirm: ConfirmEvent) => void;
    alert: (alert: AlertEvent) => void;
};
