// var locales = {
//     en: require("./en"),
//     fr: require("./fr"),
//     de: require("./de"),
//     ok: require("./pl"),
//     debug: {
//         /* empty */
//         keyboard_layout: require("./en").keyboard_layout
//     }
// };

import de from "./de.mjs";
import en from "./en.mjs";
import fr from "./fr.mjs";
import pl from "./pl.mjs";

const locales = {
    de: de,
    en: en,
    fr: fr,
    ok: pl,
    debug: {
        keyboard_layout: en.keyboard_layout
    }
};

// var lang = locales[LANG] ? LANG : "en";
const lang = locales[lang] ? lang : "en";

// module.exports = (key) => locales[lang][key] || `!${key}!`;
export default () => {
    locales[lang][key] || `!${key}!`;
};
