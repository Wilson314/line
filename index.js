var linebot = require('linebot');
var express = require('express');
var path = require('path');

var bot = linebot({
    channelId: '1584510144',
    channelSecret: 'f18709ce63e40a2c104af1b28ec55466',
    channelAccessToken: '0j1ZpbH2fle4cvM5DdGKVpXSCFt3WeAJBx9IpM3Vxto6RCLx9++ZmW0rLpc8ATkjBDDXbRhl94ITeLQFPQH8C6NsbFuuALkHH5RnXe3m/n1v/jvCBtTg+PWvZPxRho90u/f9361zBixEuhVnQ2vX6gdB04t89/1O/w1cDnyilFU='
});

var message = {
    "你好":"我不好",
    "你是誰":"我是ㄐ器人"
};

bot.on('message', function (event) {
    var respone;
    if(message[event.message.text]){
        respone = message[event.message.text];
    }else{
        respone = '我不懂你說的 ['+event.message.text+']';
    }
	console.log(event.message.text + ' -> ' + respone);
    bot.reply(event.replyToken, respone);
});

const app = express();
const linebotParser = bot.parser();
app.post('/', linebotParser);

var server = app.listen(process.env.PORT || 8080, function () {
    var port = server.address().port;
    console.log("App now running on port", port);
});
