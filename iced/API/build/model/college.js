"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.College = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const collegeSchema = new _mongoose.default.Schema({
  name: {
    type: String,
    required: true
  },
  university: {
    type: _mongoose.default.Schema.Types.ObjectId,
    ref: "university"
  },
  description: {
    type: String,
    required: true
  },
  years: Number
}, {
  timestamps: true
});

const College = _mongoose.default.model("college", collegeSchema);

exports.College = College;