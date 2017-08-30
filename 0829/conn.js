var mongo = require('mongodb');
var Server = mongo.Server;
var Db = mongo.Db;
var conf = {
    adr:'127.0.0.1',
    port:'27017',
    auto:{auto_reconnect:true},
    db:'blog'
}
var server = new Server(conf.adr,conf.port,conf.auto);
var db = new Db(conf.db,server);
function find(colName,fun,query){
    db.open(function(err){
        if(!err){
            db.collection(colName,function(err,col){
                if(!err){
                    col.find(query).toArray(function(err,data){
                        if(!err){
                            if(data.length>0){
                                fun('ok');
                            }else{
                                fun('err');
                            }
                        }else{
                            fun('err');
                        }
                        db.close();
                    })
                }
                
            })
        }
    })
}
exports.find = find;
