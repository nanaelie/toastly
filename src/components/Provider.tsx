"use client";

import { useEffect, useRef, useState } from "react";
import type { Alert, Confirm, ProviderProps, Toast as ToastType } from "../types";
import Toasts from "./Toasts";
import AlertModal from "./AlertModal";
import ConfirmModal from "./ConfirmModal";


export default function Provider({ position = 'bl', duration = 3_000 } : ProviderProps) {
    const [toasts, setToasts] = useState<ToastType[]>([]);
    const toastIds = useRef(new Set<string>());
    const toastTimeouts = useRef(new Map<string, number>());
    const durationRef = useRef(duration);
    durationRef.current = duration;
    const [openAlert, setOpenAlert] = useState<Alert>({ open: false, message: ''});
    const [openConfirm, setOpenConfirm] = useState<Confirm>({
        open: false, 
        message: null, 
        title: undefined,
        onClose: () => {},
        onCancel: () => {},
        onConfirm: () => {},
    });

    const dismissToast = (id: string) => {
        toastIds.current.delete(id);
        const timeout = toastTimeouts.current.get(id);
        if (timeout !== undefined) {
            window.clearTimeout(timeout);
            toastTimeouts.current.delete(id);
        }
        setToasts((current) => current.filter((toast) => toast.id !== id));
    };

    useEffect(() => {
        const handleAddToast = (e: Event) => {
            const { detail: _detail } = e as CustomEvent<ToastType>;
            
            let detail: ToastType = {
                ..._detail,
                id: _detail.id || `temp-${Date.now()}-${Math.random().toString(36).slice(2)}`
            };

            if (toastIds.current.has(detail.id)) return;
            toastIds.current.add(detail.id);
            setToasts((prev) => [detail, ...prev]);

            const autoDismissIn = detail.autoDismissIn ?? Number(durationRef.current);
            if (Number.isFinite(autoDismissIn) && autoDismissIn >= 0) {
                const timeout = window.setTimeout(() => dismissToast(detail.id), autoDismissIn);
                toastTimeouts.current.set(detail.id, timeout);
            }
        };

        const handleDismiss = (e: Event) => {
            const { detail } = e as CustomEvent<{ id: string }>;
            dismissToast(detail.id);
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
            toastTimeouts.current.forEach((timeout) => window.clearTimeout(timeout));
            toastTimeouts.current.clear();
            toastIds.current.clear();
        };
    }, []);

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
                onDismiss={dismissToast}
                position={position}
            />
        </div>
    );
}