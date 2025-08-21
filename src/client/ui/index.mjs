// var UiSidePanel = require("./ui-sidepanel.mjs"),
//     locales = require("../locales");

import UiSidePanel from "./ui-sidepanel.mjs";
import locales from "../locales";

// module.exports = {
//     leftUiSidePanel: new UiSidePanel({
//         selector: "osc-panel-container.left",
//         label: locales("editor_tree")
//     }),
//     rightUiSidePanel: new UiSidePanel({
//         selector: "osc-panel-container.right",
//         label: locales("editor_inspector")
//     })
// };

export const leftUiSidePanel = new UiSidePanel({
    selector: "osc-panel-container.left",
    label: locales("editor_tree")
});

export const rightUiSidePanel = new UiSidePanel({
    selector: "osc-panel-container.right",
    label: locales("editor_inspector")
});
