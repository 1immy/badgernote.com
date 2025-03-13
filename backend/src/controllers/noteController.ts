import { Request, Response } from "express";
import Note from "../models/Note";

export const uploadNote = async (req: Request, res: Response) => {
  try {
    const { title, description, fileUrl, userId } = req.body;
    const note = await Note.create({ title, description, fileUrl, userId });
    res.status(201).json(note);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

export const getNotes = async (req: Request, res: Response) => {
  try {
    const notes = await Note.findAll();
    res.json(notes);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};