import express from "express";

// This initializes a new Express application.
const app = express();

//
app.post("/webhook", express.json({ type: "application/json" }), (request, response) => {
  response.status(202).send("Accepted");

  console.log("Header", request.header);
  console.log("Body", request.body);

  // Check the `x-github-event` header to learn what event type was sent.
  const githubEvent = request.headers["x-github-event"];

  // if (githubEvent === "issues") {
  //   const data = request.body;
  //   const action = data.action;
  //   if (action === "opened") {
  //     console.log(`An issue was opened with this title: ${data.issue.title}`);
  //   } else if (action === "closed") {
  //     console.log(`An issue was closed by ${data.issue.user.login}`);
  //   } else {
  //     console.log(`Unhandled action for the issue event: ${action}`);
  //   }
  // } else if (githubEvent === "ping") {
  //   console.log("GitHub sent the ping event");
  // } else {
  //   console.log(`Unhandled event: ${githubEvent}`);
  // }
});

const port = 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
