
module.exports.config = {
	name: "lienquanmaker",	
	version: "1.0.0", 
	hasPermssion: 0,
	credits: "Rip05",
	description: "Tạo ảnh liên quân cực vjp =))", 
	commandCategory: "Tạo ảnh",
	usages: "reply",
	cooldowns: 5,
  dependencies: {tinyurl: ""}
};

     let pathsave = __dirname + `/cache/lienquanmaker.png`;

module.exports.run = async function ({ api, event, args}) {
const axios = require('axios');
const fs = require("fs-extra");
const qs = require("querystring");
if ("message_reply" !== event.type) return api.sendMessage("Reply ảnh đệ tạo ảnh liên quân cực vjp nhé =))", event.threadID, event.messageID);
if (!event.messageReply.attachments || 0 == event.messageReply.attachments.length)
  return api.sendMessage("Định dạng ảnh không được hỗ trợ!", event.threadID, event.messageID);
    event.messageReply.attachments.length;
  var urlimg = await global.nodemodule.tinyurl.shorten(event.messageReply.attachments[0].url);
  const content = args.join(" ").split("|").map(item => item = item.trim());
  const text1 = content[0],text2 = content[1],text3 = content[2],text4 = content[3];
  let params = {text1, text2, text3, text4, urlimg};
    params = qs.stringify(params);
   api.sendMessage("Đang khởi tạo hình ảnh, vui lòng chờ đợi...", event.threadID, event.messageID);
    let imageBuffer;
    axios.get("https://dino-1.araxy.repl.co/test?bacsk=${text1}&tentuong=${text2}&tphuc=${text3}&ingame=${text4}&link=${urlimg}&fbclid=IwAR1jDV-AVgQLP8pjnxqyEKf5mdnM0U39izlzmTN_WEzXEntH5H1rHnvzKNM" + params, {responseType: "arraybuffer"})
    .then(data => {const imageBuffer = data.data;
      fs.writeFileSync(pathsave, Buffer.from(imageBuffer));
      api.sendMessage({body: `Chúc mừng ${text4} một ngày vui vẻ :3`, attachment: fs.createReadStream(pathsave)}, event.threadID, () => fs.unlinkSync(pathsave), event.messageID);})
    .catch(error => {let err;
      if (error.response) err = JSON.parse(error.response.data.toString());
      else err = error;
       return api.sendMessage(`Đã xảy ra lỗi ${err.error} ${err.message}`, event.threadID, event.messageID);})
};