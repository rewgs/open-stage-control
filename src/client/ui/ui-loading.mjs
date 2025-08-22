// var notifications = require("./notifications.mjs"),
//     loading = null,
//     timeout = null;

import { notifications } from "./notifications.mjs";

let loading = null;
let timeout = null;

// module.exports = function uiLoading(title) {
//     if (title === false && loading) {
//         clearTimeout(timeout);
//         timeout = setTimeout(() => {
//             notifications.remove(loading);
//             loading = null;
//         }, 500);
//     } else if (title !== false) {
//         notifications.add({
//             id: "LOADING",
//             icon: "spinner fa-spin",
//             message: title
//         });
//         loading = notifications.toasts[notifications.toasts.length - 1];
//     }
// };

export function uiLoading(title) {
    if (title === false && loading) {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            notifications.remove(loading);
            loading = null;
        }, 500);
    } else if (title !== false) {
        notifications.add({
            id: "LOADING",
            icon: "spinner fa-spin",
            message: title
        });
        loading = notifications.toasts[notifications.toasts.length - 1];
    }
}
