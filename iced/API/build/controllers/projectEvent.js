"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getLast4ProjectEvent = exports.putProjectEvent = exports.deleteProjectEvent = exports.addProjectEvent = exports.getALLProjectEvent = void 0;

var _model = require("../model");

const getALLProjectEvent = async (req, res) => {
  try {
    const data = await _model.ProjectEvent.find(req.query).populate({
      path: "college",
      select: "name",
      populate: {
        path: "university",
        select: "name"
      }
    }).lean().exec();
    return res.status(200).json({
      data
    });
  } catch (e) {
    res.status(400).end();
  }
};

exports.getALLProjectEvent = getALLProjectEvent;

const addProjectEvent = async (req, res) => {
  try {
    const newProjectEvent = await _model.ProjectEvent.create(req.body);
    const data = await _model.ProjectEvent.findById(newProjectEvent._id).populate({
      path: "college",
      select: "name",
      populate: {
        path: "university",
        select: "name"
      }
    }).lean().exec();
    return res.status(201).json({
      data
    });
  } catch (e) {
    res.status(500).end();
  }
};

exports.addProjectEvent = addProjectEvent;

const deleteProjectEvent = async (req, res) => {
  try {
    const {
      id
    } = req.params;
    const data = await _model.ProjectEvent.findByIdAndDelete(id).lean().exec();
    return res.status(200).json({
      data
    });
  } catch (e) {
    res.status(500).end();
  }
};

exports.deleteProjectEvent = deleteProjectEvent;

const putProjectEvent = async (req, res) => {
  try {
    const {
      id
    } = req.params;
    const data = await _model.ProjectEvent.findByIdAndUpdate(id, req.body, {
      new: true
    }).populate({
      path: "college",
      select: "name",
      populate: {
        path: "university",
        select: "name"
      }
    }).lean().exec();
    return res.status(200).json({
      data
    });
  } catch (e) {
    res.status(500).end();
  }
};

exports.putProjectEvent = putProjectEvent;

const getLast4ProjectEvent = async (req, res) => {
  try {
    const data = await _model.ProjectEvent.find(req.query).sort({
      createdAt: -1
    }).limit(4).lean().exec();
    return res.status(200).json({
      data
    });
  } catch (e) {
    res.status(400).end();
  }
};

exports.getLast4ProjectEvent = getLast4ProjectEvent;