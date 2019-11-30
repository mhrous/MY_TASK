import { University } from "../model";

export const getALLUniversities = async (req, res) => {
  try {
    const data = await University.find()
      .select("name")
      .lean()
      .exec();

    return res.status(200).json({
      data
    });
  } catch (e) {
    res.status(400).end();
  }
};

export const addUniversity = async (req, res) => {
  try {
    console.log(req.body);
    const data = await University.create(req.body);
    return res.status(201).json({ data });
  } catch (e) {
    console.log(e);
    res.status(500).end();
  }
};

export const deleteUniversity = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await University.findByIdAndDelete(id)
      .lean()
      .exec();
    console.log(data);
    return res.status(200).json({ data });
  } catch (e) {
    console.log(e);
    res.status(500).end();
  }
};

export const putUniversity = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await University.findByIdAndUpdate(id, req.body, {
      new: true
    })
      .lean()
      .exec();
    console.log(data);
    return res.status(200).json({ data });
  } catch (e) {
    console.log(e);
    res.status(500).end();
  }
};
