import './toastly.css';

// if (typeof document !== 'undefined') {
//     const styleId = 'alertify-react-styles'

//     if (!document.getElementById(styleId)) {
//         const style = document.createElement('style')
//         style.id = styleId
//         style.textContent = styles
//         document.head.appendChild(style)
//     }
// }

export { default as ToastlyProvider } from "./components/ToastlyProvider";
export { default as AlertModal } from "./components/AlertModal";
export { default as ConfirmModal } from "./components/ConfirmModal";

export { toastly } from "./toastly";

export type {
    ToastVariant,
    ToastEvent,
    AlertEvent,
    ConfirmEvent
} from "./types";