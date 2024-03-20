import { Request, Response, NextFunction } from 'express';

function Middleware1 ( request: Request, response: Response, next: NextFunction ) {
    request.headers[ 'Accept' ] = 'application/json';
    console.log( 'Message from middleware1' );
    next();
}

export default Middleware1;