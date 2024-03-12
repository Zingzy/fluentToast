# fluentToast

A simple, modern and smart toast-notification library for the web.

## ✨ Features

- Simple and easy to use
- Customizable
- Toast Queueing
- Custom Duration
- Fluent Design
- Sound alert
- Different types of toasts
- No dependencies
- Lightweight

## 🔧 Installation

```html
<script src="https://cdn.jsdelivr.net/gh/zingzy/fluentToast/script.js"></script>

<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/zingzy/fluentToast/styles.css">
```

## 🏗️ Usage

```javascript
fluentToast("Toast1", "Hello this is a test!", 10, "warning");
```

## ⚙️ Parameters

<table>
    <tr>
        <th>Parameter</th>
        <th>Description</th>
        <th>Default</th>
    </tr>
    <tr>
        <td>Id</td>
        <td>Unique Id of the Toast</td>
        <td>""</td>
    </tr>
    <tr>
        <td>text</td>
        <td>The message of the toast</td>
        <td>""</td>
    </tr>
    <tr>
        <td>duration</td>
        <td>The duration of the toast in seconds</td>
        <td>10</td>
    </tr>
    <tr>
        <td>type</td>
        <td>The type of the toast. Can be "success", "warning", "error" or "info"</td>
        <td>"info"</td>
    </tr>
    <tr>
        <td>soundAlert</td>
        <td>Whether to play a sound when the toast is shown</td>
        <td>true</td>
    </tr>
</table>

### Why is Id important?

The `Id` parementer is important as it acts as a unique identifier for the toast. It also acts as a notification spam filter. If a toast with the same `Id` is already present, the new toast will replace it and the duration will be reset.

## 🤩 Upcoming Features

- Notification Actions
- More customization options
- More types of toasts
- Persistant Toats
- Custom sound alerts
- Toast Icon

## 🤝 Contributing

Contributions, issues and feature requests are welcome! Feel free to open a PR or submit an issue.

---

<h6 align="center">
© zingzy . 2024

All Rights Reserved</h6>

<p align="center">
	<a href="https://github.com/zingzy/hPyT/blob/master/LICENSE"><img src="https://img.shields.io/static/v1.svg?style=for-the-badge&label=License&message=MIT&logoColor=d9e0ee&colorA=363a4f&colorB=b7bdf8"/></a>
</p>
