import { useEffect } from "react";
import { Confirm } from "../types";

export default function ConfirmModal({
    open,
    onClose,
    title,
    message,
    onCancel,
    onConfirm,
}: Confirm) {
    useEffect(() => {
        if (!open) return;

        const handleKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                onCancel();
                onClose();
            }
        };

        window.addEventListener('keydown', handleKey);
        return () => window.removeEventListener('keydown', handleKey);
    }, [open, onClose]);

    useEffect(() => {
        if (!open) return;

        const original = document.body.style.overflow;
        document.body.style.overflow = 'hidden';

        return () => {
            document.body.style.overflow = original;
        };
    }, [open]);

    const handleConfirm = () => {
        onClose();
        onConfirm();
    };

    const handleCancel = () => {
        onClose();
        onCancel();
    };

    if (!open) return null;

    return (
        <div className="fixed inset-0 z-9999">
            <div
                onClick={onClose}
                className="absolute inset-0 bg-black/40 backdrop-blur-[2.5px]"
            />

            <div className="pointer-events-none relative flex h-full w-full items-center justify-center">
                <div
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby={title ? 'confirm-modal-title' : undefined}
                    className="pointer-events-auto shadow-xl inset-shadow-[20px] inset-shadow-gray-900 relative w-full max-w-66 md:max-w-[18rem] animate-in fade-in"
                >
                    <div 
                        className={`relative flex flex-col w-full items-start gap-3 rounded-lg border p-3 py-3 shadow-lg backdrop-blur-2xl border-gray-400 bg-white dark:border-slate-700 dark:bg-slate-900/20`}
                        >
                        {title && (
                            <div className="relative flex w-full flex-col items-center justify-center gap-0.5 rounded-md bg-stone-100/70 px-3 py-1 sm:px-4 dark:bg-[#1c1a18]">
                                <span
                                    id="confirm-modal-title"
                                    className="font-semibold uppercase text-stone-500 dark:text-stone-400"
                                >
                                    {title}
                                </span>
                            </div>
                        )}

                        <div className="flex min-w-0 flex-1 items-center gap-3 px-3 py-2 sm:px-4">
                            <div className="min-w-0 flex-1 space-y-2 text-center">
                                {message ? (
                                    <>{message}</>
                                ) : (
                                    <>
                                        <p className="text-black dark:text-white">
                                            Are you sure you want to continue this action?
                                        </p>
                                        <p className="text-black text-xs dark:text-white">
                                            This action is not reversible
                                        </p>
                                    </>
                                )}
                            </div>
                        </div>

                        <div className="flex w-full justify-end gap-2">
                            <button
                                type="button"
                                onClick={handleCancel}
                                aria-label="Cancel this action"
                                className="group inline-flex flex-none items-center justify-center gap-1.5 rounded-lg bg-red-500 px-6 py-2 font-display text-[12.5px] font-medium tracking-wide text-stone-50 transition-colors hover:bg-stone-800 dark:bg-stone-100 dark:text-stone-900 dark:hover:bg-white"
                            >
                                <span>Cancel</span>
                            </button>
                            <button
                                type="button"
                                onClick={handleConfirm}
                                aria-label="Continue this action"
                                className="group min-w-28.25 inline-flex flex-none items-center justify-center gap-1.5 rounded-lg bg-black px-5 py-2 font-display text-[12.5px] font-medium tracking-wide text-stone-50 transition-colors hover:bg-stone-800 dark:bg-stone-100 dark:text-stone-900 dark:hover:bg-white"
                            >
                                <span>Ok</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}