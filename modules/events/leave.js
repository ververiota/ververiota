module.exports.config = {
	name: "leave",
	eventType: ["log:unsubscribe"],
	version: "1.0.0",
	credits: "HĐGN",
	description: "Thông báo bot hoặc người rời khỏi nhóm có random gif/ảnh/video",
	dependencies: {
		"fs-extra": "",
		"path": ""
	}
};

module.exports.onLoad = function () {
    const { existsSync, mkdirSync } = global.nodemodule["fs-extra"];
    const { join } = global.nodemodule["path"];

	const path = join(__dirname, "cache", "leaveGif");
	if (existsSync(path)) mkdirSync(path, { recursive: true });	

	const path2 = join(__dirname, "cache", "leaveGif");
    if (!existsSync(path2)) mkdirSync(path2, { recursive: true });

    return;
}

module.exports.run = async function({ api, event, Users, Threads }) {
	if (event.logMessageData.leftParticipantFbId == api.getCurrentUserID()) return;
	const { createReadStream, existsSync, mkdirSync, readdirSync } = global.nodemodule["fs-extra"];
	const { join } =  global.nodemodule["path"];
	const { threadID } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Ho_Chi_Minh").format("DD/MM/YYYY || HH:mm:s");
  const hours = moment.tz("Asia/Ho_Chi_Minh").format("HH");
	const data = global.data.threadData.get(parseInt(threadID)) || (await Threads.getData(threadID)).data;
	const name = global.data.userName.get(event.logMessageData.leftParticipantFbId) || await Users.getNameUser(event.logMessageData.leftParticipantFbId);
	const type = (event.author == event.logMessageData.leftParticipantFbId) ? "đã 𝙫𝙞̀ 𝙠𝙝𝙤̂𝙣𝙜 𝙩𝙩 𝙣𝙚̂𝙣 𝙙𝙖̃ 𝙗𝙞̣ 𝙦𝙩𝙫 𝙙𝙖̂́𝙢 𝙠𝙝𝙤̉𝙞 𝙣𝙝𝙤́𝙢 🐳, 𝙑𝙞̃𝙣𝙝 𝙗𝙞𝙚̣̂𝙩 𝙚𝙢 𝙣𝙝𝙚́ ❤\n𝙣𝙤́ 𝙙𝙖̃ 𝙤𝙪𝙩 𝙫𝙖̀𝙤 𝙗𝙪𝙤̂̉𝙞 {session}\n{time}" : "đã 𝙫𝙞̀ 𝙠𝙝𝙤̂𝙣𝙜 𝙩𝙩 𝙣𝙚̂𝙣 𝙙𝙖̃ 𝙗𝙞̣ 𝙦𝙩𝙫 𝙙𝙖̂́𝙢 𝙠𝙝𝙤̉𝙞 𝙣𝙝𝙤́𝙢 🐳, 𝙑𝙞̃𝙣𝙝 𝙗𝙞𝙚̣̂𝙩 𝙚𝙢 𝙣𝙝𝙚́ ❤\n𝙣𝙤́ 𝙙𝙖̃ 𝙤𝙪𝙩 𝙫𝙖̀𝙤 𝙗𝙪𝙤̂̉𝙞 {session}\n{time}";
	const path = join(__dirname, "cache", "leaveGif");
	const gifPath = join(path, `${threadID}.gif`);
	var msg, formPush

	if (existsSync(path)) mkdirSync(path, { recursive: true });

	(typeof data.customLeave == "undefined") ? msg = "💞𝘾𝙤𝙣 𝙫𝙤̛̣ {name} đã {type} " : msg = data.customLeave;
	msg = msg.replace(/\{name}/g, name).replace(/\{type}/g, type).replace(/\{session}/g, hours <= 10 ? "𝙨𝙖́𝙣𝙜" : 
    hours > 10 && hours <= 12 ? "𝙩𝙧𝙪̛𝙖" :
    hours > 12 && hours <= 18 ? "𝙘𝙝𝙞𝙚̂̀𝙪" : "𝙩𝙤̂́𝙞").replace(/\{time}/g, time);  

	const randomPath = readdirSync(join(__dirname, "cache", "leaveGif"));

	if (existsSync(gifPath)) formPush = { body: msg, attachment: createReadStream(gifPath) }
	else if (randomPath.length != 0) {
		const pathRandom = join(__dirname, "cache", "leaveGif", `${randomPath[Math.floor(Math.random() * randomPath.length)]}`);
		formPush = { body: msg, attachment: createReadStream(pathRandom) }
	}
	else formPush = { body: msg }
	
	return api.sendMessage(formPush, threadID);
}