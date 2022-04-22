/*
- Uptime tự động trên replit
- Hỗ trợ cho replit free
- Có thể bật tắt tính năng
- Thay đổi tên phía dưới config để hệ thống dễ nhận dạng nhé!
- Code by D-Jukie vui lòng không thay đổi credits, tks!
*/

const axios = require("axios");
const logger = require("./log");

const config = {
	status: true,
	name: 'Disme Project',
	timestamp: Date.now()
};

if(config.status == false) return
var username = process.env.REPL_OWNER
if(username !== undefined) {
	var urlRepl = `https://${process.env.REPL_SLUG}.${username}.repl.co`;
	logger('Bạn đang chạy bot ở link: ' + urlRepl, '[ ZERO TWO ]');
	if(process.env.REPLIT_CLUSTER == 'hacker') return logger('Bạn đang dùng Replit Hacker, hãy nhớ bật "Always On" để BOT luôn chạy nhé!', '[ CHECK HOST ]');
	logger('Bạn đang dùng Replit thường, hệ thống sẽ tự động kết nối với UptimeRobot cho bạn!', '[ ZRRO TWO ]');
	connectUptime(urlRepl, config.name);
};
async function connectUptime(url, name) {
	try {
		const res = (await axios.get(`https://api.sadgirlluytink.repl.co/uptimerobot/create?url=${url}&name=${name}`)).data;
		if(res.error) return logger('Đã hoàn thành kết nối Uptime cho bạn!', '[ UPTIME ]');
		return logger('Đã hoàn thành kết nối Uptime cho bạn!', '[ UPTIME ]');
	}
	catch {
		return logger('Server Uptime gặp sự cố, không thể bật uptime cho bạn!', '[ UPTIME ]');
	}	
};