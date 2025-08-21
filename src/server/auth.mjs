// var settings = require("./settings"),
// auth = null;

import "./settings.mjs";

var auth = null;

// NOTE: This block was not changed -- only imports above and exports below.
if (settings.read("authentication")) {
    var [name, pwd] = settings.read("authentication").split(":"),
        httpAuth = require("http-auth");

    auth = httpAuth.basic(
        {
            realm: "Open Stage Control"
        },
        (username, password, callback) => {
            // Custom authentication method.
            callback(username === name && password === pwd);
        }
    );
}

// module.exports = auth;
export default auth;
