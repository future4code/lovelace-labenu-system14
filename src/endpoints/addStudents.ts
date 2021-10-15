import { Request, Response } from "express";
import connection from "../connection";

export default async function addStudents(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const { class_id,student_id } = req.body;

    await connection("student_class").insert({class_id,student_id});

    res.status(201).end();
  } catch (error) {
    res.status(500).end();
  }
}