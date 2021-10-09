import { Request, Response } from "express";
import connection from "../connection";

export default async function searchAgeByID(
    req: Request,
    res: Response
): Promise<void> {
    let errorCode = 400;
    try {

        const id = req.params.id;

        if(isNaN(Number(id))){
            errorCode = 422;
            throw new Error("Digite apenas valores numéricos")
        }

        const result = await connection.raw(`
        SELECT ROUND (DATADIFF("2021-01-01", data_nasc)/365) as idade
        FROM ESTUDANTE
        WHERE id = ${id};`);

        if(result[0].length === 0){
            errorCode = 404;
            throw new Error("Não encontrado");
        }

        res.status(200).send({estudante: result[0] [0]}
        )
    } catch (error: any) {
        res.status(errorCode).send({message: error.message});
    }
}