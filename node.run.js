/**
 * Created by lvly on 2016/3/3.
 */
var express=require('express');

var app=express();

app.use(express.static(__dirname+''));



app.listen(3000, function (req, res) {
    console.log('app is running at port 3000');
    //('app is running at port 3000')
});
