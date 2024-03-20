import express, { Express, Request, Response } from "express";
import * as path from "path";
import "reflect-metadata";
import { AppDataSource } from './data-source';
import cors from "cors";
import { routes } from './routes/routes';
import Middlewares from './middleware/index';

export class Server {

    private app: Express;
    private allowedOrigins = [ 'http://localhost:4200', 'http://localhost:8080' ];
    private options: cors.CorsOptions = { origin: this.allowedOrigins };

    constructor ( app: Express ) {
        this.app = app;
        this.app.use( cors( this.options ) );
        this.app.use( express.static( path.resolve( "./" ) + "/build/frontend/browser" ) );
        this.app.use( "/api", Middlewares, routes );
        this.app.get( "/", ( req: Request, res: Response ): void => {
            res.sendFile( path.resolve( "./" ) + "/build/frontend/browser/index.html" );
        } );
        AppDataSource.initialize();
    }

    public start ( port: number ): void {
        this.app.listen( port, () => console.log( `Server listening on port ${ port }!` ) );
    }

}

