// module.exports.widgets = {
//     // basics
//     button: require("./basics/button.mjs"),
//     switch: require("./basics/switch.mjs"),
//     dropdown: require("./basics/dropdown.mjs"),
//     menu: require("./basics/menu.mjs"),
//     input: require("./basics/input.mjs"),
//     textarea: require("./basics/textarea.mjs"),
//     file: require("./basics/file.mjs"),
//
//     // containers
//     panel: require("./containers/panel.mjs"),
//     folder: require("./containers/folder.mjs"),
//     root: require("./containers/root.mjs"),
//     tab: require("./containers/tab.mjs"),
//     modal: require("./containers/modal.mjs"),
//     clone: require("./containers/clone"),
//     fragment: require("./containers/fragment.mjs"),
//     matrix: require("./containers/matrix.mjs"),
//     keyboard: require("./containers/keyboard.mjs"),
//     patchbay: require("./containers/patchbay.mjs").PatchBay,
//     patchbaynode: require("./containers/patchbay.mjs").PatchBayNode,
//
//     // frames
//     image: require("./frames/image.mjs"),
//     svg: require("./frames/svg.mjs"),
//     html: require("./frames/html.mjs"),
//     frame: require("./frames/frame.mjs"),
//
//     // graphs
//     plot: require("./graphs/plot.mjs"),
//     eq: require("./graphs/eq.mjs"),
//     visualizer: require("./graphs/visualizer.mjs"),
//
//     // indicators
//     led: require("./indicators/led.mjs"),
//     text: require("./indicators/text.mjs"),
//
//     // pads
//     xy: require("./pads/xy.mjs"),
//     rgb: require("./pads/rgb.mjs"),
//     multixy: require("./pads/multixy.mjs"),
//     canvas: require("./pads/canvas.mjs"),
//
//     // sliders
//     fader: require("./sliders/fader.mjs"),
//     knob: require("./sliders/knob.mjs"),
//     encoder: require("./sliders/encoder"),
//     range: require("./sliders/range.mjs"),
//
//     // scripts
//     script: require("./scripts/script-widget.mjs"),
//     variable: require("./scripts/variable.mjs")
// };
//
// module.exports.categories = {
//     Basics: [
//         "button",
//         "switch",
//         "dropdown",
//         "menu",
//         "input",
//         "textarea",
//         "file"
//     ],
//     Containers: [
//         "panel",
//         "modal",
//         "clone",
//         "fragment",
//         "matrix",
//         "keyboard",
//         "patchbay",
//         "folder"
//     ],
//     Frames: ["frame", "svg", "html", "image"],
//     Graphs: ["plot", "eq", "visualizer"],
//     Indicators: ["led", "text"],
//     Pads: ["xy", "rgb", "multixy", "canvas"],
//     Sliders: ["fader", "knob", "encoder", "range"],
//     Scripts: ["script", "variable"]
// };
//
// var defaults = {};
// for (var k in module.exports.widgets) {
//     defaults[k] = module.exports.widgets[k].defaults();
//     module.exports.widgets[k]._defaults = defaults[k]._props();
// }
// module.exports.defaults = defaults;

export default {
    widgets: {
        // basics
        button: require("./basics/button.mjs"),
        switch: require("./basics/switch.mjs"),
        dropdown: require("./basics/dropdown.mjs"),
        menu: require("./basics/menu.mjs"),
        input: require("./basics/input.mjs"),
        textarea: require("./basics/textarea.mjs"),
        file: require("./basics/file.mjs"),

        // containers
        panel: require("./containers/panel.mjs"),
        folder: require("./containers/folder.mjs"),
        root: require("./containers/root.mjs"),
        tab: require("./containers/tab.mjs"),
        modal: require("./containers/modal.mjs"),
        clone: require("./containers/clone"),
        fragment: require("./containers/fragment.mjs"),
        matrix: require("./containers/matrix.mjs"),
        keyboard: require("./containers/keyboard.mjs"),
        patchbay: require("./containers/patchbay.mjs").PatchBay,
        patchbaynode: require("./containers/patchbay.mjs").PatchBayNode,

        // frames
        image: require("./frames/image.mjs"),
        svg: require("./frames/svg.mjs"),
        html: require("./frames/html.mjs"),
        frame: require("./frames/frame.mjs"),

        // graphs
        plot: require("./graphs/plot.mjs"),
        eq: require("./graphs/eq.mjs"),
        visualizer: require("./graphs/visualizer.mjs"),

        // indicators
        led: require("./indicators/led.mjs"),
        text: require("./indicators/text.mjs"),

        // pads
        xy: require("./pads/xy.mjs"),
        rgb: require("./pads/rgb.mjs"),
        multixy: require("./pads/multixy.mjs"),
        canvas: require("./pads/canvas.mjs"),

        // sliders
        fader: require("./sliders/fader.mjs"),
        knob: require("./sliders/knob.mjs"),
        encoder: require("./sliders/encoder"),
        range: require("./sliders/range.mjs"),

        // scripts
        script: require("./scripts/script-widget.mjs"),
        variable: require("./scripts/variable.mjs")
    },
    categories: {
        Basics: [
            "button",
            "switch",
            "dropdown",
            "menu",
            "input",
            "textarea",
            "file"
        ],
        Containers: [
            "panel",
            "modal",
            "clone",
            "fragment",
            "matrix",
            "keyboard",
            "patchbay",
            "folder"
        ],
        Frames: ["frame", "svg", "html", "image"],
        Graphs: ["plot", "eq", "visualizer"],
        Indicators: ["led", "text"],
        Pads: ["xy", "rgb", "multixy", "canvas"],
        Sliders: ["fader", "knob", "encoder", "range"],
        Scripts: ["script", "variable"]
    }
};

// NOTE: I'm not entirely clear on the purpose of this. Smells like a code smell. Leaving it for now though.
//
// var defaults = {};
// for (var k in module.exports.widgets) {
//     defaults[k] = module.exports.widgets[k].defaults();
//     module.exports.widgets[k]._defaults = defaults[k]._props();
// }
// module.exports.defaults = defaults;
