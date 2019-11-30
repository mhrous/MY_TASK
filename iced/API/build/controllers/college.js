"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.putCollege = exports.deleteCollege = exports.addCollege = exports.getCollege = exports.getAllColleges = void 0;

var _model = require("../model");

const getAllColleges = async (req, res) => {
  try {
    const data = await _model.College.find({}).populate("university", "name").lean().exec();
    return res.status(200).json({
      data
    });
  } catch (e) {
    res.status(400).end();
  }
};

exports.getAllColleges = getAllColleges;

const getCollege = async (req, res) => {
  try {
    const {
      id
    } = req.params;
    const data = await _model.College.findById(id).populate("university", "name").lean().exec();
    return res.status(200).json({
      data
    });
  } catch (e) {
    res.status(500).end();
  }
};

exports.getCollege = getCollege;

const addCollege = async (req, res) => {
  try {
    const newColloge = await _model.College.create(req.body);
    console.log(newColloge);
    const data = await _model.College.findById(newColloge._id).populate("university", "name").lean().exec();
    return res.status(201).json({
      data
    });
  } catch (e) {
    console.log(e);
    res.status(500).end();
  }
};

exports.addCollege = addCollege;

const deleteCollege = async (req, res) => {
  try {
    const {
      id
    } = req.params;
    const data = await _model.College.findByIdAndDelete(id).lean().exec();
    console.log(data);
    return res.status(200).json({
      data
    });
  } catch (e) {
    console.log(e);
    res.status(500).end();
  }
};

exports.deleteCollege = deleteCollege;

const putCollege = async (req, res) => {
  try {
    const {
      id
    } = req.params;
    const data = await _model.College.findByIdAndUpdate(id, req.body, {
      new: true
    }).populate("university", "name").lean().exec();
    console.log(data, req.body, "put");
    return res.status(200).json({
      data
    });
  } catch (e) {
    res.status(500).end();
  }
};

exports.putCollege = putCollege;