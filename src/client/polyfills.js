// Node.js built-ins polyfills for the browser
global.process = global.process || {
  env: {
    NODE_ENV: "production",
  },
};
global.Buffer = global.Buffer || require("buffer/").Buffer;
