# Toastly

A lightweight React library for **toasts**, **alert modals** and **confirm modals**, triggered from anywhere in your app with a simple imperative API. No hooks or context needed at the call site.

## Features

- Toast notifications with variants (`info`, `success`, `warning`, `error`)
- Loading toasts, auto-dismiss and manual dismiss
- Alert and confirm modals (close with `Esc`, backdrop click, or buttons)
- Imperative API: call `toastly.add(...)` from components, utilities, or outside React
- Written in TypeScript, fully typed
- Works with Next.js (client components, `"use client"`)

## Installation

```bash
npm install @toastly/toastly
```

`react` and `react-dom` are required as peer dependencies.

## Setup

Wrap your app with `ToastlyProvider`. It listens for events and renders toasts and modals.

```tsx
import { ToastlyProvider } from "@toastly/toastly";

export default function App() {
  return (
    <ToastlyProvider>
      {/* your app */}
    </ToastlyProvider>
  );
}
```

Next.js (App Router): put the provider in `app/layout.tsx`. It is already a client component, so it can be imported from a server layout.

Styles are bundled with the package (`dist/index.css`). If your bundler does not load them automatically, import them manually:

```ts
import "@toastly/toastly/index.css";
```

## Usage

```ts
import { toastly } from "@toastly/toastly";
```

### Toasts

```ts
toastly.add({ message: "Profile saved", variant: "success" });

toastly.add({
  message: "Something went wrong",
  variant: "error",
  autoDismissIn: 5000, // ms
  allowDismiss: true,  // shows a close button
});
```

Give a toast an `id` to dismiss it programmatically. A toast with an `id` that is already displayed is ignored.

```ts
toastly.add({ id: "upload", message: "Uploading...", loading: true });

// later
toastly.dismiss("upload");
```

### Alert

```ts
toastly.alert({
  message: "Your session is about to expire.",
});
```

### Confirm

```ts
toastly.confirm({
  title: "Delete this post?",
  message: "This action cannot be undone.",
  onConfirm: () => deletePost(),
  onCancel: () => console.log("Cancelled"),
});
```

`message` accepts any React node:

```tsx
toastly.confirm({
  message: <p>Delete <b>{post.title}</b>?</p>,
  onConfirm: () => deletePost(post.id),
  onCancel: () => {},
});
```

## API

### `<ToastlyProvider>`

| Prop       | Type              | Description                         |
| ---------- | ----------------- | ----------------------------------- |
| `children` | `React.ReactNode` | Your app (**required**)             |
| `position` | `ToastlyPosition` | Position of the toast stack (default: `"bl"`) |
| `duration` | `number \| \`${number}\`` | Default toast duration in milliseconds (default: `3000`; overridden by `autoDismissIn`) |

### `toastly.add(toast: ToastEvent)`

| Option          | Type                                          | Description                                  |
| --------------- | --------------------------------------------- | -------------------------------------------- |
| `message`       | `string`                                      | Text displayed in the toast (**required**)   |
| `id`            | `string`                                      | Custom identifier, used to dismiss it later  |
| `variant`       | `"info" \| "success" \| "warning" \| "error"` | Visual style and icon                        |
| `allowDismiss`  | `boolean`                                     | Show a button to close the toast manually    |
| `autoDismissIn` | `number`                                      | Duration in milliseconds before auto-closing |
| `loading`       | `boolean`                                     | Display a spinner                            |

### `toastly.dismiss(id: string)`

Closes the toast with the given `id`.

### `toastly.alert(alert: AlertEvent)`

| Option    | Type              | Description                                                          |
| --------- | ----------------- | -------------------------------------------------------------------- |
| `message` | `React.ReactNode` | Modal content (a default text is shown if omitted)                   |

### `toastly.confirm(confirm: ConfirmEvent)`

| Option      | Type              | Description                                        |
| ----------- | ----------------- | -------------------------------------------------- |
| `title`     | `string`          | Modal title                                        |
| `message`   | `React.ReactNode` | Modal content (a default text is shown if omitted) |
| `onConfirm` | `() => void`      | Called when the user clicks **Ok** (**required**)  |
| `onCancel`  | `() => void`      | Called when the user clicks **Cancel** (**required**) |

## Exports

```ts
import { ToastlyProvider, AlertModal, ConfirmModal, toastly } from "@toastly/toastly";

import type {
  ToastVariant,
  ToastEvent,
  AlertEvent,
  ConfirmEvent,
} from "@toastly/toastly";
```

## Development

```bash
npm install
npm run dev     # run the example app
npm run build   # build the library into dist/
```

## How it works

`toastly` dispatches `CustomEvent`s on `window` (`toastly:add-alert`, `toastly:dismiss-alert`, `toastly:alert`, `toastly:confirm`). `ToastlyProvider` subscribes to them and renders the UI. This means `toastly.*` must be called in the browser (event handlers, effects), not during server rendering.

## License

MIT