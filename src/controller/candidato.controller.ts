import { Request, Response } from "express";
import { Candidato, CandidatoI } from "../models/Candidato";

export class CandidatoController {
    public async getAllCandidato(req: Request, res: Response){
        try {
            const candidato: CandidatoI[] = await Candidato.findAll()
            res.status(200).json()
        } catch (error) {
            
        }
    }
}