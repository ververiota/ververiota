module.exports.config = {
	name: "videosex",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Quốc Tuấn",
	description: "Random video sex",
	commandCategory: "Hình ảnh",
	usages: "",
	cooldowns: 5
};

module.exports.run = async ({ api, event }) => {
	const axios = require('axios');
	const request = require('request');
	const fs = require("fs");
	axios.get('https://web-api.han666.repl.co/api/videosex.php').then(res => {
	let ext = res.data.data.substring(res.data.data .lastIndexOf(".") + 1);
	let callback = function () {
					api.sendMessage({
            body: `Video sex của cậu đây ❤️`,
						attachment: fs.createReadStream(__dirname + `/cache/videosex.${ext}`)
					}, event.threadID, () => fs.unlinkSync(__dirname + `/cache/videosex.${ext}`), event.messageID);
				};
				request(res.data.data ).pipe(fs.createWriteStream(__dirname + `/cache/videosex.${ext}`)).on("close", callback);
			})
    }