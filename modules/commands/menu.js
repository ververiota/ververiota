module.exports.config = {
  name: "menu",
  version: "1.0.2",
  hasPermssion: 0,
  credits: "Mirai Team",//mod by Tuแบฅn๐ง
  description: "Hฦฐแปng dแบซn cho ngฦฐแปi mแปi",
  commandCategory: "Box",
  usages: "[Tรชn module]",
  cooldowns: 5,
  dependencies: {
    "axios": "",
    "request": "",
    "fs-extra": ""
  },
  envConfig: {
    autoUnsend: true,
    delayUnsend: 60
  }
};

module.exports.languages = {
	"vi": {
    "helpList": 'โโโ ZERO TWO โโโ\n\n๐ค ๐๐ถ๐ฒฬฃฬ๐ป ๐๐ฎฬฃ๐ถ ๐ฑ๐ฎ๐ป๐ด ๐ฐ๐ผฬ %1 ๐น๐ฒฬฃฬ๐ป๐ต ๐ฐ๐ผฬ ๐๐ต๐ฒฬฬ ๐๐ฬฬ ๐ฑ๐ฬฃ๐ป๐ด ๐๐ฟ๐ฒฬ๐ป ZERO TWO\nโฃใ ๐๐ฎฬ๐ฐ๐ต ๐๐ฬฬ ๐ฑ๐ฬฃ๐ป๐ด ใ\n๐๐ฎฬ๐ ๐ป๐ต๐ฎฬฬ๐ป "%2menu + tรชn lแปnh" ๐ฑ๐ฒฬฬ ๐ฏ๐ถ๐ฒฬฬ๐ ๐๐ต๐ฒฬ๐บ ๐ฐ๐ต๐ถ ๐๐ถ๐ฒฬฬ๐!\nโฃใ ๐๐ถ๐ฒฬ๐ป ๐ต๐ฒฬฃฬ ๐๐ ๐๐ฑ๐บ๐ถ๐ป ใ\nhttps://www.facebook.com/m.chuongnguyen ๐ป๐ฒฬฬ๐ ๐ฐ๐ฎฬฬ๐ป ๐ต๐ผฬฬ ๐๐ฟ๐ผฬฬฃ\nโฃ ๐๐ผฬฃ๐ฐ ๐ฑ๐ถ๐ฒฬฬ๐ ๐ธ๐ต๐ผ๐ฎฬ๐ป ๐๐ฬฬ ๐ฑ๐ฬฃ๐ป๐ด ๐๐ผ๐ ๐ฑ๐ฒฬฬ ๐๐ฟ๐ฎฬ๐ป๐ต ๐ฏ๐ถฬฃ ๐ฏ๐ฎ๐ป!\n\nโโ๐ง๐ต๐ฎ๐ป๐ธ๐ ๐๐น๐น ๐จ๐๐จโโ\n',
		"moduleInfo": "๐ค ๐๐ฒฬฃฬ๐ป๐ตใ %1 ใ\nโก ๐ ๐ผฬ ๐๐ฎฬ: %2\n\nโฃ ๐๐ฎฬ๐ฐ๐ต ๐๐ฬฬ ๐ฑ๐ฬฃ๐ป๐ด: %3\nโฃ ๐ง๐ต๐๐ผฬฃฬ๐ฐ ๐ป๐ต๐ผฬ๐บ: %4\nโฃ ๐ง๐ต๐ผฬฬ๐ถ ๐ด๐ถ๐ฎ๐ป ๐ฐ๐ต๐ผฬฬ: %5 ๐ด๐ถ๐ฎฬ๐ (๐)\nโฃ ๐ค๐๐๐ฒฬฬ๐ป ๐ต๐ฎฬฃ๐ป: %6\n\nโโโ ZERO TWO โโโ\n",
		"user": "๐ก๐ด๐ฬ๐ผฬฬ๐ถ ๐ฑ๐ฬ๐ป๐ด",
        "adminGroup": "๐ค๐๐ฎฬ๐ป ๐๐ฟ๐ถฬฃ ๐๐ถ๐ฒฬ๐ป ๐ป๐ต๐ผฬ๐บ",
        "adminBot": "๐ค๐๐ฎฬ๐ป ๐๐ฟ๐ถฬฃ ๐๐ถ๐ฒฬ๐ป ๐๐ผ๐"
	},
	"en": {
		"moduleInfo": "ใ %1 ใ\n%2\n\nโฏ Usage: %3\nโฏ Category: %4\nโฏ Waiting time: %5 seconds(s)\nโฏ Permission: %6\n\nยป Module code by %7 ยซ",
		"helpList": '[ There are %1 commands on this bot, Use: "%2help nameCommand" to know how to use! ]',
		"user": "User",
        "adminGroup": "Admin group",
        "adminBot": "Admin bot"
	}
};

