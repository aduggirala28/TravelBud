const express=require("express"),
GooglePlaces=require('googleplaces'),
mongoose=require('mongoose');
config=require('./config/key')
const app= express();
const port=process.env.port||3200

var googleplaces=new GooglePlaces(config.places_key,config.placesformat)

parameters = {
    query: "restaurants in New york"
};

app.get('/',function(req,res){
    googleplaces.textSearch(parameters, function (error, response) {
        console.log(response)
        res.send(response)
        
    });
    });

app.listen(port,function(){
    console.log('API is running on port ',port);
    });
    

