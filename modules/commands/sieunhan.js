var request = require("request");const { readdirSync, readFileSync, writeFileSync, existsSync, copySync, createWriteStream, createReadStream } = require("fs-extra");
    module.exports.config = {
        name: "sieunhan ",
        version: "1.0.0",
        hasPermssion: 0,
        credits: "binne",
        description: "sieunhan gao",
        commandCategory: "Trò chơi",
        usages: "sieunhan + tên + tìn :v",
        cooldowns: 5
    };

    module.exports.onLoad = async function () {
        if (!existsSync(__dirname + '/cache/trang.jpg')) {
            request('https://i.imgur.com/o6K6STA.jpg').pipe(createWriteStream(__dirname + '/cache/trang.jpg'));
        }
        if (!existsSync(__dirname + '/cache/do.jpg')) {
            request('https://i.imgur.com/6yB8LUg.jpg').pipe(createWriteStream(__dirname + '/cache/do.jpg'));
        }
        if (!existsSync(__dirname + '/cache/bac.jpg')) {
            request('https://i.imgur.com/nJdHgFV.jpg').pipe(createWriteStream(__dirname + '/cache/bac.jpg'));
        }
        if (!existsSync(__dirname + '/cache/vang.jpg')) {
            request('https://i.imgur.com/9oT0Pwk.jpg').pipe(createWriteStream(__dirname + '/cache/vang.jpg'));
        }
        if (!existsSync(__dirname + '/cache/bien.jpg')) {
            request('https://i.imgur.com/GouAB46.jpg').pipe(createWriteStream(__dirname + '/cache/bien.jpg'));
        }
        if (!existsSync(__dirname + '/cache/den.jpg')) {
            request('https://i.imgur.com/fvCORQp.jpg').pipe(createWriteStream(__dirname + '/cache/den.jpg'));
        }
        if (!existsSync(__dirname + '/cache/snhangao.gif')) {
            request('https://i.imgur.com/JSa5heh.gif').pipe(createWriteStream(__dirname + '/cache/snhangao.gif'));
        }
    };

    async function get(one,two,three) {
        var x1;
            switch (one) {
                case "trang": x1 = "⚪";
                    break;
                case "do": x1 = '🔴';
                    break;
                case "bac": x1 = '🔘';
                    break;
                case "vang": x1 = '🟡';
                    break;
                case "bien": x1 = '🔵';
                    break;
                case "den": x1 = '⚫';
            }
        var x2;
            switch (two) {
                case "trang": x2 = "⚪";
                    break;
                case "do": x2 = '🔴';
                    break;
                case "bac": x2 = '🔘';
                    break;
                case "vang": x2 = '🟡';
                    break;
                case "bien": x2 = '🔵';
                    break;
                case "den": x2 = '⚫';
            }
        var x3;
            switch (three) {
                case "trang": x3 = "⚪";
                    break;
                case "do": x3 = '🔴';
                    break;
                case "bac": x3 = '🔘';
                    break;
                case "vang": x3 = '🟡';
                    break;
                case "bien": x3 = '🔵';
                    break;
                case "den":x3 = '⚫';
            }
        var all = [x1, x2, x3];
    return full = all;
    }
