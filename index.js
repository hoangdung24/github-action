const core = require("@actions/core");
const github = require("@actions/github");

core.setOutput("time", time);

const payload = JSON.stringify(github.context.payload);

console.log(`The event payload: ${payload}`);
