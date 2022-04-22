module.exports.config = {
	name: "sendmsg",
	version: "1.0.7",
	hasPermssion: 2,
	credits: "manhG mod by Tiadals", //Vui lòng giữ nguyên credit hoặc ăn đấm !
	description: "Gửi tin hắn đến người dùng(user)/nhóm(thread) bằng ID!",
	commandCategory: "Admin",
	usages: "ID [Text]",
	cooldowns: 5
};

	module.exports.run = async ({ api, event, args, getText, utils, Users }) => {
    const name = await Users.getNameUser(event.senderID)
    const moment = require("moment-timezone");
      var gio = moment.tz("Asia/Ho_Chi_Minh").format("DD/MM/YYYY || HH:mm:s");
		var idbox = args[0];
		var reason = args.slice(1);
		if (args.length == 0) api.sendMessage("Syntax error, use: sendmsg ID_BOX [lời nhắn]", event.threadID, event.messageID);
	else 
	    if(reason == "")api.sendMessage("Syntax error, use: sendmsg ID_BOX [lời nhắn]", event.threadID, event.messageID);
		if (event.type == "message_reply") {
			const request = global.nodemodule["request"];
			const fs = require('fs')
			const axios = require('axios')  
			var getURL = await request.get(event.messageReply.attachments[0].url);
			
					var pathname = getURL.uri.pathname;
			
					var ext = pathname.substring(pathname.lastIndexOf(".") + 1);
			
					var path = __dirname + `/cache/snoti`+`.${ext}`;
			
			
			var abc = event.messageReply.attachments[0].url;
				let getdata = (await axios.get(`${abc}`, { responseType: 'arraybuffer' })).data;
			
			  fs.writeFileSync(path, Buffer.from(getdata, 'utf-8'));	
	await api.sendMessage({body: `𝗧𝗶𝗺𝗲: ${gio}\n𝗧𝗛𝗔́𝗡𝗛 𝗖𝗛𝗜̉ 𝗥𝗜𝗘̂𝗡𝗚 𝗧𝗨̛̀ 𝗔𝗗𝗠𝗜𝗡\n𝗡𝗼̣̂𝗶 𝗱𝘂𝗻𝗴: ` + reason.join(" ") + `\nGửi đến từ Admin ${name}`, attachment: fs.createReadStream(path) }, idbox, () =>
			api.sendMessage(`${api.getCurrentUserID()}`, () =>
				api.sendMessage("Đã gửi lời nhắn với nội dung: " + reason.join(" "), event.threadID)));
} 
else {
		await api.sendMessage(`𝗧𝗶𝗺𝗲: ${gio}\n𝗧𝗛𝗔́𝗡𝗛 𝗖𝗛𝗜̉ 𝗥𝗜𝗘̂𝗡𝗚 𝗧𝗨̛̀ 𝗔𝗗𝗠𝗜𝗡\n𝗡𝗼̣̂𝗶 𝗱𝘂𝗻𝗴: ` + reason.join(" ") + `\nGửi đến từ Admin ${name}`, idbox, () =>
			api.sendMessage(`${api.getCurrentUserID()}`, () =>
				api.sendMessage("Đã gửi lời nhắn với nội dung: " + reason.join(" "), event.threadID)));

	}
}