import { College } from "../model";

export const getAllColleges = async (req, res) => {
  try {
    const data = await College.find({})
      .populate("university", "name")
      .lean()
      .exec();
    return res.status(200).json({
      data
    });
  } catch (e) {
    res.status(400).end();
  }
};

export const getCollege = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await College.findById(id)
      .populate("university", "name")
      .lean()
      .exec();
    return res.status(200).json({ data });
  } catch (e) {
    res.status(500).end();
  }
};

export const addCollege = async (req, res) => {
  try {
    const newColloge = await College.create(req.body);
    console.log(newColloge);
    const data = await College.findById(newColloge._id)
      .populate("university", "name")
      .lean()
      .exec();
    return res.status(201).json({ data });
  } catch (e) {
    console.log(e);
    res.status(500).end();
  }
};

export const deleteCollege = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await College.findByIdAndDelete(id)
      .lean()
      .exec();
    console.log(data);
    return res.status(200).json({ data });
  } catch (e) {
    console.log(e);
    res.status(500).end();
  }
};

export const putCollege = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await College.findByIdAndUpdate(id, req.body, {
      new: true
    })
      .populate("university", "name")
      .lean()
      .exec();
    console.log(data, req.body, "put");
    return res.status(200).json({ data });
  } catch (e) {
    res.status(500).end();
  }
};
