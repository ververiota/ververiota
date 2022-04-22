module.exports.config = {
	name: "reset",
	version: "1.0.0",
	hasPermssion: 2,
	credits: "manhIT",
	description: "Khởi động lại Bot",
	commandCategory: "Admin",
	usages: "",
	cooldowns: 5
};

module.exports.run = async ({ api, event, args }) => {
	const { threadID, messageID } = event;
  const cheerio = global.nodemodule["cheerio"];
  const permission = ["100011855520258", ];
	if (!permission.includes(event.senderID)) return api.sendMessage("cút m đéo phải chủ t", event.threadID, event.messageID);
	return api.sendMessage(`chờ t đi đái tí xong t quay lại :33`, threadID, () => process.exit(1));
}