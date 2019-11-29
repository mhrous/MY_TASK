"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.University = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const universitySchema = new _mongoose.default.Schema({
  name: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

const University = _mongoose.default.model('university', universitySchema);

exports.University = University;