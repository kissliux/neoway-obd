/**
 * Created by liu.xing on 14-1-11.
 */
var debug = require('debug')('http')
    , http = require('http')
    , name = 'My App';

// fake app

debug('booting %s', name);

http.createServer(function(req, res){
    debug(req.method + ' ' + req.url);
    res.end('hello\n');
}).listen(3000, function(){
        debug('listening');
    });

// fake worker of some kind
