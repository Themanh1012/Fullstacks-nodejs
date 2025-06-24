import express from 'express' ;
import bodyParser from 'body-parser';  /* lay tham so */
// /user?id= 7 se chuyen vao body-parser
import viewEngine from './config/viewEngine.js';
import initWebRoute from './route/web.js';

import dotenv from 'dotenv';
dotenv.config(); /* lay bien moi truong tu file .env */

let app = express()     ; /* khoi tao express */

//config app
app.use(bodyParser.json()); /* lay du lieu dang json */
app.use(bodyParser.urlencoded({ extended : true})); /* lay du lieu dang url-encoded */

viewEngine(app);
initWebRoute(app);

let port = process.env.PORT || 6969;  // lay port 
app.listen(port, () =>{
    console.log("Backend NodeJS is running : " + port)
})