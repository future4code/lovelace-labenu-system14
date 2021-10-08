import { Request, Response } from "express";
import connection from "../connection";

export default async function AddTeacher(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const { class_id,teacher_id } = req.body;

    await connection("teatcher_class").insert({class_id,teacher_id});

    res.status(201).end();
  } catch (error) {
    res.status(500).end();
  }
}