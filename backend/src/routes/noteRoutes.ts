import express from "express";
import { uploadNote, getNotes } from "../controllers/noteController";
import { authenticateUser } from "../middleware/authMiddleware";

const router = express.Router();

router.post("/upload-note", authenticateUser, uploadNote);
router.get("/notes", getNotes);

export default router;