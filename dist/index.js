/******/ /* webpack/runtime/compat */
/******/ 
/******/ if (typeof __nccwpck_require__ !== 'undefined') __nccwpck_require__.ab = new URL('.', import.meta.url).pathname.slice(import.meta.url.match(/^file:\/\/\/\w:/) ? 1 : 0, -1) + "/";
/******/ 
/************************************************************************/
var __webpack_exports__ = {};
const core = require("@actions/core");
const github = require("@actions/github");

try {
  core.setOutput("time", time);

  const payload = JSON.stringify(github.context.payload);

  console.log(`The event payload: ${payload}`);
} catch (err) {}

