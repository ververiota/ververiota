module.exports.config = {
    name: "sdtphongthuy",
    version: "1.0.1",
    hasPermssion: 0,
    credits: "chinhle mod by Toàn", 
    description: "Tạo ảnh bìa",
    commandCategory: "Tiện ích",
    usages: "TEXT",
    cooldowns: 0,
    dependencies: {
        "fs-extra": "",
        "axios": ""
    }
};

module.exports.run = async function ({ api, event, args, Threads, Users, body, global, is}) {  
  const axios = require('axios');
   let tx = args.join(" ");
   try{
const res = await axios.get(`https://le31.glitch.me/other/sdtphongthuy?number=${encodeURIComponent(tx)}`);
return api.sendMessage(`Bốn số cuối: ${res.data.bonsoduoi}\n${res.data.soly}\n${res.data.ynghia}\n${res.data.ketluan}`, event.threadID, event.messageID)
}
 catch (e) {
        return out("Đã có lỗi xảy ra. Vui lòng thử lại !");
}
}