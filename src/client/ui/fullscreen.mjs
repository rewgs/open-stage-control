// var screenfull = require("screenfull"),
//     UiModal = require("./ui-modal"),
//     locales = require("../locales"),
//     iOS = require("./ios.mjs");

import screenfull from "screenfull";
import UiModal from "./ui-modal";
import locales from "../locales/index.mjs";
import iOS from "./ios.mjs";

let f;

/**
 * NOTE: Refactoring this into a function and putting the IOSFullScreen class outside of it.
 *
 * */
// var fullscreen;
// if (screenfull.isEnabled && !iOS) {
//     fullscreen = screenfull;
// } else {
//     class IOSFullScreen {
//         constructor() {
//             this.enabled = !navigator.standalone;
//             this.isFullScreen = navigator.standalone;
//         }
//
//         toggle() {
//             new UiModal({
//                 title: locales("fullscreen_unnavailable"),
//                 content: locales("fullscreen_addtohome"),
//                 closable: true
//             });
//         }
//
//         on() {}
//     }
//
//     fullscreen = new IOSFullScreen();
// }
//
// window.ELECTRON_FULLSCREEN = () => {
//     fullscreen.toggle();
// };

class IOSFullScreen {
    constructor() {
        this.enabled = !navigator.standalone;
        this.isFullScreen = navigator.standalone;
    }

    toggle() {
        new UiModal({
            title: locales("fullscreen_unnavailable"),
            content: locales("fullscreen_addtohome"),
            closable: true
        });
    }

    on() {}
}

// module.exports = fullscreen;

export const getFullscreen = () => {
    if (screenfull.isEnabled && !iOS) {
        f = screenfull;
    } else {
        f = new IOSFullScreen();
    }

    window.ELECTRON_FULLSCREEN = () => {
        f.toggle();
    };
};
