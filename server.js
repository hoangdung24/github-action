import SmeeClient from "smee-client";

import "dotenv/config";

const smee = new SmeeClient({
  source: process.env.WEBHOOK_PROXY_URL,
  target: "http://localhost:3000/webhook",
  logger: console,
});

const events = smee.start();

// process.on("exit", () => {
//   console.log("EXIT");
//   events.close();
// });

process.on("SIGINT", () => {
  console.log("SIGINT");
  events.close();
});

// Stop forwarding events
