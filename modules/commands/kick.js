
module.exports.config = {
	name: "kick",
	version: "1.0.0", 
	hasPermssion: 1,
	credits: "Mirai Team",//mod sen :3
	description: "Xoá người bạn cần xoá khỏi nhóm bằng cách tag",
	commandCategory: "Box", 
	usages: "[tag] [reply]", 
	cooldowns: 0,
};

module.exports.run = function({ api, event }) {
	var mention = Object.keys(event.mentions);
	return api.getThreadInfo(event.threadID, (err, info) => {
		if (err) return api.sendMessage("🌸Đã có lỗi xảy ra🌸",event.threadID);
		if (!info.adminIDs.some(item => item.id == api.getCurrentUserID())) return api.sendMessage('🌸Cần quyền quản trị viên nhóm\nVui lòng thêm và thử lại🌸', event.threadID, event.messageID);
		if(!mention[0]) return api.sendMessage("🌸Bạn phải tag người cần kick🌸",event.threadID);
    if(event.type == "message_reply") { uid = event.messageReply.senderID }
		if (info.adminIDs.some(item => item.id == event.senderID)) {
			for (let o in mention) {
				setTimeout(() => {
					api.removeUserFromGroup(mention[o],event.threadID) 
				},3000)
			}
		}
	})
}