"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProjectEvent = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const projectEventSchema = new _mongoose.default.Schema({
  type: {
    type: String,
    enum: ["p", "e"]
  },
  name: {
    type: String,
    required: true
  },
  college: {
    type: _mongoose.default.Schema.Types.ObjectId,
    ref: "college",
    required: true
  },
  description: {
    type: String
  },
  video: {
    type: String
  },
  image: {
    type: String
  },
  all_images_file: {
    type: String
  }
}, {
  timestamps: true
});

const ProjectEvent = _mongoose.default.model("projectevent", projectEventSchema);

exports.ProjectEvent = ProjectEvent;