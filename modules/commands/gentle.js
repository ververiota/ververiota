module.exports.config = {
  name: "gentle",
  version: "0.2.7",
  hasPermssion: 0,
  credits: "Viet/Hoang",
  description: "Xem ảnh gái random trên gentle ∆",
  commandCategory: "Hình ảnh",
  usages: "gentle",
  cooldowns: 5
};
module.exports.run = async function({ api, event }) {
  const axios = require('axios');
  const request = require('request');
  const fs = require("fs");
  axios.get('https://api.apidata.repl.co/gentle').then(res => {
  let ext = res.data.link.substring(res.data.link.lastIndexOf(".") + 1);
  let count = res.data.count;
  let callback = function () {
          api.sendMessage({
            body: `🐬Gentle ∆🐬\n🐬Tổng số ảnh: ${count}`,
            attachment: fs.createReadStream(__dirname + `/cache/gentle.${ext}`)
          }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/gentle.${ext}`), event.messageID);
        };
        request(res.data.link).pipe(fs.createWriteStream(__dirname + `/cache/gentle.${ext}`)).on("close", callback);
      })
}