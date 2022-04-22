module.exports.config = {
    name: "cave",
    version: "1.0.2",
    hasPermssion: 0,
    credits: "Quốc Tuấn",
    description: "a",
    commandCategory: "Kiếm tiền",
    usages: "a",
    cooldowns: 5,
    envConfig: {
        cooldownTime: 1000000
    }
};
module.exports.languages = {
    "vi": {
        "cooldown": "Bạn đã làm cave trong hôm nay, để tránh kiệt sức hãy quay lại sau: %1 phút %2 giây.",
    },
    "en": {
        "cooldown": "You have worked today, to avoid exhaustion please come back after: %1 minute(s) %2 second(s).",
    }
}
module.exports.run = async ({ api, event, args, Currencies, getText }) => {
    const { getData } = Currencies;
    const { threadID, messageID, senderID } = event;
  const cooldown = global.configModule[this.config.name].cooldownTime;
    let data = (await Currencies.getData(senderID)).data || {};
    if (typeof data !== "undefined" && cooldown - (Date.now() - data.workTime) > 0) {
        var time = cooldown - (Date.now() - data.workTime),
            minutes = Math.floor(time / 20000),
            seconds = ((time % 20000) / 500).toFixed(0);
        
		return api.sendMessage(getText("cooldown", minutes, (seconds < 10 ? "0" + seconds : seconds)), event.threadID, event.messageID);
    }
    const money = (await getData(senderID)).money;
    const coin = Math.floor(Math.random() * 10000);
    var rdm = [`Bạn đã nhận được ${coin}$ từ việc bucu cho admin bot`, ` Bạn đã nhận được ${coin}$ từ việc vuốt trụ cho admin`, ` Bạn đã nhận được ${coin}$ từ việc chat sẽ với admin`, `Bạn bành háng cho thầy ông nội xem nhận được ${coin}$`, `Bạn bị thầy ông nội hiếp dâm nhận được ${coin}$`, `Bạn bị 6 anh da đen hiếp nhận được ${coin}$`, `Bạn đóng phim sex VN nhận được ${coin}$`, `Bạn quay video thủ dâm lên mạng nhận được ${coin}$`, `Bạn bị admin hãm hiếp nhận được ${coin}$`, `Bạn quan hệ với ông chú hàng xóm nhận được ${coin}$`];
    const text = rdm[Math.floor(Math.random() * rdm.length)]
    return api.sendMessage(`${text}`, threadID, async () => {
        await Currencies.increaseMoney(senderID, parseInt(coin));
            data.workTime = Date.now();
            await Currencies.setData(event.senderID, { data });
            return;
        }, messageID);
    }     
  