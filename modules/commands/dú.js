  module.exports.config = {
	name:"dú",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Toàn",
	description: "Random video tiktok kênh snauzk",
	commandCategory: "Hình ảnh",
	cooldowns: 3
};
module.exports.run = async ({ api, event, }) => {
	const axios = require('axios');
	const request = require('request');
	const fs = require("fs");
	axios.get('https://randomlinkapi.toan1511.repl.co/getLink1').then(res => {
	let ext = res.data.url.substring(res.data.url.lastIndexOf(".") + 1);
	let callback = function () {
					api.sendMessage({ body: `suốt ngày dú dú`,
						attachment: fs.createReadStream(__dirname + `/cache/dú.${ext}`)
					}, event.threadID, () => fs.unlinkSync(__dirname + `/cache/dú.${ext}`), event.messageID);
				};
				request(res.data.url).pipe(fs.createWriteStream(__dirname + `/cache/dú.${ext}`)).on("close", callback);
			})
}