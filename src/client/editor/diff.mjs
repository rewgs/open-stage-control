/**
 * This is a bit of a weird export.
 * `diff` just appears to be exporting an import, and only index.mjs imports it, so...index.mjs is now just importing "jsondiffpatch"
 * `diffToWidget()` ends up calling itself, but via the module.exports chain. Again, why?
 */

// module.exports = {
//     diff: require("jsondiffpatch"),
//
//     diffToWidget: function (widget, diff) {
//         // traverse a diff patch and the associated widget
//         // to return the first node (widget and sub-patch) with actual changes
//
//         var children = diff.tabs || diff.widgets;
//
//         if (children) {
//             var childrenKeys = Object.keys(children),
//                 deletedChildren = childrenKeys.filter(
//                     (x) => typeof x === "string" && x.match(/_[0-9]+/)
//                 ),
//                 changedChildren = childrenKeys.filter((x) => !isNaN(x));
//         }
//
//         if (
//             !children ||
//             Array.isArray(children) || // 'tabs' or 'widgets' property created
//             deletedChildren.length || // 'tabs' or 'widgets' property created
//             changedChildren.length !== 1 || // children reordered (or same property edited in multiple widgets, but case ignored)
//             Array.isArray(children[changedChildren[0]]) // child item created
//         ) {
//             return [widget, diff];
//         }
//
//         return module.exports.diffToWidget(
//             widget.children[changedChildren[0]],
//             children[changedChildren[0]]
//         );
//     }
// };

// TODO:
export function diffToWidget() {}
