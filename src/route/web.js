import express from 'express';
import homeController  from  '../controller/homeController';

let router = express.Router(); /* router used express */

let initWebRoute = (app) => {
    router.get('/',  homeController.getHomePage); 


    router.get('/DanteManh', (req , res)=> {
        return res.send('Hello World width Dante');
    });


    return app.use('/' , router) ;

}

module.exports = initWebRoute; 