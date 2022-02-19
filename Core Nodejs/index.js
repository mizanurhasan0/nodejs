const http = require("http");
const url = require("url");
const app = {};

const config = {
  port: 3000,
};
app.createServer = () => {
  const server = http.createServer(app.handleReqRes);
  server.listen(config.port, () => {
    console.log(`Server is ruuning on ${config.port}`);
  });
};

app.handleReqRes = (req, res) => {
  //   console.log(url.parse(req.url, true));
  const parsedUrl = url.parse(req.url, true);
  const path = parsedUrl.pathname;
  const trimePath = path.replace(/^\/+|\/+$/g, "");
  console.log(trimePath);
  //   console.log(url.parse(req.url, true));
  //   console.log(req.headers);
  res.end("hello world 2");
};

app.createServer();
