module.exports.config = {
    name: "console",
    version: "1.0.0",
    hasPermssion: 1,
    credits: "Quốc Tuấn",
    description: "",
    commandCategory: "Hệ thống",
    usages: "",
    cooldowns: 0
};
module.exports.handleEvent = async function ({ api, args, Users, event, Threads, utils, client }) {
    let { messageID, threadID, senderID, mentions } = event;
  const threadInfo = await api.getThreadInfo(event.threadID)
    var threadName = threadInfo.threadName||"Tên không tồn tại";
    const chalk = require('chalk');
     const moment = require("moment-timezone");
var time= moment.tz("Asia/Ho_Chi_Minh").format("DD/MM/YYYY || HH:mm:s");
    var d = new Date();
    const cc = d.getDay();
    const ss = d.getYear();
    const yy = d.getMonth();
    switch (cc) {
        case 0: {
            textt = "Chủ Nhật"
            break;
        }
        case 1: {
            textt = "Thứ Hai"
            break;
        }
        case 2: {
            textt = "Thứ Ba"
            break;
        }
        case 3: {
            textt = "Thứ Tư"
            break;
        }
        case 4: {
            textt = "Thứ Năm"
            break;
        }
        case 5: {
            textt = "Thứ Sáu"
            break;
        }
        default: {
            textt = "Thứ Bảy"
        }
    }
    const name = await Users.getNameUser(event.senderID)
    var msg = event.body||"Ảnh, video hoặc ký tự đặc biệt";
    var job = ["FF9900", "FF6600", "FF99CC", "FF99FF", "33CCFF", "FFFF66", "FF00FF", "87CEFF", "00CED1", "8B7D7B"];
    var random1 = Math.floor(Math.random()*12345678).toString(16);
    var random = job[Math.floor(Math.random() * job.length)]
    console.log(chalk.hex("#" + random)(`Tên: ${name}`) + " | " + chalk.hex("#" + random)(`Box: ${threadName}`) + " | " + chalk.hex("#" + random1)(`Tin nhắn: ${msg}`) + `\n` + chalk.red(`${textt} ${time}`));
}
module.exports.run = async function ({ api, args, Users, event, Threads, utils, client }) {
  
}
