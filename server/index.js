import express from "express";
import path from "path";
import fs from "fs";

import React from "react";
import ReactDOMServer from "react-dom/server";

import App from "../src/App.js";

const app = express();
const PORT = 8000;

app.get("/", (req, res) => {
  const reactApp = ReactDOMServer.renderToString(<App />);

  const indexFile = path.resolve("./build/index.html");
  fs.readFile(indexFile, "utf8", (err, data) => {
    if (err) {
      console.error("Error at readFile: ", err);
      return res.status(500).send("Something went wrong");
    }

    return res.send(
      data.replace('<div id="root"></div>', `<div id="root">${reactApp}</div>`)
    );
  });
});

app.use(express.static("./build"));

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
  console.log("-------------------------------------------------------\n| View your SSR React app at ", '\x1b[36m', 'http://localhost:8000', '\x1b[0m', '|\n-------------------------------------------------------');
});
