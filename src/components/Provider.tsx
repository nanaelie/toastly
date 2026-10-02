"use client";

import { useEffect, useState } from "react";
import type { Alert, Confirm, Toast as ToastType } from "../types";
import Toasts from "./Toasts";
import AlertModal from "./AlertModal";
import ConfirmModal from "./ConfirmModal";

export default function Provider() {
    const [toasts, setToasts] = useState<ToastType[]>([]);
    const [openAlert, setOpenAlert] = useState<Alert>({ open: false, message: ''});
    const [openConfirm, setOpenConfirm] = useState<Confirm>({
        open: false, 
        message: null, 
        title: undefined,
        onClose: () => {},
        onCancel: () => {},
        onConfirm: () => {},
    });

    useEffect(() => {
        const handleAddToast = (e: Event) => {
            const { detail: _detail } = e as CustomEvent<ToastType>;
            
            let detail: ToastType = {
                ..._detail,
                id: _detail.id || `temp-${Date.now()}-${Math.random().toString(36).slice(2)}`
            };

            setToasts((prev) => {
                if (prev.some((a) => a.id === detail.id)) return prev;
                return [detail, ...prev];
            });

            if (detail.autoDismissIn) {
                window.setTimeout(() => {
                    setToasts(prev => prev.filter(a => a.id !== detail.id));
                }, detail.autoDismissIn);
            }
        };

        const handleDismiss = (e: Event) => {
            const { detail } = e as CustomEvent<{ id: string }>;
            setToasts((prev) => prev.filter((a) => a.id !== detail.id));
        };

        const handleAlert = (e: Event) => {
            const { detail } = e as CustomEvent<Alert>;

            setOpenAlert({
                open: true,
                title: detail.title,
                message: detail.message,
                onClose: detail.onClose,
            });
        }

        const handleConfirm = (e: Event) => {
            const { detail } = e as CustomEvent<Confirm>;

            setOpenConfirm({
                open: true,
                message: detail.message,
                title: detail.title,

                onClose: detail.onClose,
                onCancel: detail.onCancel,
                onConfirm: detail.onConfirm,
            });
        }

        window.addEventListener("toastly:add-alert", handleAddToast);
        window.addEventListener("toastly:dismiss-alert", handleDismiss);
        window.addEventListener("toastly:alert", handleAlert);
        window.addEventListener("toastly:confirm", handleConfirm);

        return () => {
            window.removeEventListener("toastly:add-alert", handleAddToast);
            window.removeEventListener("toastly:dismiss-alert", handleDismiss);
            window.removeEventListener("toastly:alert", handleAlert);
            window.removeEventListener("toastly:confirm", handleConfirm);
        };
    }, []);

    const handleDismiss = (id: string) => {
        setToasts((current) =>
            current.filter((toast) => toast.id !== id)
        );
    };

    const handleCloseAlert = () => {
        openAlert.onClose?.();
        setOpenAlert({
            open: false,
            message: '',
        });
    }

     const handleCloseConfirm = () => {
        openConfirm.onClose();
        setOpenConfirm({
            open: false,
            message: null,
            title: undefined,

            onClose: () => {},
            onCancel: () => {},
            onConfirm: () => {},
        });
    }

    const handleCancelConfirm = () => {
        openConfirm.onCancel();
    }

    const handleConfirm = () => {
        openConfirm.onConfirm();
    }

    return (
        <div className="fixed bottom-4 left-4 z-9999 min-w-62 max-w-xs space-y-2 text-gray-900 dark:text-white">
            <AlertModal open={openAlert.open} message={openAlert.message} title={openAlert.title} onClose={handleCloseAlert} />
            <ConfirmModal 
                open={openConfirm.open} 
                message={openConfirm.message} 
                title={openConfirm.title}
                onClose={handleCloseConfirm} 
                onCancel={handleCancelConfirm} 
                onConfirm={handleConfirm} 
            />
            <Toasts
                toasts={toasts}
                onDismiss={handleDismiss}
            />
        </div>
    );
}