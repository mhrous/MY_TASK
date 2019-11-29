"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Subject = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const subjectSchema = new _mongoose.default.Schema({
  name: {
    type: String,
    required: true
  },
  college: {
    type: _mongoose.default.Schema.Types.ObjectId,
    ref: "college",
    required: true
  },
  semester: {
    type: String,
    enum: ["1", "2"],
    required: true
  },
  year: {
    type: String,
    enum: ["1", "2", "3", "4", "5", "6", "7", "8"],
    required: true
  },
  description: {
    type: String
  },
  video: {
    type: String
  }
}, {
  timestamps: true
});

const Subject = _mongoose.default.model("subject", subjectSchema);

exports.Subject = Subject;