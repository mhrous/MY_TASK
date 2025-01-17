"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _admin = _interopRequireDefault(require("./admin"));

var _utils = require("../utils");

var _user = _interopRequireDefault(require("./user"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = (0, _express.Router)();
router.use('/', _user.default); // router.post('/signUb', signUp);
// router.post('/signIn', signIn);

router.use('/admin', _admin.default);
var _default = router;
exports.default = _default;