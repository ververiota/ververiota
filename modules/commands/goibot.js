module.exports.config = {
    name: "goibot",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "ManhG",
    description: "Gọi Bot autoreply",
    commandCategory: "Không cần dấu lệnh",
    usages: "gọi bot",
    cooldowns: 2,
    denpendencies: {}
}, module.exports.handleEvent = async ({
    event: e,
    api: o,
    Users: t,
    Threads: a
}) => {
    var {
        threadID: n,
        messageID: s,
        body: i,
        senderID: d
    } = e;
    const r = global.data.threadData.get(n) || {};
    if (void 0 !== r.goibot && 0 == r.goibot) return;
    if (d == global.data.botID) return;
    let g = await t.getNameUser(e.senderID),
        c = (await a.getData(e.threadID)).threadInfo;
    var h = e.threadID,
        l = ["Yêu em <3", "Em là con bot cute nhất <3", `Hi,${g} chào con vợ bé:3`, "Vợ gọi có việc gì không?", `Dạ ${g} có em đây, yêu em không mà gọi <3. hmm...`, `${g}, sử dụng callad để liên lạc với admin!`, `${g}, gọi em có việc gì thế`, `${g}, yêu em ko mà gọi 🥲`, `${g}, tôi yêu bạn ❤`, `${g}, yêu nhau không?`, `${g}, bạn có yêu tôi không ❤`, `${g}, dạ có em đây:3`, `${g}, yêu admin bot đi rồi hãy gọi`, `${g}, yêu em ❤`, `${g}, có thể donate cho admin được ko? Momo: ko có đâu !!!`, `${g}, Em đây`, "chào bạn tôi là bot của Tuấn", "bạn gọi tôi có việc gì?", "tôi yêu bạn vl", "Yêu em <3", "Hi, chào con vợ bé:3", "Chồng gọi có việc gì không?", "Sử dụng callad để liên lạc với admin!", "Em là bot cute nhất hành tinh", "Nói gì thế con lợn", "Em đây~~~~", "Yêu anh Tuấn nhất💟", "Yêu thương admin nhất", "Anh ấy là phụ trợ của admin", "Sao thế công chúa", "Chăm chỉ học hành đi", "Bae ăn cơm chưa?", "Tuyển phi công nè ạ", "ấn /cave đi nhièu tiền lắm", "Nếu cậu đang cô đơn thì chúng ta có thể thành đôi :3", "Đang làm gì vậy?", "Được của ló :)))", "Em dthw như chủ của em ạ", "Đừng khen em ngại quá hí hí" ,"Làm chồng em không ạ?", "Đừng spam em nha :<<", "Công chúa em sao đấy?", "Có gì ăn không:(( đói quáaa", "Vì đã lỡ yêu em r chẳng dám hứa xa xôi", "Bạn đã bị ban", "Yêu em không?", "Chồng em đây rồi", "Mày bị làm sao í@@", "Bạn là nhất!!!", "Chần chờ gì chồng ơi em đâyyy", "Chần chờ gì vợ ơi anh đâyyy", "Em... Sao em lại nói những cái lời đó chi zay em?", "Thầy dạy phờ ri màaa", "Yeu em rat nhieu ^^", "Đồ con lợn lùn :))", "Đợi xí. Đi ẻ cái :()", "500k bao phòng!!!", "Yeu anh den luy ^^", "Nên nhớ đừng bao giờ cướp vợ của admin :))", "Anh quát em à?\nNói to thế á?", "Trả quần cho em huhu", "Baby, take my hand. I want you to be my husband. Cause you're my Iron Man. And I love you 3000 <3", "Tao cười tao đi toilet=))", "Đừng quá yêu một ai đó, khi chính bản thân bạn vẫn bị tổn thương!", "Bae, em nhu bong hoa. Nhung nguoi hai dau phai ta 💔", "Nuôi cậu để thịt ~~", "Overnight không?", "Hãy gọi cho admin tôi để được yêu thương<3", "Hát đi cho kẹo 🍭"],
        u = l[Math.floor(Math.random() * l.length)];
    ["bot", "bot ơi", "bot oi", "yêu bot", "bot đâu", "bot à", "bot đâu rồi", "bot đâu r"].forEach((e => {
        let t = e[0].toUpperCase() + e.slice(1);
        if (i === e.toUpperCase() | i === e | t === i) {
            let t = c.threadName;
            return modules = "------ Gọi bot ------\n", console.log(modules, e + "|", t, h), a = u, void o.sendMessage(a, n, s)
        }
        var a
    }))
    }, module.exports.languages = {
    vi: {
        on: "Bật",
        off: "Tắt",
        successText: "goibot thành công"
    },
    en: {
        on: "on",
        off: "off",
        successText: "goibot success!"
    }
}, module.exports.run = async function ({
    api: e,
    event: o,
    Threads: t,
    getText: a
}) {
    const {
        threadID: n,
        messageID: s
    } = o;
    let i = (await t.getData(n)).data;
    return void 0 === i.goibot || 1 == i.goibot ? i.goibot = !1 : i.goibot = !0, await t.setData(n, {
        data: i
    }), global.data.threadData.set(n, i), e.sendMessage(`${0==i.goibot?a("off"):a("on")} ${a("successText")}`, n, s)
};
