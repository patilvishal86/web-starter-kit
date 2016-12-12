var express = require('express');
var path = require('path');
var open = require('open');

var app = express();
var port = 3000;
/*eslint-disable no-console */

//ES6 Module Style
import webpack from 'webpack';
import config from '../webpack.config.dev';
const compiler=webpack(config);

app.use(require('webpack-dev-middleware')(compiler,{
    noInfo:true,
    publicPath:config.output.publicPath
}));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.listen(port, function (err) {
    if (err) {
        console.log("error:" + err);
    } else {
        open('http://localhost:' + port);
    }
})

