import { Request, Response } from "express";
import connection from "../connection";

export default async function createStudent(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const { id, nome, email, data_nasc } = req.body;

    await connection("student").insert({ id, nome, email, data_nasc });

    res.status(201).end();
  } catch (error) {
    res.status(500).end();
  }
}
