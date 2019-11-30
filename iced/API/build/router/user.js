"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _controllers = require("../controllers");

const router = (0, _express.Router)();
router.get("/university", _controllers.getALLUniversities);
router.get("/college", _controllers.getAllColleges);
router.get("/college/:id", _controllers.getCollege);
router.get("/project-event", _controllers.getALLProjectEvent);
router.get("/project-event/last", _controllers.getLast4ProjectEvent);
var _default = router;
exports.default = _default;