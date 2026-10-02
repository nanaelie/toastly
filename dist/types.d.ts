import React, { HTMLProps } from "react";
export type ToastVariant = "info" | "success" | "warning" | "error";
export type Toast = {
    id: string;
    message: string;
    variant?: ToastVariant;
    allowDismiss?: boolean;
    autoDismissIn?: number;
    loading?: boolean;
} & HTMLProps<HTMLDivElement>;
export type Alert = {
    open: boolean;
    message?: React.ReactNode;
    title?: string;
    onClose?: () => void;
} & HTMLProps<HTMLDivElement>;
export type Confirm = {
    open: boolean;
    title?: string;
    message?: React.ReactNode;
    onClose: () => void;
    onConfirm: () => void;
    onCancel: () => void;
} & HTMLProps<HTMLDivElement>;
type _ConfirmEvent = Omit<Confirm, "open"> & Partial<Pick<Confirm, "open">>;
export type ToastEvent = Omit<Toast, "id"> & Partial<Pick<Toast, "id">>;
export type AlertEvent = Omit<Alert, "open"> & Partial<Pick<Alert, "open">>;
export type ConfirmEvent = Omit<_ConfirmEvent, "onClose"> & Partial<Pick<_ConfirmEvent, "onClose">>;
export {};
