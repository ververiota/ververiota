module.exports.config = {
    name: "tx",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "Tòn",
    description: "Tài Xỉu",
    commandCategory: "Trò chơi",
    usages: "/taixiu + [ Tài hoặc Xỉu ] + [ Tiền ]",
    cooldowns: 5
};
module.exports.run = async ({
    api,
    event,
    args,
    Users,
    Currencies
}) => {
    const axios = require("axios");
    const fs = require("fs-extra");
    const chon = encodeURIComponent(args[0]);
    const choose = args[0];
    const checkmoney = (await Currencies.getData(event.senderID)).money;
    if (choose != 'tài' && choose != 'xỉu') return api.sendMessage("Chỉ đặt cược tài hoặc xỉu!", event.threadID, event.messageID);
    if (!args[0]) return api.sendMessage("Bạn cần đặt cược [ Tài hoặc Xỉu ] ", event.threadID , event.messageID);
    if (!parseInt(args[1])) return api.sendMessage("Thiếu tiền đặt cược", event.threadID, event.messageID);
    if (parseInt(args[1]) < 50) return api.sendMessage("Số tiền đặt cược phải lớn hơn hoặc bằng 50", event.threadID, event.messageID);
    if (checkmoney < 50) return api.sendMessage("Số dư của bạn không đủ 50$", event.threadID, event.messageID);
    const res = await axios.get(`https://apixin-1.toannguyen73.repl.co/taixiu?chon=${chon}`);
    const images = [];
    const a = res.data.dices;
    const b = res.data.results;
    for (var i in res.data.image) {
    let path = __dirname + `/cache/${i}.png`;
    let imgs = (await axios.get(`${res.data.image[i]}`, { responseType: "arraybuffer" })).data;
    fs.writeFileSync(path, Buffer.from(imgs, "utf-8"));
    images.push(fs.createReadStream(path));
                                  }
    if (b == "thắng") {
    var congtien = parseInt(args[1]) * 2;
    await Currencies.increaseMoney(event.senderID, congtien);
    api.sendMessage({
    attachment: images,
    body: `Kết quả : ${a}\nBạn đã thắng và số tiền nhận được là ${congtien}\nSố tiền hiện tại ${checkmoney+congtien}`}, event.threadID , event.messageID);
    } else {
    await Currencies.decreaseMoney(event.senderID, parseInt(args[1]))
    api.sendMessage({
    attachment: images,
    body: `Kết quả : ${a}\nBạn đã thua và bị trừ ${parseInt(args[1])}\nSố tiền hiện tại ${checkmoney-parseInt(args[1])}$`}, event.threadID , event.messageID);
          }
   }