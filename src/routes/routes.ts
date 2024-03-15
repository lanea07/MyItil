import { Router } from "express"

export const routes = Router();

/**
 * Routes for user entity
*/
// TODO: All routes requests must be authenticated trough a middleware
routes.get( '/', ( req, res ) => {
    res.send( JSON.stringify( { "message": "You have reached the API!" } ) );
} );
routes.get( '/user', ( req, res ) => {
    res.send( JSON.stringify( { "message": "You have reached the User API!" } ) );
} );