import { Router } from "express";
import {
  addCollege,
  deleteCollege,
  putCollege,
  addUniversity,
  deleteUniversity,
  putUniversity,
  addProjectEvent,
  putProjectEvent,
  deleteProjectEvent
} from "../controllers";

const router = Router();

router.post("/university", addUniversity);
router.delete("/university/:id", deleteUniversity);
router.put("/university/:id", putUniversity);

router.post("/college", addCollege);
router.delete("/college/:id", deleteCollege);
router.put("/college/:id", putCollege);

router.post("/project-event", addProjectEvent);
router.delete("/project-event/:id", deleteProjectEvent);
router.put("/project-event/:id", putProjectEvent);

export default router;
