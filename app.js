const express = require("express");
const next = require("next");
const cors = require("cors");
const useragent = require("express-useragent");
const port = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
const cookie = require("cookie");
var cookieParser = require("cookie-parser");

app.prepare().then(async () => {
  const server = express();
  server.use(cookieParser());

  server.use(useragent.express());

  server.use(cors());

  server.get("/", (req, res) => {
    return app.render(req, res, "/index", req.query);
  });
  server.all("*", (req, res) => {
    return handle(req, res);
  });

  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
