module.exports.config = {
  name: "menu",
  version: "1.0.2",
  hasPermssion: 0,
  credits: "Mirai Team",//mod by Tuấn🐧
  description: "Hướng dẫn cho người mới",
  commandCategory: "Box",
  usages: "[Tên module]",
  cooldowns: 5,
  dependencies: {
    "axios": "",
    "request": "",
    "fs-extra": ""
  },
  envConfig: {
    autoUnsend: true,
    delayUnsend: 60
  }
};

module.exports.languages = {
	"vi": {
    "helpList": '◆━━ ZERO TWO ━━◆\n\n🤖 𝗛𝗶𝗲̣̂𝗻 𝘁𝗮̣𝗶 𝗱𝗮𝗻𝗴 𝗰𝗼́ %1 𝗹𝗲̣̂𝗻𝗵 𝗰𝗼́ 𝘁𝗵𝗲̂̉ 𝘀𝘂̛̉ 𝗱𝘂̣𝗻𝗴 𝘁𝗿𝗲̂𝗻 ZERO TWO\n➣「 𝗖𝗮́𝗰𝗵 𝘀𝘂̛̉ 𝗱𝘂̣𝗻𝗴 」\n𝗛𝗮̃𝘆 𝗻𝗵𝗮̂́𝗻 "%2menu + tên lệnh" 𝗱𝗲̂̉ 𝗯𝗶𝗲̂́𝘁 𝘁𝗵𝗲̂𝗺 𝗰𝗵𝗶 𝘁𝗶𝗲̂́𝘁!\n➣「 𝗟𝗶𝗲̂𝗻 𝗵𝗲̣̂ 𝗙𝗕 𝗔𝗱𝗺𝗶𝗻 」\nhttps://www.facebook.com/m.chuongnguyen 𝗻𝗲̂́𝘂 𝗰𝗮̂̀𝗻 𝗵𝗼̂̃ 𝘁𝗿𝗼̛̣\n➣ 𝗗𝗼̣𝗰 𝗱𝗶𝗲̂̀𝘂 𝗸𝗵𝗼𝗮̉𝗻 𝘀𝘂̛̉ 𝗱𝘂̣𝗻𝗴 𝗕𝗼𝘁 𝗱𝗲̂̉ 𝘁𝗿𝗮́𝗻𝗵 𝗯𝗶̣ 𝗯𝗮𝗻!\n\n◆━𝗧𝗵𝗮𝗻𝗸𝘀 𝗔𝗹𝗹 𝗨𝘄𝗨━◆\n',
		"moduleInfo": "🤖 𝗟𝗲̣̂𝗻𝗵「 %1 」\n⚡ 𝗠𝗼̂ 𝘁𝗮̉: %2\n\n➣ 𝗖𝗮́𝗰𝗵 𝘀𝘂̛̉ 𝗱𝘂̣𝗻𝗴: %3\n➣ 𝗧𝗵𝘂𝗼̣̂𝗰 𝗻𝗵𝗼́𝗺: %4\n➣ 𝗧𝗵𝗼̛̀𝗶 𝗴𝗶𝗮𝗻 𝗰𝗵𝗼̛̀: %5 𝗴𝗶𝗮̂𝘆 (𝘀)\n➣ 𝗤𝘂𝘆𝗲̂̀𝗻 𝗵𝗮̣𝗻: %6\n\n◆━━ ZERO TWO ━━◆\n",
		"user": "𝗡𝗴𝘂̛𝗼̛̀𝗶 𝗱𝘂̀𝗻𝗴",
        "adminGroup": "𝗤𝘂𝗮̉𝗻 𝘁𝗿𝗶̣ 𝘃𝗶𝗲̂𝗻 𝗻𝗵𝗼́𝗺",
        "adminBot": "𝗤𝘂𝗮̉𝗻 𝘁𝗿𝗶̣ 𝘃𝗶𝗲̂𝗻 𝗕𝗼𝘁"
	},
	"en": {
		"moduleInfo": "「 %1 」\n%2\n\n❯ Usage: %3\n❯ Category: %4\n❯ Waiting time: %5 seconds(s)\n❯ Permission: %6\n\n» Module code by %7 «",
		"helpList": '[ There are %1 commands on this bot, Use: "%2help nameCommand" to know how to use! ]',
		"user": "User",
        "adminGroup": "Admin group",
        "adminBot": "Admin bot"
	}
};

