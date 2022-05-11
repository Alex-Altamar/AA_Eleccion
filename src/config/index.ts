import express, {Application} from 'express';
import morgan from 'morgan';
import { Routes } from '../routes/index';



export class App {
    app: Application;

    constructor(
        private port?: number | string
    ){
        this.app = express();
        this.settings();
        this.widdlewares();
    }
    

    settings(): void{
        this.app.set('port', this.port || 3000);
    }

    async listen(){
        await this.app.listen(this.app.get('port'));
        console.log('Server on port: ', this.app.get('port'));
    }

    widdlewares() {
        this.app.use(morgan('dev'));
        this.app.use(express.json());
        
    }
}