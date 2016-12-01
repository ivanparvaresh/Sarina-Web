var sarina=require("sarina");
var app=sarina.create({
    web:{
        "port":3000,
        "webroot":"./webroot"
    }
});

app.module(require("sarina.express"));
app.module(require("./../web"));

app.config("config",["sarina.web"],function(app){

    app.get("/index",function(req,res){
        res.render("index",{"title":"Test Title"});
    })

})

app.exec("run",["sarina.web.server"],function(server){
    return {
        run:function(resolve,reject){
            server.start().then(resolve).catch(reject);
        }
    }
})

app.start();