module.exports.handleEvent = function ({ api, event, getText }) {
	const { commands } = global.client;
	const { threadID, messageID, body } = event;
	
	if (!body || typeof body == "undefined" || body.indexOf("help") != 0) return;
	const splitBody = body.slice(body.indexOf("help")).trim().split(/\s+/);
	if (splitBody.length == 1 || !commands.has(splitBody[1].toLowerCase())) return;
	const threadSetting = global.data.threadData.get(parseInt(threadID)) || {};
	const prefix = (threadSetting.hasOwnProperty("PREFIX")) ? threadSetting.PREFIX : global.config.PREFIX;
  return api.sendMessage(getText("moduleInfo", command.config.name, command.config.description, `${prefix}${command.config.name} ${(command.config.usages) ? command.config.usages : ""}`, command.config.commandCategory, command.config.cooldowns, ((command.config.hasPermssion == 0) ? getText("user") : (command.config.hasPermssion == 1) ? getText("adminGroup") : getText("adminBot")), command.config.credits), threadID, messageID);
}

module.exports.run = function({ api, event, args, getText }) {
  const axios = require('axios');
  const request = global.nodemodule['request'];
  const fs = require("fs");
	const { commands } = global.client;
	const { threadID, messageID } = event;
	const command = commands.get((args[0] || "").toLowerCase());
	const threadSetting = global.data.threadData.get(parseInt(threadID)) || {};
	const { autoUnsend, delayUnsend } = global.configModule[this.config.name];
	const prefix = (threadSetting.hasOwnProperty("PREFIX")) ? threadSetting.PREFIX : global.config.PREFIX;
  if (!command) {
		const command = commands.values();
		var group = [], msg = "◆━━𝗕𝗔̉𝗡𝗚 𝗟𝗘̣̂𝗡𝗛━━◆\n\n";
		for (const commandConfig of command) {
			if (!group.some(item => item.group.toLowerCase() == commandConfig.config.commandCategory.toLowerCase())) group.push({ group: commandConfig.config.commandCategory.toLowerCase(), cmds: [commandConfig.config.name] });
			else group.find(item => item.group.toLowerCase() == commandConfig.config.commandCategory.toLowerCase()).cmds.push(commandConfig.config.name);
		}
    
		group.forEach(commandGroup => msg += `➣ 𝗧𝗵𝘂𝗼̣̂𝗰 𝗻𝗵𝗼́𝗺: ${commandGroup.group.charAt(0).toUpperCase() + commandGroup.group.slice(1)}\n𝗟𝗲̣̂𝗻𝗵 𝗴𝗼̂̀𝗺 𝗰𝗼́: ${commandGroup.cmds.join(' • ')}\n\n`);

    const gai = ["Em có thể đi theo anh được không? Bởi vì em luôn được cha mẹ bảo là phải theo giấc mơ của mình.",

        "Bầu trời xanh, làn mây trắng. Anh yêu nắng hay yêu em?.",

        "Nhờ có nắng mới thấy cầu vồng. Nhờ có anh mới thấy màu hạnh phúc.",

        "Anh yêu ơi ới ời. Anh đang ở đâu?.",

        "Soái ca là của ngôn tình. Còn anh thì chỉ của mình em thôi.",

        "Giữa cuộc đời hàng ngàn cám dỗ.Em chỉ cần bến đỗ anh thôi.",

        "Bồ công anh bay khi có gió. Em chỉ cười vì ở đó có anh.",

        "Chỉ cần anh nói yêu, em sẽ bám theo anh suốt đời. Cô gái đang muốn muốn bật đèn xanh đấy. Cô nàng muốn gợi ý là mình chung thủy lắm đấy. Anh cứ thử tỏ tình mà xem.",

        "Ba mươi chưa phải là Tết. Không làm bạn đâu phải là hết, còn có thể làm người yêu mà.",

        "Ai nào cho mượn avatar để em đỡ cô đơn đi.",

        "Nắng đã có mũ, mưa đã có ô, còn em sẽ có ai?.",

        "Chồng tương lai ơi, em chờ anh hơi lâu rồi đấy.",

        "Trời đổ mưa rồi sao anh chưa đổ em?.",

        "Dạo này anh có thấy mỏi chân? Sao cứ đi trong tim em mãi.",

        "Anh ơi, có nóng không? Tim em đang cháy nè.",

        "Anh gì ơi ! Anh đánh rơi người yêu này.",

        "Sao anh cười mãi thế. Da em đen mất rồi.",

        "Ủa đêm rồi mà sao tim mình vẫn đầy nắng thế?.",

        "Tim anh còn chỗ không? Em muốn chuyển nhà mà chưa tìm thấy chỗ.",

        "Uống nhầm 1 ánh mắt cơn say theo cả đời!.",

        "Em thích anh còn nhiều hơn muối ở biển…",

        "Em đọc hết “Mười vạn câu hỏi vì sao” những vẫn không hiểu được vì sao em thích anh nhiều thế.",

        "Đường thì dài, chân em thì ngắn. Phải đi bao xa mới có thể tìm thấy anh.",

        "Em xinh tươi, nhưng em chưa thuộc về ai.",

        "Chán thả thính rồi, ai cưa để em đổ một lần coi.",

        "Có phải cuộc sống quá bon chen nên anh mãi vẫn chưa tìm đến em?.",

        "Nếu có thể hãy để em một lần được yêu anh, được không?.",

        "Tuổi tác với chị không quan trọng, vấn đề là em đã có bằng lái chưa?.",

        "Trăng lên đỉnh núi trăng tà. Anh yêu em thật hay là yêu chơi?.",

        "Nếu ngoài kia nhiều bão tố, thì về đây với em.",

        "Em không muốn ngủ muộn, chỉ là đang chờ ai đó chúc ngủ ngon thôi.",

        "Cây đa, giếng nước sân đinh. Khi nào em hết một mình đây anh?.",

        "Cả thế giới này ai cũng yêu nhau chỉ có riêng mình em hẩm hiu một góc.",

        "Cần ai đó quan tâm để thấy mình được yêu thương.",

        "Anh gì ơi,cho em mượn đèn pin được không? Trời tối quá, em không tìm thấy đường vào tim anh.",

        "Say rượu say bia làm gì? Anh say em đi này.",

        "Thách ai nói yêu em đấy.",

        "Em ăn BƠ muốn vỡ bụng rồi đây ạ. Làng Face ai HẢO TÂM làm ơn cứu em với. Chỉ cần cái status này 500 like, bụng em lại lành!.",

        "Lâu rồi chưa biết cảm giác được đi ăn đi xem phim như thế nào, bài vở nhiều quá. Hôm nay rảnh có ai mời không nhỉ?.",

        "Rảnh quá có ai muốn đi chơi với mình không …",

        "Này anh, anh xem hộ em xem trong mắt em có gì hộ cái. Thấy chưa, toàn là hình bóng anh đấy!.",

        "Anh biết nhiều về Thuốc Mê không? Còn em gói gọn lại đó là anh.",

        "Anh có thấy dạo này da em đen không? Vì mải nhìn nụ cười Toả Nắng của anh đấy.",

        "Xin lỗi anh gì ơi anh đi đứng kiểu gì thế ngã vào trái tim em rồi kìa!.",

        "Anh có biết cài Win không ạ? Cài hộ em cái hệ điều hành nào mà có giao diện chính là Anh được không!.",

        "Em nghĩ chúng mình có điểm chung đấy. Đó là anh yêu bản thân anh, còn em thì cũng yêu anh!.",

        "Anh gì ơi cho em mượn cái đèn pin được không. Trời tối quá em không biết đường nào để đi đến trái tim anh.",

        "Anh biết sửa Tivi không. Sao kênh nào cũng chiếu toàn những nhung nhớ về anh thế này!.",

        "Anh ơi anh có hiểu rõ đường đi lối lại ở đây không. Chỉ hộ em xem đi đường nào để thoát khỏi nỗi nhớ anh cái!.",

        "Này anh gì ơi, anh có Anh hay Em Trai gì không? Em không tin là trên đời này có tận 2 thiên thần đâu!",

        "Ai dám nói nơi hạnh phúc nhất là thiên đường. Người đó chắc hẳn không biết đến khoảnh khắc mỗi khi anh cười rồi!.",

        "Nếu không có gì là mãi mãi, anh có thể là “không có gì” của em được không?.",
      "Em có muốn con mình sau này có ADN của anh không?.",

        "Em có biết rằng anh nhớ em nhiều lắm không? Anh ăn không ngon nhưng ngủ như điên, anh đi giầy quên đi tất, ăn sáng quên đánh răng, anh dùng xăng vo gạo, anh khờ khạo cũng chỉ vì yêu em đó.",

        "Em ơi! Em là nghề gì đấy….? Sao đêm nào em cũng hiện lên trong giấc mơ của anh vậy? Anh chẳng biết làm thế nào nữa cả. Làm người yêu anh em nhé!.",

        "Em ơi ! Khi em đọc tin nhắn này, em nợ anh cuộc hẹn. Xóa tin nhắn này, em nợ anh cuộc tình. Lưu tin là em nợ anh 1 nụ hôn. Trả lời anh, em nợ anh tất cả. Còn nếu em không trả lời thì em đã yêu anh !!! hihi.",

        "Ðiều duy nhất đôi mắt em chưa nói cho anh biết là tên của em.",
                  
        "Anh thà được một lần ngửi được mùi tóc thơm của em. Anh thà được mộ lần xiết chặt bàn tay của em, anh thà được một lần nếm hương vị ngọt từ nụ hôn của em còn hơn là sống bất tử mà không được điều ấy.",
                  
        "Chứng nghiện thức đêm cùng nỗi nhớ em, anh đã cố nhưng sửa không được.",
                  
        "Anh muốn gửi tin nhắn này đến em hôm nay vì hôm nay anh cảm thấy yêu em nhiều đến bất thường.",
        
        " Anh ghét em lắm em biết không? Vì suốt ngày em cứ bay lượn trong đầu anh, làm anh khôn nghĩ được việc gì cả…huhu."
];
  const text = `「 𝗧𝗛𝗜́𝗡𝗛 」: ${gai[Math.floor(Math.random()*gai.length)]}`;
    return axios.get('https://jrt-api.j-jrt-official.repl.co/gai').then(res => {
    let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
    var callback = function () {
		return api.sendMessage({body: msg + getText("helpList", commands.size, prefix) + text, attachment: fs.createReadStream(__dirname + `/cache/menu.${ext}`)
        }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/menu.${ext}`), messageID, threadID, async (error, info) =>{
			if (autoUnsend) {
				await new Promise(resolve => setTimeout(resolve, delayUnsend * 1000));
        return api.unsendMessage(info.messageID);
      } else return;
  });
        }; request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/menu.${ext}`)).on("close", callback);
     });
                                                }
  axios.get('https://jrt-api.j-jrt-official.repl.co/gai').then(res => {
    let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
    let callback = function () {
   return api.sendMessage({body:getText("moduleInfo", command.config.name, command.config.description, `${prefix}${command.config.name} ${(command.config.usages) ? command.config.usages : ""}`, command.config.commandCategory, command.config.cooldowns, ((command.config.hasPermssion == 0) ? getText("user") : (command.config.hasPermssion == 1) ? getText("adminGroup") : getText("adminBot")), command.config.credits), attachment: fs.createReadStream(__dirname + `/cache/menu.${ext}`)
        }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/menu.${ext}`), messageID, threadID);
    };
    request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/menu.${ext}`)).on("close", callback);
});
}