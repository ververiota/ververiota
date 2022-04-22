module.exports.config = {
	name: "garena",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "ARAXY XD",
	description: "baner",
	commandCategory: "Tạo ảnh",
	usages: "",
	cooldowns: 5
};
module.exports.run = async ({ event,
    api,
    global,
    Config,
    logger,
    Threads,
    Users,
    args,
    body,
    is }) => {
  try {
        const axios = require("axios");
        const request = require("request");
        const fs = require("fs-extra");
    if( args[0] == "info" || args[0] == "find"){
       const ress = await axios.get(`https://dino-1.araxy.repl.co/info?id=${args[1]}`)
  
      var avav = (await axios.get(`${ress.data.data}`, {
          responseType: "stream"
        })).data;
        var msg = {
          body: `info hero ${args[1]}`,
          attachment: avav
        }
      return api.sendMessage(msg, event.threadID, event.messageID)
    }
        var ag = args.join(" ").split(' | ');
        var text1 = ag[0],
            text2 = ag[1];
    let imag = (await axios.get(`https://dino-1.araxy.repl.co/img?id=${text1}&name=${encodeURI(text2)}`, {
        responseType: "stream"
      })).data;
    var msg = { body: 'Ảnh Của Bạn Đây',
attachment: imag 
}
    return api.sendMessage(msg, event.threadID, event.messageID)
  } catch (e){
    console.log(e)
    api.sendMessage('Lỗi Rồi', event.threadID, event.messageID)
  }
}