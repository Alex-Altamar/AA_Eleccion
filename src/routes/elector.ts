import { Request, Response, Application } from "express";
import {ElectorController} from '../controller/elector.controller';

export class ElectorRoutes{
    public electorcontroller: ElectorController = new ElectorController();

    public routes(app: Application): void{
        app.route("/electores").get(this.electorcontroller.getAllElector)
    }

}