module.exports.handleEvent = function ({ api, event, getText }) {
	const { commands } = global.client;
	const { threadID, messageID, body } = event;
	
	if (!body || typeof body == "undefined" || body.indexOf("help") != 0) return;
	const splitBody = body.slice(body.indexOf("help")).trim().split(/\s+/);
	if (splitBody.length == 1 || !commands.has(splitBody[1].toLowerCase())) return;
	const threadSetting = global.data.threadData.get(parseInt(threadID)) || {};
	const prefix = (threadSetting.hasOwnProperty("PREFIX")) ? threadSetting.PREFIX : global.config.PREFIX;
  return api.sendMessage(getText("moduleInfo", command.config.name, command.config.description, `${prefix}${command.config.name} ${(command.config.usages) ? command.config.usages : ""}`, command.config.commandCategory, command.config.cooldowns, ((command.config.hasPermssion == 0) ? getText("user") : (command.config.hasPermssion == 1) ? getText("adminGroup") : getText("adminBot")), command.config.credits), threadID, messageID);
}

module.exports.run = function({ api, event, args, getText }) {
  const axios = require('axios');
  const request = global.nodemodule['request'];
  const fs = require("fs");
	const { commands } = global.client;
	const { threadID, messageID } = event;
	const command = commands.get((args[0] || "").toLowerCase());
	const threadSetting = global.data.threadData.get(parseInt(threadID)) || {};
	const { autoUnsend, delayUnsend } = global.configModule[this.config.name];
	const prefix = (threadSetting.hasOwnProperty("PREFIX")) ? threadSetting.PREFIX : global.config.PREFIX;
  if (!command) {
		const command = commands.values();
		var group = [], msg = "โโโ๐๐ฬ๐ก๐ ๐๐ฬฃฬ๐ก๐โโโ\n\n";
		for (const commandConfig of command) {
			if (!group.some(item => item.group.toLowerCase() == commandConfig.config.commandCategory.toLowerCase())) group.push({ group: commandConfig.config.commandCategory.toLowerCase(), cmds: [commandConfig.config.name] });
			else group.find(item => item.group.toLowerCase() == commandConfig.config.commandCategory.toLowerCase()).cmds.push(commandConfig.config.name);
		}
    
		group.forEach(commandGroup => msg += `โฃ ๐ง๐ต๐๐ผฬฃฬ๐ฐ ๐ป๐ต๐ผฬ๐บ: ${commandGroup.group.charAt(0).toUpperCase() + commandGroup.group.slice(1)}\n๐๐ฒฬฃฬ๐ป๐ต ๐ด๐ผฬฬ๐บ ๐ฐ๐ผฬ: ${commandGroup.cmds.join(' โข ')}\n\n`);

    const gai = ["Em cรณ thแป ฤi theo anh ฤฦฐแปฃc khรดng? Bแปi vรฌ em luรดn ฤฦฐแปฃc cha mแบน bแบฃo lร  phแบฃi theo giแบฅc mฦก cแปงa mรฌnh.",

        "Bแบงu trแปi xanh, lร n mรขy trแบฏng. Anh yรชu nแบฏng hay yรชu em?.",

        "Nhแป cรณ nแบฏng mแปi thแบฅy cแบงu vแปng. Nhแป cรณ anh mแปi thแบฅy mร u hแบกnh phรบc.",

        "Anh yรชu ฦกi แปi แปi. Anh ฤang แป ฤรขu?.",

        "Soรกi ca lร  cแปงa ngรดn tรฌnh. Cรฒn anh thรฌ chแป cแปงa mรฌnh em thรดi.",

        "Giแปฏa cuแปc ฤแปi hร ng ngร n cรกm dแป.Em chแป cแบงn bแบฟn ฤแป anh thรดi.",

        "Bแป cรดng anh bay khi cรณ giรณ. Em chแป cฦฐแปi vรฌ แป ฤรณ cรณ anh.",

        "Chแป cแบงn anh nรณi yรชu, em sแบฝ bรกm theo anh suแปt ฤแปi. Cรด gรกi ฤang muแปn muแปn bแบญt ฤรจn xanh ฤแบฅy. Cรด nร ng muแปn gแปฃi รฝ lร  mรฌnh chung thแปงy lแบฏm ฤแบฅy. Anh cแปฉ thแปญ tแป tรฌnh mร  xem.",

        "Ba mฦฐฦกi chฦฐa phแบฃi lร  Tแบฟt. Khรดng lร m bแบกn ฤรขu phแบฃi lร  hแบฟt, cรฒn cรณ thแป lร m ngฦฐแปi yรชu mร .",

        "Ai nร o cho mฦฐแปฃn avatar ฤแป em ฤแปก cรด ฤฦกn ฤi.",

        "Nแบฏng ฤรฃ cรณ mลฉ, mฦฐa ฤรฃ cรณ รด, cรฒn em sแบฝ cรณ ai?.",

        "Chแปng tฦฐฦกng lai ฦกi, em chแป anh hฦกi lรขu rแปi ฤแบฅy.",

        "Trแปi ฤแป mฦฐa rแปi sao anh chฦฐa ฤแป em?.",

        "Dแบกo nร y anh cรณ thแบฅy mแปi chรขn? Sao cแปฉ ฤi trong tim em mรฃi.",

        "Anh ฦกi, cรณ nรณng khรดng? Tim em ฤang chรกy nรจ.",

        "Anh gรฌ ฦกi ! Anh ฤรกnh rฦกi ngฦฐแปi yรชu nร y.",

        "Sao anh cฦฐแปi mรฃi thแบฟ. Da em ฤen mแบฅt rแปi.",

        "แปฆa ฤรชm rแปi mร  sao tim mรฌnh vแบซn ฤแบงy nแบฏng thแบฟ?.",

        "Tim anh cรฒn chแป khรดng? Em muแปn chuyแปn nhร  mร  chฦฐa tรฌm thแบฅy chแป.",

        "Uแปng nhแบงm 1 รกnh mแบฏt cฦกn say theo cแบฃ ฤแปi!.",

        "Em thรญch anh cรฒn nhiแปu hฦกn muแปi แป biแปnโฆ",

        "Em ฤแปc hแบฟt โMฦฐแปi vแบกn cรขu hแปi vรฌ saoโ nhแปฏng vแบซn khรดng hiแปu ฤฦฐแปฃc vรฌ sao em thรญch anh nhiแปu thแบฟ.",

        "ฤฦฐแปng thรฌ dร i, chรขn em thรฌ ngแบฏn. Phแบฃi ฤi bao xa mแปi cรณ thแป tรฌm thแบฅy anh.",

        "Em xinh tฦฐฦกi, nhฦฐng em chฦฐa thuแปc vแป ai.",

        "Chรกn thแบฃ thรญnh rแปi, ai cฦฐa ฤแป em ฤแป mแปt lแบงn coi.",

        "Cรณ phแบฃi cuแปc sแปng quรก bon chen nรชn anh mรฃi vแบซn chฦฐa tรฌm ฤแบฟn em?.",

        "Nแบฟu cรณ thแป hรฃy ฤแป em mแปt lแบงn ฤฦฐแปฃc yรชu anh, ฤฦฐแปฃc khรดng?.",

        "Tuแปi tรกc vแปi chแป khรดng quan trแปng, vแบฅn ฤแป lร  em ฤรฃ cรณ bแบฑng lรกi chฦฐa?.",

        "Trฤng lรชn ฤแปnh nรบi trฤng tร . Anh yรชu em thแบญt hay lร  yรชu chฦกi?.",

        "Nแบฟu ngoร i kia nhiแปu bรฃo tแป, thรฌ vแป ฤรขy vแปi em.",

        "Em khรดng muแปn ngแปง muแปn, chแป lร  ฤang chแป ai ฤรณ chรบc ngแปง ngon thรดi.",

        "Cรขy ฤa, giแบฟng nฦฐแปc sรขn ฤinh. Khi nร o em hแบฟt mแปt mรฌnh ฤรขy anh?.",

        "Cแบฃ thแบฟ giแปi nร y ai cลฉng yรชu nhau chแป cรณ riรชng mรฌnh em hแบฉm hiu mแปt gรณc.",

        "Cแบงn ai ฤรณ quan tรขm ฤแป thแบฅy mรฌnh ฤฦฐแปฃc yรชu thฦฐฦกng.",

        "Anh gรฌ ฦกi,cho em mฦฐแปฃn ฤรจn pin ฤฦฐแปฃc khรดng? Trแปi tแปi quรก, em khรดng tรฌm thแบฅy ฤฦฐแปng vร o tim anh.",

        "Say rฦฐแปฃu say bia lร m gรฌ? Anh say em ฤi nร y.",

        "Thรกch ai nรณi yรชu em ฤแบฅy.",

        "Em ฤn Bฦ  muแปn vแปก bแปฅng rแปi ฤรขy แบก. Lร ng Face ai HแบขO TรM lร m ฦกn cแปฉu em vแปi. Chแป cแบงn cรกi status nร y 500 like, bแปฅng em lแบกi lร nh!.",

        "Lรขu rแปi chฦฐa biแบฟt cแบฃm giรกc ฤฦฐแปฃc ฤi ฤn ฤi xem phim nhฦฐ thแบฟ nร o, bร i vแป nhiแปu quรก. Hรดm nay rแบฃnh cรณ ai mแปi khรดng nhแป?.",

        "Rแบฃnh quรก cรณ ai muแปn ฤi chฦกi vแปi mรฌnh khรดng โฆ",

        "Nร y anh, anh xem hแป em xem trong mแบฏt em cรณ gรฌ hแป cรกi. Thแบฅy chฦฐa, toร n lร  hรฌnh bรณng anh ฤแบฅy!.",

        "Anh biแบฟt nhiแปu vแป Thuแปc Mรช khรดng? Cรฒn em gรณi gแปn lแบกi ฤรณ lร  anh.",

        "Anh cรณ thแบฅy dแบกo nร y da em ฤen khรดng? Vรฌ mแบฃi nhรฌn nแปฅ cฦฐแปi Toแบฃ Nแบฏng cแปงa anh ฤแบฅy.",

        "Xin lแปi anh gรฌ ฦกi anh ฤi ฤแปฉng kiแปu gรฌ thแบฟ ngรฃ vร o trรกi tim em rแปi kรฌa!.",

        "Anh cรณ biแบฟt cร i Win khรดng แบก? Cร i hแป em cรกi hแป ฤiแปu hร nh nร o mร  cรณ giao diแปn chรญnh lร  Anh ฤฦฐแปฃc khรดng!.",

        "Em nghฤฉ chรบng mรฌnh cรณ ฤiแปm chung ฤแบฅy. ฤรณ lร  anh yรชu bแบฃn thรขn anh, cรฒn em thรฌ cลฉng yรชu anh!.",

        "Anh gรฌ ฦกi cho em mฦฐแปฃn cรกi ฤรจn pin ฤฦฐแปฃc khรดng. Trแปi tแปi quรก em khรดng biแบฟt ฤฦฐแปng nร o ฤแป ฤi ฤแบฟn trรกi tim anh.",

        "Anh biแบฟt sแปญa Tivi khรดng. Sao kรชnh nร o cลฉng chiแบฟu toร n nhแปฏng nhung nhแป vแป anh thแบฟ nร y!.",

        "Anh ฦกi anh cรณ hiแปu rรต ฤฦฐแปng ฤi lแปi lแบกi แป ฤรขy khรดng. Chแป hแป em xem ฤi ฤฦฐแปng nร o ฤแป thoรกt khแปi nแปi nhแป anh cรกi!.",

        "Nร y anh gรฌ ฦกi, anh cรณ Anh hay Em Trai gรฌ khรดng? Em khรดng tin lร  trรชn ฤแปi nร y cรณ tแบญn 2 thiรชn thแบงn ฤรขu!",

        "Ai dรกm nรณi nฦกi hแบกnh phรบc nhแบฅt lร  thiรชn ฤฦฐแปng. Ngฦฐแปi ฤรณ chแบฏc hแบณn khรดng biแบฟt ฤแบฟn khoแบฃnh khแบฏc mแปi khi anh cฦฐแปi rแปi!.",

        "Nแบฟu khรดng cรณ gรฌ lร  mรฃi mรฃi, anh cรณ thแป lร  โkhรดng cรณ gรฌโ cแปงa em ฤฦฐแปฃc khรดng?.",
      "Em cรณ muแปn con mรฌnh sau nร y cรณ ADN cแปงa anh khรดng?.",

        "Em cรณ biแบฟt rแบฑng anh nhแป em nhiแปu lแบฏm khรดng? Anh ฤn khรดng ngon nhฦฐng ngแปง nhฦฐ ฤiรชn, anh ฤi giแบงy quรชn ฤi tแบฅt, ฤn sรกng quรชn ฤรกnh rฤng, anh dรนng xฤng vo gแบกo, anh khแป khแบกo cลฉng chแป vรฌ yรชu em ฤรณ.",

        "Em ฦกi! Em lร  nghแป gรฌ ฤแบฅyโฆ.? Sao ฤรชm nร o em cลฉng hiแปn lรชn trong giแบฅc mฦก cแปงa anh vแบญy? Anh chแบณng biแบฟt lร m thแบฟ nร o nแปฏa cแบฃ. Lร m ngฦฐแปi yรชu anh em nhรฉ!.",

        "Em ฦกi ! Khi em ฤแปc tin nhแบฏn nร y, em nแปฃ anh cuแปc hแบนn. Xรณa tin nhแบฏn nร y, em nแปฃ anh cuแปc tรฌnh. Lฦฐu tin lร  em nแปฃ anh 1 nแปฅ hรดn. Trแบฃ lแปi anh, em nแปฃ anh tแบฅt cแบฃ. Cรฒn nแบฟu em khรดng trแบฃ lแปi thรฌ em ฤรฃ yรชu anh !!! hihi.",

        "รiแปu duy nhแบฅt ฤรดi mแบฏt em chฦฐa nรณi cho anh biแบฟt lร  tรชn cแปงa em.",
                  
        "Anh thร  ฤฦฐแปฃc mแปt lแบงn ngแปญi ฤฦฐแปฃc mรนi tรณc thฦกm cแปงa em. Anh thร  ฤฦฐแปฃc mแป lแบงn xiแบฟt chแบทt bร n tay cแปงa em, anh thร  ฤฦฐแปฃc mแปt lแบงn nแบฟm hฦฐฦกng vแป ngแปt tแปซ nแปฅ hรดn cแปงa em cรฒn hฦกn lร  sแปng bแบฅt tแปญ mร  khรดng ฤฦฐแปฃc ฤiแปu แบฅy.",
                  
        "Chฦฐฬng nghiรชฬฃn thฦฐฬc ฤรชm cuฬng nรดฬi nhฦกฬ em, anh ฤรฃ cแป nhฦฐng sฦฐฬa khรดng ฤฦฐฦกฬฃc.",
                  
        "Anh muแปn gแปญi tin nhแบฏn nร y ฤแบฟn em hรดm nay vรฌ hรดm nay anh cแบฃm thแบฅy yรชu em nhiแปu ฤแบฟn bแบฅt thฦฐแปng.",
        
        " Anh ghรฉt em lแบฏm em biแบฟt khรดng? Vรฌ suแปt ngร y em cแปฉ bay lฦฐแปฃn trong ฤแบงu anh, lร m anh khรดn nghฤฉ ฤฦฐแปฃc viแปc gรฌ cแบฃโฆhuhu."
];
  const text = `ใ ๐ง๐๐ฬ๐ก๐ ใ: ${gai[Math.floor(Math.random()*gai.length)]}`;
    return axios.get('https://jrt-api.j-jrt-official.repl.co/gai').then(res => {
    let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
    var callback = function () {
		return api.sendMessage({body: msg + getText("helpList", commands.size, prefix) + text, attachment: fs.createReadStream(__dirname + `/cache/menu.${ext}`)
        }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/menu.${ext}`), messageID, threadID, async (error, info) =>{
			if (autoUnsend) {
				await new Promise(resolve => setTimeout(resolve, delayUnsend * 1000));
        return api.unsendMessage(info.messageID);
      } else return;
  });
        }; request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/menu.${ext}`)).on("close", callback);
     });
                                                }
  axios.get('https://jrt-api.j-jrt-official.repl.co/gai').then(res => {
    let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
    let callback = function () {
   return api.sendMessage({body:getText("moduleInfo", command.config.name, command.config.description, `${prefix}${command.config.name} ${(command.config.usages) ? command.config.usages : ""}`, command.config.commandCategory, command.config.cooldowns, ((command.config.hasPermssion == 0) ? getText("user") : (command.config.hasPermssion == 1) ? getText("adminGroup") : getText("adminBot")), command.config.credits), attachment: fs.createReadStream(__dirname + `/cache/menu.${ext}`)
        }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/menu.${ext}`), messageID, threadID);
    };
    request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/menu.${ext}`)).on("close", callback);
});
}