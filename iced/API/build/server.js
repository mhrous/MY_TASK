"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.start = exports.app = void 0;

var _express = _interopRequireDefault(require("express"));

var _bodyParser = require("body-parser");

var _morgan = _interopRequireDefault(require("morgan"));

var _cors = _interopRequireDefault(require("cors"));

var _helmet = _interopRequireDefault(require("helmet"));

var _config = _interopRequireDefault(require("./config"));

var _utils = require("./utils");

var _router = _interopRequireDefault(require("./router"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = (0, _express.default)(); // app.use(favicon(path.join(__dirname, "..", "public", "favicon.ico")));

exports.app = app;
app.disable("x-powered-by");
app.disable("etag");
app.use((0, _cors.default)());
app.use((0, _bodyParser.json)());
app.use((0, _bodyParser.urlencoded)({
  extended: true
}));
app.use((0, _morgan.default)("dev"));
app.use("/public", _express.default.static("public"));
app.get("/favicon.ico", (req, res) => res.status(204));
app.use("/iced", _router.default);

const start = async () => {
  try {
    await (0, _utils.connect)();
    app.listen(_config.default.port, () => {
      console.log(`REST API on http://localhost:${_config.default.port}/iced`);
    });
  } catch (e) {}
};

exports.start = start;