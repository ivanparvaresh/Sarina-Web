# Sarina.Web

Sarina Web is plugin to create web application based on sarina.  
Sarina.Web created by [JavadParvaresh](https://github.com/javadparvaresh).

Sarina.Web has build on top of [Express](http://expressjs.com/) and [Vash](https://github.com/kirbysayshi/vash).

## Table of contents
- [Quick Start](#quick-start)
- [Bugs and feature requests](#bugs-and-feature-requests)

## Quick start

Several quick start options are available:
- Clone the repo: `git clone https://github.com/javadparvaresh/Sarina-Web.git`
- Install with [npm](https://www.npmjs.com): `npm install sarina.web`


## Bugs and feature requests

Have a bug or a feature request? [please open a new issue](https://github.com/javadparvaresh/Sarina-Web/issues/new).

## The Basics
```javascript

var sarina=require("sarina");
var sarinaweb=require("sarina.web");

// create a sarina app by passing configuration
var app=sarina.create({
    web:{
        port:3000,
        webroot:"./webroot"Ï
    }
});
app.module(sarinaweb);

// start server easily by using server service
app.config("config",["sarina.web.config"],function(web){

    web.get("/",function(req,res){
        res.send("hello world");
    })
    web.get("/index",function(req,res){
        res.render("index",{title:"sample"});
    })
}); 

app.exec("run",["sarina.web.server"],function(webserver){
    return {
        run:function(resolve,reject){
            webserver.start().then(resolve).catch(reject);
        }
    } 
});

// finally we need to start app
app.start();

```
