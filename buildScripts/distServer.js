var express = require('express');
var path = require('path');
var open = require('open');
import compression from 'compression';

var app = express();
var port = 3000;
/*eslint-disable no-console */
app.use(compression());
app.use(express.static('dist'));


app.get('/users',function(req,res){
res.json([
{"id": 1,"firstName":24,"lastName":18,"email":"$1.34"},
{"id": 2,"firstName":28,"lastName":39,"email":"$2.96"},
{"id": 3,"firstName":44,"lastName":31,"email":"$3.72"}
]);
});

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.listen(port, function (err) {
    if (err) {
        console.log("error:" + err);
    } else {
        open('http://localhost:' + port);
    }
})

