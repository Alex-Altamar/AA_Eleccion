import { Request, Response } from "express";
import { Votacion, VotacionI } from "../models/Votacion";

export class VotacionController {
    public async getAllVotacion(req: Request, res: Response){
        try {
            const votacion: VotacionI[] = await Votacion.findAll()
            res.status(200).json()
        } catch (error) {
            
        }
    }
    
    public async getOneVotacion(req: Request, res: Response){

    }
    
    public async createVotacion(req: Request, res: Response){
        
    }

    public async updateVotacion(req: Request, res: Response){
        
    }

    public async deleteVotacion(req: Request, res: Response){
        
    }
}