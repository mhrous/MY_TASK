"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.putUniversity = exports.deleteUniversity = exports.addUniversity = exports.getALLUniversities = void 0;

var _model = require("../model");

const getALLUniversities = async (req, res) => {
  try {
    const data = await _model.University.find().select("name").lean().exec();
    return res.status(200).json({
      data
    });
  } catch (e) {
    res.status(400).end();
  }
};

exports.getALLUniversities = getALLUniversities;

const addUniversity = async (req, res) => {
  try {
    console.log(req.body);
    const data = await _model.University.create(req.body);
    return res.status(201).json({
      data
    });
  } catch (e) {
    console.log(e);
    res.status(500).end();
  }
};

exports.addUniversity = addUniversity;

const deleteUniversity = async (req, res) => {
  try {
    const {
      id
    } = req.params;
    const data = await _model.University.findByIdAndDelete(id).lean().exec();
    console.log(data);
    return res.status(200).json({
      data
    });
  } catch (e) {
    console.log(e);
    res.status(500).end();
  }
};

exports.deleteUniversity = deleteUniversity;

const putUniversity = async (req, res) => {
  try {
    const {
      id
    } = req.params;
    const data = await _model.University.findByIdAndUpdate(id, req.body, {
      new: true
    }).lean().exec();
    console.log(data);
    return res.status(200).json({
      data
    });
  } catch (e) {
    console.log(e);
    res.status(500).end();
  }
};

exports.putUniversity = putUniversity;