import { Request, Response } from "express";
import connection from "../connection";

export default async function createStudent(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const { id, nome, data_inicio, data_final, modulo } = req.body;

    await connection("class").insert({
      id,
      nome,
      data_inicio,
      data_final,
      modulo,
    });

    res.status(201).end();
  } catch (error) {
    res.status(500).end();
  }
}
