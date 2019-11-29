import { Router } from "express";
import {
  getALLUniversities,
  getAllColleges,
  getCollege,
  getALLProjectEvent,
  getLast4ProjectEvent
} from "../controllers";

const router = Router();

router.get("/university", getALLUniversities);

router.get("/college", getAllColleges);
router.get("/college/:id", getCollege);

router.get("/project-event", getALLProjectEvent);

router.get("/project-event/last", getLast4ProjectEvent);

export default router;
