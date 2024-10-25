import core from "@actions/core";
import github from "@actions/github";

try {
  core.setOutput("time", time);

  const payload = JSON.stringify(github.context.payload);

  console.log(`The event payload: ${payload}`);
} catch (err) {}
