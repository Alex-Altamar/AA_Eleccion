import { Request, Response, Application } from "express";
import {CandidatoController} from '../controller/candidato.controller';

export class CandidatoRoutes{
    public candidatocontroller: CandidatoController = new CandidatoController();

    public routes(app: Application): void{
        app.route("/candidatos").get(this.candidatocontroller.getAllCandidato)
    }

}