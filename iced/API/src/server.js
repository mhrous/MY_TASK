import express from "express";
import { json, urlencoded } from "body-parser";
import morgan from "morgan";
import cors from "cors";
import helmet from "helmet";


import config from "./config";
import { connect } from "./utils";
import vipRouter from "./router";

export const app = express();
// app.use(favicon(path.join(__dirname, "..", "public", "favicon.ico")));

app.disable("x-powered-by");
app.disable("etag");

app.use(cors());

app.use(json());
app.use(
  urlencoded({
    extended: true
  })
);
app.use(morgan("dev"));

app.use("/public", express.static("public"));
app.get("/favicon.ico", (req, res) => res.status(204));
app.use("/iced", vipRouter);

export const start = async () => {
  try {
    await connect();

    app.listen(config.port, () => {
      console.log(`REST API on http://localhost:${config.port}/iced`);
    });
  } catch (e) {}
};
