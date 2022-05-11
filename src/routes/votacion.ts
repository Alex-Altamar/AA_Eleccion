import { Request, Response, Application } from "express";
import {VotacionController} from '../controller/votacion.controller';

export class VotacionRoutes{
    public votacioncontroller: VotacionController = new VotacionController();

    public routes(app: Application): void{
        app.route("/votaciones").get(this.votacioncontroller.getAllVotacion)
        app.route("/votaciones").get(this.votacioncontroller.getOneVotacion)
        app.route("/votaciones").post(this.votacioncontroller.createVotacion)
        app.route("/votaciones").patch(this.votacioncontroller.updateVotacion)
        app.route("/votaciones").delete(this.votacioncontroller.deleteVotacion)
        
        
    }

}