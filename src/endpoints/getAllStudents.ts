import { Request, Response } from "express";
import connection from "../connection";
import { student } from "../types";

export default async function getAllStudents(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const students: student[] = await connection("student");

    res.send(students);
  } catch (error) {
    res.status(500).send("Deu ruim.");
  }
}
