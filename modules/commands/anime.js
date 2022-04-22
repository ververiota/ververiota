  module.exports.config = {
	  name:"anime",
	   version: "1.0.0",
	   hasPermssion: 0,
	credits: "Toàn",
	description: "Random video tiktok kênh snauzk",
	commandCategory: "Hình ảnh",
	cooldowns: 3
};
module.exports.run = async ({ api, event,}) => {
	const axios = require('axios');
	const request = require('request');
	const fs = require("fs");
	axios.get('https://www.api-adreno.tk/wallpaper').then(res => {
	let ext = res.data.url.substring(res.data.url.lastIndexOf(".") + 1);
	let callback = function () {
					api.sendMessage({ body: `ảnh anime cho bạn đây`,
						attachment: fs.createReadStream(__dirname + `/cache/anime.${ext}`)
					}, event.threadID, () => fs.unlinkSync(__dirname + `/cache/anime.${ext}`), event.messageID);
				};
				request(res.data.url).pipe(fs.createWriteStream(__dirname + `/cache/anime.${ext}`)).on("close", callback);
			})
}