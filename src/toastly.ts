import { AlertEvent, ConfirmEvent, ToastEvent } from "./types";

export const toastly = {
    add: (alert: ToastEvent) => {
        window.dispatchEvent(
            new CustomEvent("toastly:add-alert", {
                detail: alert,
            })
        );
    },

    dismiss: (id: string) => {
        window.dispatchEvent(
            new CustomEvent("toastly:dismiss-alert", {
                detail: { id },
            })
        );
    },

    confirm: (confirm: ConfirmEvent) => {
        window.dispatchEvent(
            new CustomEvent("toastly:confirm", {
                detail: confirm,
            })
        );
    },

    alert: (alert: AlertEvent) => {
        window.dispatchEvent(
            new CustomEvent("toastly:alert", {
                detail: alert,
            })
        );
    }
};