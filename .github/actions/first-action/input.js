import core from "@actions/core";
import github from "@actions/github";

try {
  const time = new Date().toTimeString();
  core.setOutput("time", time);
  console.log(JSON.stringify(github));
} catch (error) {
  core.setFailed(error.message);
}
