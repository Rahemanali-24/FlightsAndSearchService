const express = require('express');
const bodyParser = require('body-parser');

const {PORT} = require('./config/server_config')


const setupAndStartServer = async()=>{
    //create the  express object
    const app = express();


    //middlewares

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));

    app.listen(PORT,()=>{
        console.log(`Server started at  ${PORT}`);
    });
}

setupAndStartServer();
