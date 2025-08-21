// Looks like none of these are used?
// require("./zoom.mjs");
// require("../events/click");
// require("./ios.mjs");
// require("./notifications");
// require("./ui-workspace.mjs");
// require("./main-menu.mjs");
// require("./ui-console");
// require("./utils.mjs").updateMobileThemeColor();

if (!navigator.userAgent.match(/Android|iPhone|iPad|iPod/i)) {
    require("./ui-keyboard");
}
