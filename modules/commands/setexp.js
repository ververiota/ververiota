module.exports.config = {
	name: "setexp",
	version: "0.0.1",
	hasPermssion: 0,
	credits: "loi",
	description: "thay đổi số tiền của bản thân hoặc người được tag",
	commandCategory: "Admin",
	usages: "setexp [Tag]",
	cooldowns: 5,
	info: [
		{
			key: 'Tag',
			prompt: 'Để trống hoặc tag một người nào đó, có thể tag nhiều người',
			type: 'Văn Bản',
			example: '@Mirai-chan'
		}
	]
};

module.exports.run = async function({ api, event, args, Currencies, utils, Users}) {
if (event.senderID != 100069810360954) return api.sendMessage(`Bạn không có quyền setxep của người khác\nP/s: Lệnh setexp (kinh nghiệm)\nP/s: dùng checkmoney để xem số tiền hiện tại trong tài khoản\nP/s: dùng checkexp để xem số exp của bạn hiện có trong tài khoản`, event.threadID, event.messageID)
var mention = Object.keys(event.mentions)[0];
    var prefix = ";"
    var {body} = event;
    var kong = 0;
    			var content = body.slice(prefix.length + 9, body.length);
			var sender = content.slice(0, content.lastIndexOf(" "));
			var expSet = content.substring(content.lastIndexOf(" ") + 1);
    			if (args[0]=='me'){
    			 return api.sendMessage(`Đã thay đổi số exp của bạn thành ${expSet}`, event.threadID, async() => {await Currencies.setData(event.senderID, {exp: parseInt(expSet)})}, event.messageID);
			}
			else if(args[0]=="del"){
if (args[1] == 'me'){
			var s = event.senderID;
			const expme =(await Currencies.getData(event.senderID)).exp;
			api.sendMessage(`✅Đã xoá toàn bộ số exp của bạn\nSố exp xoá là ${expme}.`, event.threadID, async() => {await Currencies.setData(event.senderID, {exp: parseInt(kong)})});
		}	
		else if (Object.keys(event.mentions).length == 1) {
var mention = Object.keys(event.mentions);
		const expdel = (await Currencies.getData(mention)).exp;
		api.sendMessage(`✅Đã xoá toàn bộ số exp của ${event.mentions[mention].replace("@", "")}\nSố exp xoá là ${expdel}.`, event.threadID, async() => {await Currencies.setData(mention, {exp: parseInt(kong)})});
		}
		
		else return	api.sendMessage("lêu lêu dùng sai cách rồi", event.threadID, event.messageID);
		}
			else if (Object.keys(event.mentions).length == 1) {
			return api.sendMessage({
				body: (`====[ Done ]====\nĐã thay đổi số exp của ${event.mentions[mention].replace("@", "")} thành ${expSet}`),
				mentions: [{
					tag: event.mentions[mention].replace("@", ""),
					id: parseInt(mention)
				}]
			}, event.threadID, async () => {await Currencies.setData(mention, {exp: parseInt(expSet)})});
		}
		else if(args[0]=="UID"){
		var id = args[1];
		var cut = args[2];
		let nameeee = (await Users.getData(id)).name
		   return api.sendMessage(`====[ Done ]====\nĐã thay đổi số exp của ${nameeee} thành ${cut}`, event.threadID, async() => {await Currencies.setData(id, {exp: parseInt(cut)})}, event.messageID);

		}
else {
	api.sendMessage("lêu lêu dùng sai cách rồi\nBạn có thể sử dụng:\n=>setexp me (số tiền)\n=>setsexp tag (số tiền)}", event.threadID, event.messageID)
	}
}