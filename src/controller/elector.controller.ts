import { Request, Response } from "express";
import { Elector, ElectorI } from "../models/Elector";

export class ElectorController {
    public async getAllElector(req: Request, res: Response){
        try {
            const elector: ElectorI[] = await Elector.findAll()
            res.status(200).json()
        } catch (error) {
            
        }
    }
}