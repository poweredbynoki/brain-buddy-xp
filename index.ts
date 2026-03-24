import indexHtml from "./index.html";

const server = Bun.serve({
  routes: {
    "/": indexHtml,
    "/signin": indexHtml,
    "/signup": indexHtml,
    "/onboarding": indexHtml,
    "/privacy": indexHtml,
    "/terms": indexHtml,
    "/app": indexHtml,
    "/app/*": indexHtml,
  },
  development: {
    hmr: true,
    console: true,
  },
  port: 8000,
  hostname: "0.0.0.0",
});

console.log(`Brain Buddy frontend running at http://localhost:${server.port}`);
