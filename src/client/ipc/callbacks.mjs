// var utils = require("../ui/utils.mjs");
// var { updateMobileThemeColor } = require("../ui/utils.mjs");
// var osc = require("../osc");
// var session = require("../managers/session/index.mjs");
// var widgetManager = require("../managers/widgets.mjs");
// var state = require("../managers/state.mjs");
// var editor = require("../editor/");
// var locales = require("../locales/index.mjs");
// var UiModal = require("../ui/ui-modal");
// var uiLoading = require("../ui/ui-loading");
// var notifications = require("../ui/notifications.mjs");
// var raw = require("nanohtml/raw");
// var backup = require("../backup");

import { icon, updateMobileThemeColor } from "../ui/utils.mjs";
import osc from "../osc";
import { sessionManager as session } from "../managers/session/index.mjs";
import { widgetManager } from "../managers/widgets.mjs";
import { stateManager as state } from "../managers/state.mjs";
import { editor } from "../editor/index.mjs";
import locales from "../locales/index.mjs";
import UiModal from "../ui/ui-modal";
import uiLoading from "../ui/ui-loading";
import { notifications } from "../ui/notifications.mjs";
import raw from "nanohtml/raw";
import { save } from "../backup.mjs";

// module.exports = {
//     bundle: function (data) {
//         for (let i in data) {
//             osc.receive(data[i]);
//         }
//     },
//
//     receiveOsc: function (data) {
//         osc.receive(data);
//     },
//
//     connected: function () {
//         uiLoading(false);
//     },
//
//     sessionOpen: function (data) {
//         session.open(data);
//     },
//
//     sessionNew: function () {
//         session.create();
//     },
//
//     sessionSaved: function (data) {
//         editor.unsavedSession = false;
//     },
//
//     fragmentLoad: function (data) {
//         session.setFragment(data);
//     },
//
//     stateLoad: function (data) {
//         state.load(data.state, data.send, data.path);
//     },
//
//     stateSend: function () {
//         if (!CLIENT_SYNC) return;
//
//         notifications.add({
//             icon: "wifi",
//             class: "client-connected",
//             message: locales("loading_newclient")
//         });
//
//         setTimeout(function () {
//             osc.syncOnly = true;
//             state.send();
//             osc.syncOnly = false;
//         }, 200);
//     },
//
//     editorDisable: function (data) {
//         editor.disable(data.permanent);
//     },
//
//     error: function (data) {
//         new UiModal({
//             title: raw(
//                 icon("exclamation-triangle") + "&nbsp; " + locales("error")
//             ),
//             content: raw(data),
//             closable: true
//         });
//     },
//
//     errorLog: function (data) {
//         console.error(data);
//     },
//
//     reloadCss: function () {
//         var queryString = "?__OSC_ASSET__=1&reload=" + Date.now();
//         var sheets = DOM.get(document, 'link[rel="stylesheet"][hot-reload]');
//         var loaded = 0;
//
//         for (let stylesheet of sheets) {
//             stylesheet.href = stylesheet.href.replace(/\?.*|$/, queryString);
//
//             // use image hack to catch stylesheet load event
//             let img = document.createElement("img");
//             document.body.appendChild(img);
//
//             img.onerror = img.onload = () => {
//                 img.onerror = img.onload = null;
//                 document.body.removeChild(img);
//
//                 if (++loaded === sheets.length) {
//                     var root = widgetManager.getWidgetById("root")[0];
//                     if (root) root.onPropChanged("colorWidget");
//                     fastdom.measure(() => {
//                         GRIDWIDTH_CSS = parseInt(
//                             getComputedStyle(
//                                 document.documentElement
//                             ).getPropertyValue("--grid-width")
//                         );
//                         fastdom.mutate(() => {
//                             editor.toggleGrid();
//                             editor.toggleGrid();
//                         });
//                     });
//                     updateMobileThemeColor(root);
//                 }
//             };
//
//             img.src = stylesheet.href;
//         }
//     },
//
//     reload: function () {
//         save();
//         editor.unsavedSession = false;
//         window.location.href = window.location.href;
//     },
//
//     notify: function (data) {
//         var message = data.message || "";
//
//         if (data.locale) message = locales(data.locale) + message;
//
//         notifications.add({
//             icon: data.icon,
//             class: data.class,
//             message: message
//         });
//     },
//
//     setTitle: function (data) {
//         if (ENV.title) return;
//
//         document.title = TITLE + (data ? " (" + data + ")" : "");
//     },
//
//     serverTargets: function (data) {
//         if (data) osc.serverTargets = data;
//     }
// };

export function bundle(data) {
    for (let i in data) {
        osc.receive(data[i]);
    }
}

export function receiveOsc(data) {
    osc.receive(data);
}

export function connected() {
    uiLoading(false);
}

export function sessionOpen(data) {
    session.open(data);
}

export function sessionNew() {
    session.create();
}

export function sessionSaved(data) {
    editor.unsavedSession = false;
}

export function fragmentLoad(data) {
    session.setFragment(data);
}

export function stateLoad(data) {
    state.load(data.state, data.send, data.path);
}

export function stateSend() {
    if (!CLIENT_SYNC) return;

    notifications.add({
        icon: "wifi",
        class: "client-connected",
        message: locales("loading_newclient")
    });

    setTimeout(function () {
        osc.syncOnly = true;
        state.send();
        osc.syncOnly = false;
    }, 200);
}

export function editorDisable(data) {
    editor.disable(data.permanent);
}

export function error(data) {
    new UiModal({
        title: raw(icon("exclamation-triangle") + "&nbsp; " + locales("error")),
        content: raw(data),
        closable: true
    });
}

export function errorLog(data) {
    console.error(data);
}

export function reloadCss() {
    var queryString = "?__OSC_ASSET__=1&reload=" + Date.now();
    var sheets = DOM.get(document, 'link[rel="stylesheet"][hot-reload]');
    var loaded = 0;

    for (let stylesheet of sheets) {
        stylesheet.href = stylesheet.href.replace(/\?.*|$/, queryString);

        // use image hack to catch stylesheet load event
        let img = document.createElement("img");
        document.body.appendChild(img);

        img.onerror = img.onload = () => {
            img.onerror = img.onload = null;
            document.body.removeChild(img);

            if (++loaded === sheets.length) {
                var root = widgetManager.getWidgetById("root")[0];
                if (root) root.onPropChanged("colorWidget");
                fastdom.measure(() => {
                    GRIDWIDTH_CSS = parseInt(
                        getComputedStyle(
                            document.documentElement
                        ).getPropertyValue("--grid-width")
                    );
                    fastdom.mutate(() => {
                        editor.toggleGrid();
                        editor.toggleGrid();
                    });
                });
                updateMobileThemeColor(root);
            }
        };

        img.src = stylesheet.href;
    }
}

export function reload() {
    save();
    editor.unsavedSession = false;
    window.location.href = window.location.href;
}

export function notify(data) {
    var message = data.message || "";

    if (data.locale) message = locales(data.locale) + message;

    notifications.add({
        icon: data.icon,
        class: data.class,
        message: message
    });
}

export function setTitle(data) {
    if (ENV.title) return;

    document.title = TITLE + (data ? " (" + data + ")" : "");
}

export function serverTargets(data) {
    if (data) osc.serverTargets = data;
}
