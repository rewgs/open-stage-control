// require("./zoom.mjs");
require("../events/click");
// require("./ios.mjs");
// require("./notifications");
require("./ui-workspace");
require("./main-menu");
require("./ui-console");
require("./utils.mjs").updateMobileThemeColor();

import { zoom } from "./zoom.mjs";
import iOS from "./ios.mjs";
import { notifications } from "./notifications";

if (!navigator.userAgent.match(/Android|iPhone|iPad|iPod/i)) {
    require("./ui-keyboard");
}
