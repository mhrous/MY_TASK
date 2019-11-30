"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addSubject = exports.gettAllSubjects = void 0;

var _model = require("../model");

const gettAllSubjects = async (req, res) => {
  try {
    const {
      college,
      subject
    } = req.query;
    const selectField = subject ? '' : 'name semester';
    const data = await _model.Subject.find({
      $or: [{
        college
      }, {
        _id: subject
      }]
    }).select(selectField).lean().exec(); //@TODO return each semester subjects

    return res.status(200).json({
      data
    });
  } catch (e) {
    res.status(400).end();
  }
};

exports.gettAllSubjects = gettAllSubjects;

const addSubject = async (req, res) => {
  try {
    const data = await _model.Subject.create(req.body);
    return res.status(201).json(data);
  } catch (e) {
    return res.status(500).end();
  }
};

exports.addSubject = addSubject;