var full = [];
    module.exports.run = async function({ api, event, args, Currencies }) { var out = (msg) => api.sendMessage(msg,event.threadID, event.messageID);
                                                                           const checkmoney = (await Currencies.getData(event.senderID)).money;
        const slotItems = ["trang", "do", "bac", "vang", "bien", "den"];
            const moneyUser = (await Currencies.getData(event.senderID)).money;
                var moneyBet = parseInt(args[1]);
                    if (!args[0] || !isNaN(args[0])) return api.sendMessage("[𝑷𝑮🐧] => Hãy Bấm : /sieunhan [trắng/đỏ/bạc/vàng/biển/đen] [số tiền]",event.threadID, event.messageID);
                    if (isNaN(moneyBet) || moneyBet <= 0) return api.sendMessage("[𝑷𝑮🐧] => Số tiền đặt cược không được để trống hoặc là số tiền âm", event.threadID, event.messageID);
                if (moneyBet > moneyUser) return api.sendMessage("[𝑷𝑮🐧] => Số tiền bạn đặt lớn hơn số dư của bạn!", event.threadID, event.messageID);
            if (moneyBet < 1000) return api.sendMessage("[𝑷𝑮🐧] => Số tiền đặt không được dưới 1000 đô!", event.threadID, event.messageID);
        var number = [], win = false;
    for (let i = 0; i < 3; i++) number[i] = slotItems[Math.floor(Math.random() * slotItems.length)];
        var itemm;
            var icon;
                switch (args[0]) {
                    case "trắng":
                        case "Trắng": itemm = "trang";
                                icon = '⚪';
                            break;
                    case "đỏ": 
                        case "Đỏ": itemm = "do";
                                icon = '🔴';
                            break;
                    case "bạc":
                        case "Bạc": itemm = "bac";
                                icon = '🔘';
                            break;
                    case "vàng":
                        case "Vàng": itemm = "vang";
                                icon = '🟡';
                            break;
                    case "biển": 
                        case "Biển": itemm = "bien";
                                icon = '🔵';
                            break;
                    case "đen":
                        case "Đen": itemm = "den";
                                icon = '⚫';
                            break;
                                default: return api.sendMessage("[𝑷𝑮🐧] => Hãy Bấm : /sieunhan [trắng/đỏ/bạc/vàng/biển/đen] [số tiền]",event.threadID, event.messageID);
                }      
                await get(number[0],number[1],number[2]);
            api.sendMessage({body:"[𝑷𝑮🐧] => Đang Đập Đá, À Không Đang Lắc!",attachment: createReadStream(__dirname + "/cache/snhangao.gif")},event.threadID,async (error,info) => {
                await new Promise(resolve => setTimeout(resolve, 5 * 1500));
                    api.unsendMessage(info.messageID);
                          await new Promise(resolve => setTimeout(resolve, 100));
    var array = [number[0],number[1],number[2]];
        var listimg = [];
           for (let string of array) {
               listimg.push(createReadStream(__dirname + `/cache/${string}.jpg`));
           }
        if (array.includes(itemm)) {
            var i = 0;
                if (array[0] == itemm) i+=1;
                    if (array[1] == itemm) i+=1;
                if (array[2] == itemm) i+=1;
            if (i == 1) {
                var mon = parseInt(args[1]) + 100;  
                    await Currencies.increaseMoney(event.senderID, mon); console.log("s1")
                        return api.sendMessage({body:`[𝑷𝑮🐧] => Kết Quả : ${full.join("|")}\n[✤] => Được ${mon} Đô,Vì Có 1 ${icon}!\nSố tiền hiện tại: ${checkmoney+mon}$`,attachment: listimg},event.threadID, event.messageID);
            }
            else if (i == 2) {
                var mon = parseInt(args[1]) * 2; 
                    await Currencies.increaseMoney(event.senderID, mon); console.log("s2")
                        return api.sendMessage({body:`[𝑷𝑮🐧] => Kết Quả : ${full.join("|")}\n[✤] => Được ${mon} Đô,Vì Có 2 ${icon}!\nSố tiền hiện tại: ${checkmoney+mon}$`,attachment: listimg},event.threadID, event.messageID);
            }
            else if (i == 3) {
                var mon = parseInt(args[1]) * 3; 
                    await Currencies.increaseMoney(event.senderID, mon); console.log('s3')
                        return api.sendMessage({body:`[𝑷𝑮🐧] => Kết Quả : ${full.join("|")}\n[✤] => Được ${mon} Đô,Vì Có 3 ${icon}!\nSố tiền hiện tại: ${checkmoney+mon}$`,attachment: listimg},event.threadID, event.messageID);
            }
            else return api.sendMessage("[𝑷𝑮🐧] => Lỗi ! Code : XX1N",event.threadID,event.messageID);
        } else  {
            await Currencies.decreaseMoney(event.senderID, parseInt(args[1])); console.log('s4')
            return api.sendMessage({body:`[𝑷𝑮🐧] => Kết Quả : ${full.join("|")}\n[✤] => Trừ ${args[1]} Đô,Vì Có 0 ${icon}!\nSố tiền hiện tại: ${checkmoney-args[1]}$ `,attachment: listimg},event.threadID, event.messageID);
        }
            } ,event.messageID);
    };