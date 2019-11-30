import { ProjectEvent } from "../model";

export const getALLProjectEvent = async (req, res) => {
  try {
    const data = await ProjectEvent.find(req.query)
      .populate({
        path: "college",
        select: "name",
        populate: { path: "university", select: "name" }
      })
      .lean()
      .exec();

    return res.status(200).json({
      data
    });
  } catch (e) {
    res.status(400).end();
  }
};

export const addProjectEvent = async (req, res) => {
  try {
    const newProjectEvent = await ProjectEvent.create(req.body);
    const data = await ProjectEvent.findById(newProjectEvent._id)
      .populate({
        path: "college",
        select: "name",
        populate: { path: "university", select: "name" }
      })
      .lean()
      .exec();
    return res.status(201).json({ data });
  } catch (e) {
    res.status(500).end();
  }
};

export const deleteProjectEvent = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await ProjectEvent.findByIdAndDelete(id)
      .lean()
      .exec();
    return res.status(200).json({ data });
  } catch (e) {
    res.status(500).end();
  }
};

export const putProjectEvent = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await ProjectEvent.findByIdAndUpdate(id, req.body, {
      new: true
    })
      .populate({
        path: "college",
        select: "name",
        populate: { path: "university", select: "name" }
      })
      .lean()
      .exec();

    return res.status(200).json({ data });
  } catch (e) {
    res.status(500).end();
  }
};

export const getLast4ProjectEvent = async (req, res) => {
  try {
    const data = await ProjectEvent.find(req.query)
      .sort({ createdAt: -1 })
      .limit(4)

      .lean()
      .exec();

    return res.status(200).json({
      data
    });
  } catch (e) {
    res.status(400).end();
  }
};
