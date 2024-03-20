import { Request, Response, NextFunction } from 'express';

function Middleware2 ( request: Request, response: Response, next: NextFunction ) {
    request.header[ 'Accept' ] = 'application/json';
    console.log( 'Message from middleware2' );
    next();
}

export default Middleware2;