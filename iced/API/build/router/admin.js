"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _controllers = require("../controllers");

const router = (0, _express.Router)();
router.post("/university", _controllers.addUniversity);
router.delete("/university/:id", _controllers.deleteUniversity);
router.put("/university/:id", _controllers.putUniversity);
router.post("/college", _controllers.addCollege);
router.delete("/college/:id", _controllers.deleteCollege);
router.put("/college/:id", _controllers.putCollege);
router.post("/project-event", _controllers.addProjectEvent);
router.delete("/project-event/:id", _controllers.deleteProjectEvent);
router.put("/project-event/:id", _controllers.putProjectEvent);
var _default = router;
exports.default = _default;