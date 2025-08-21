// var UiWidget = require("./ui-widget"),
//     { setScrollbarColor } = require("./utils");

import UiWidget from "./ui-widget.mjs";
import { setScrollbarColor } from "./utils.mjs";

class UiWorkspace extends UiWidget {
    constructor(options) {
        super(options);

        setScrollbarColor(this.container);
    }
}

// module.exports = new UiWorkspace({ selector: "osc-workspace" });
export const uiWorkspace = new UiWorkspace({ selector: "osc-workspace" });
