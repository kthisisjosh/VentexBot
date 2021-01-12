const dayjs = require("dayjs");
const Eris = require("eris");
const auth = require("./auth");
const screenshots = require("./screenshots");

var relativeTime = require('dayjs/plugin/relativeTime')
var isBetween = require("dayjs/plugin/isBetween")
var config = {
    thresholds: [
    { l: 's', r: 1 },
    { l: 'm', r: 1 },
    { l: 'mm', r: 59, d: 'minute' },
    { l: 'h', r: 1 },
    { l: 'hh', r: 23, d: 'hour' },
    { l: 'd', r: 1 },
    { l: 'dd', r: 200, d: 'day' },
    { l: 'M', r: 1 },
    { l: 'MM', r: 11, d: 'month' },
    { l: 'y' },
    { l: 'yy', d: 'year' }
    ]
}
dayjs.extend(relativeTime, config)
dayjs.extend(isBetween)

var updateLocale = require('dayjs/plugin/updateLocale')
dayjs.extend(updateLocale)
dayjs.updateLocale("en", {
    relativeTime: {
    future: "in %s",
    past: "%s ago",
    s: 'a few seconds',
    m: "a minute",
    mm: "%d minutes",
    h: "an hour",
    hh: "%d hours",
    d: "a day",
    dd: "%d days",
    M: "a month",
    MM: "%d month",
    y: "a year",
    yy: "%d years"
  }
})

const bot = new Eris.CommandClient(
    auth.token,
    {
        allowedMentions: {
            everyone: true,
            roles: true,
            users: true,
        },
    },
    {
        description: "Ventex Bot",
        owner: "<@167039265849475073>",
        prefix: ["~", "!", "-", "/", "."],
    }
);

let amongUsNames = []
let valorant5Names = []
let valorant10Names = []
let league5names = []
let league10names = []
let tftNames = []

/**
 * Screenshot-related commands.
 */

//-----------------------------------------------------------------------------------------------------------------------\\

bot.registerCommand("rsm", "React (can react multiple times) to get a random screenshot memory from <#340703597979500545>", {
    description: "Gets a random screenshot memory from the <#340703597979500545> channel. Put some in there!",
    fullDescription: "Gets a random screenshot memory from the <#340703597979500545> channel. Put some in there!",
    caseInsensitive: true,
    reactionButtons: [
        {
            emoji: "♻️",
            type: "Another one",
            response: () => {
                return screenshots.url[Math.round(Math.random() * screenshots.url.length)];
            },
        },
    ],
    reactionButtonTimeout: 100000000,
});

bot.registerCommand(
    "sendscreenshot",
    (msg, args) => {
        if (args.length === 0) {
            return "Invalid input, send a link to a screenshot: '~sendscreenshot <link-to-screenshot>'";
        } else if (args.length > 1) {
            return "Invalid input, send a link ONLY.";
        } else {
            console.log(args[0]);
            return "Sent.";
        }
    },
    {
        description: "Send a screenshot to be added.",
        fullDescription: "Sends a screenshot to be added.",
        caseInsensitive: true,
        usage: "<text>",
    }
);

/**
 * Down to play related commands.
 */

//-----------------------------------------------------------------------------------------------------------------------\\

bot.registerCommand("reset", "React to reset name cache", {
    description: "Resets the name cache.",
    reactionButtons: [
        {
            emoji: "🔄",
            type: "yes",
            response: (msg, args, userID) => {
                amongUsNames = []
                valorant5Names = []
                valorant10Names = []
                league5names = []
                league10names = []
                tftNames = []
            },
        },
    ],
    reactionButtonTimeout: 5000,
})

bot.registerCommand("AmongUs", "<@&744333040234266694> **React if you want to play Among Us!** \n\n Down to play: \n\n", {
    description: "Will ask mans if they want to play Among Us.",
    fullDescription: "Among Us",
    caseInsensitive: true,
    reactionButtons: [
        {
            emoji: "👍",
            type: "yes",
            response: (msg, args, userID) => {
                let isUnique = true
                amongUsNames.forEach(name => {
                    if (name === userID) {
                        isUnique = false
                    }
                })
                if (isUnique == true) {
                    amongUsNames.push(userID)
                }
                let nameOutput = ""
                amongUsNames.forEach(name => {
                    nameOutput += "<@" + name + ">" + "\n"
                })
                return "<@&744333040234266694> **React if you want to play Among Us!** \n\n Down to play: \n\n" + nameOutput
            },
        },
        {
            emoji: "❌",
            type: "reset",
            response: (msg, args, userID) => {
                let newNames = []
                amongUsNames.forEach(name => {
                    if (name !== userID) {
                        newNames.push(name)
                    }
                })
                let nameOutput = ""
                newNames.forEach(name => {
                    nameOutput += "<@" + name + ">" + "\n"
                })
                return "<@&744333040234266694> **React if you want to play Among Us!** \n\n Down to play: \n\n" + nameOutput
            },
        },
    ],
    reactionButtonTimeout: 100000000,
});

bot.registerCommandAlias("among", "AmongUs");

bot.registerCommand("Val10Man", "<@&701890854281019493> **React ONCE if you want to play a Valorant 10 man.** \n\n Down to play: \n\n", {
    description: "Will ask mans if they want to play a Valorant 10 man.",
    fullDescription: "10 man Valorant comp match.",
    caseInsensitive: true,
    reactionButtons: [
        {
            emoji: "👍",
            type: "yes",
            response: (msg, args, userID) => {
                let isUnique = true
                valorant10Names.forEach(name => {
                    if (name === userID) {
                        isUnique = false
                    }
                })
                if (isUnique == true) {
                    valorant10Names.push(userID)
                }
                let nameOutput = ""
                valorant10Names.forEach(name => {
                    nameOutput += "<@" + name + ">" + "\n"
                })
                return "<@&701890854281019493> **React ONCE if you want to play a Valorant 10 man.** \n\n Down to play: \n\n" + nameOutput
            },
        },
        {
            emoji: "❌",
            type: "reset",
            response: (msg, args, userID) => {
                let newNames = []
                valorant10Names.forEach(name => {
                    if (name !== userID) {
                        newNames.push(name)
                    }
                })
                let nameOutput = ""
                newNames.forEach(name => {
                    nameOutput += "<@" + name + ">" + "\n"
                })
                return "<@&701890854281019493> **React ONCE if you want to play a Valorant 10 man.** \n\n Down to play: \n\n" + nameOutput
            },
        },
    ],
    reactionButtonTimeout: 100000000,
});

bot.registerCommandAlias("Valorant10Man", "Val10Man");

bot.registerCommand("Val5Man", "<@&701890854281019493> **React ONCE if you're down to play a Valorant 5 man.** \n\n Down to play: \n\n", {
    description: "Will ask mans if they want to play a Valorant 5 man.",
    fullDescription: "Val 5 man",
    caseInsensitive: true,
    reactionButtons: [
        {
            emoji: "👍",
            type: "yes",
            response: (msg, args, userID) => {
                let isUnique = true
                valorant5Names.forEach(name => {
                    if (name === userID) {
                        isUnique = false
                    }
                })
                if (isUnique == true) {
                    valorant5Names.push(userID)
                }
                let nameOutput = ""
                valorant5Names.forEach(name => {
                    nameOutput += "<@" + name + ">" + "\n"
                })
                return "<@&701890854281019493> **React ONCE if you're down to play a Valorant 5 man.** \n\n Down to play: \n\n" + nameOutput
            },
        },
        {
            emoji: "❌",
            type: "reset",
            response: (msg, args, userID) => {
                let newNames = []
                valorant5Names.forEach(name => {
                    if (name !== userID) {
                        newNames.push(name)
                    }
                })
                let nameOutput = ""
                newNames.forEach(name => {
                    nameOutput += "<@" + name + ">" + "\n"
                })
                return "<@&701890854281019493> **React ONCE if you want to play a Valorant 5 man.** \n\n Down to play: \n\n" + nameOutput;
            },
        },
    ],
    reactionButtonTimeout: 100000000,
});

bot.registerCommandAlias("Valorant5Man", "Val5Man");

bot.registerCommand("League10Man", "<@&735296502242607185> **React ONCE if you want to play a League 10 man custom match.** \n\n Down to play: \n\n", {
    description: "Will ask mans if they want to play a League 10 man custom.",
    fullDescription: "10 man League match.",
    caseInsensitive: true,
    reactionButtons: [
        {
            emoji: "👍",
            type: "yes",
            response: (msg, args, userID) => {
                let isUnique = true
                league10names.forEach(name => {
                    if (name === userID) {
                        isUnique = false
                    }
                })
                if (isUnique == true) {
                    league10names.push(userID)
                }
                let nameOutput = ""
                league10names.forEach(name => {
                    nameOutput += "<@" + name + ">" + "\n"
                })
                return "<@&735296502242607185> **React ONCE if you want to play a League 10 man custom match.** \n\n Down to play: \n\n" + nameOutput
            },
        },
        {
            emoji: "❌",
            type: "reset",
            response: (msg, args, userID) => {
                let newNames = []
                league10names.forEach(name => {
                    if (name !== userID) {
                        newNames.push(name)
                    }
                })
                let nameOutput = ""
                newNames.forEach(name => {
                    nameOutput += "<@" + name + ">" + "\n"
                })
                return "<@&735296502242607185> **React ONCE if you want to play a League 10 man custom match.** \n\n Down to play: \n\n" + nameOutput;
            },
        },
    ],
    reactionButtonTimeout: 100000000,
});

bot.registerCommand("League5Man", "<@&735296502242607185> **React ONCE if you're down to play a League 5 man.** \n\n Down to play: \n\n", {
    description: "Will ask mans if they want to play a League 5 man.",
    fullDescription: "League 5 man",
    caseInsensitive: true,
    reactionButtons: [
        {
            emoji: "👍",
            type: "yes",
            response: (msg, args, userID) => {
                let isUnique = true
                league5names.forEach(name => {
                    if (name === userID) {
                        isUnique = false
                    }
                })
                if (isUnique == true) {
                    league5names.push(userID)
                }
                let nameOutput = ""
                league5names.forEach(name => {
                    nameOutput += "<@" + name + ">" + "\n"
                })
                return "<@&735296502242607185> **React ONCE if you're down to play a League 5 man.** \n\n Down to play: \n\n" + nameOutput
            },
        },
        {
            emoji: "❌",
            type: "reset",
            response: (msg, args, userID) => {
                let newNames = []
                league5names.forEach(name => {
                    if (name !== userID) {
                        newNames.push(name)
                    }
                })
                let nameOutput = ""
                newNames.forEach(name => {
                    nameOutput += "<@" + name + ">" + "\n"
                })
                return "<@&735296502242607185> **React ONCE if you want to play a League 5 man.** \n\n Down to play: \n\n" + nameOutput;
            },
        },
    ],
    reactionButtonTimeout: 100000000,
});

bot.registerCommand("tft", "<@&591691622060916736> **React ONCE if you're down to play tft.** \n\n Down to play: \n\n", {
    description: "Will ask mans if they want to play tft.",
    fullDescription: "tft",
    reactionButtons: [
        {
            emoji: "👍",
            type: "yes",
            response: (msg, args, userID) => {
                let isUnique = true
                tftNames.forEach(name => {
                    if (name === userID) {
                        isUnique = false
                    }
                })
                if (isUnique == true) {
                    tftNames.push(userID)
                }
                let nameOutput = ""
                tftNames.forEach(name => {
                    nameOutput += "<@" + name + ">" + "\n"
                })
                return "<@&591691622060916736> **React ONCE if you're down to play tft.** \n\n Down to play: \n\n" + nameOutput
            },
        },
        {
            emoji: "❌",
            type: "reset",
            response: (msg, args, userID) => {
                let newNames = []
                tftNames.forEach(name => {
                    if (name !== userID) {
                        newNames.push(name)
                    }
                })
                let nameOutput = ""
                newNames.forEach(name => {
                    nameOutput += "<@" + name + ">" + "\n"
                })

                return "<@&591691622060916736> **React ONCE if you're down to play tft.** \n\n Down to play: \n\n" + nameOutput;
            },
        },
    ],
    reactionButtonTimeout: 100000000,
});

/**
 * Miscellaneous
 */

//-----------------------------------------------------------------------------------------------------------------------\\

bot.registerCommand(
    "send",
    (msg, args) => {
        if (args.length === 0) {
            return "Invalid input, send something: '~send <text>'";
        } else {
            const toSend = args.join(" ");
            console.log(toSend);
        }
    },
    {
        description: "Send something to josh (test command).",
        fullDescription: "Sends something to josh (test command).",
        usage: "<text>",
    }
);

bot.on("messageCreate", (msg) => {
    if (msg.content === "!fml") {
        if (dayjs(dayjs()).isBetween("2021-01-10", dayjs("2021-04-10"))) {
            bot.createMessage(msg.channel.id, "Hang in there! You've got " + dayjs().to(dayjs("2021-04-23T00:00:00-05:00"), true) + " until this is all over and about " + dayjs().to(dayjs("2021-04-09T00:00:00-05:00"), true) + " until the start of exams. <:neckrope:762813873614749747> <:PepeHands:713964579209871401> <:Kaizer:230460817227644938> <:Jerome:704531259971338271> <:deadchromosome:367460111800860692> <:SeemsGood:321103114486677504> <:danielhoe:575898686224334868> <:ugly:458085989169233921> <:sendhelp:575899004924198942> ")
        } else if (dayjs(dayjs()).isBetween("2021-04-09", dayjs("2021-04-24"))) {
            bot.createMessage(msg.channel.id, "Hang in there! You've got " + dayjs().to(dayjs("2021-04-23T00:00:00-05:00"), true) + " until exams are over. <:neckrope:762813873614749747> <:PepeHands:713964579209871401> <:Kaizer:230460817227644938> <:Jerome:704531259971338271> <:deadchromosome:367460111800860692> <:SeemsGood:321103114486677504> <:danielhoe:575898686224334868> <:ugly:458085989169233921> <:sendhelp:575899004924198942> ")
        } else if (dayjs(dayjs()).isBetween("2021-04-23", dayjs("2021-05-04"))) {
            bot.createMessage(msg.channel.id, "Congratulations! You've finished your first year! <:Pog:478592701915332609> <:marcusgasm:575898575410561024> <:EZ:713964592962994268> <:5Head:737008087847796858> <a:Clap:713964562910674994> You've got " + dayjs().to(dayjs("2021-05-03T00:00:00-05:00"), true) + " until Spring term or " + dayjs().to(dayjs("2021-09-08T00:00:00-05:00")) + " until the start of the new school year!")
        } else if (dayjs(dayjs()).isBetween("2021-05-03", dayjs("2021-08-21"))) {
            bot.createMessage(msg.channel.id, "Hang in there! You've got " + dayjs().to(dayjs("2021-08-21T00:00:00-05:00"), true) + " until the term or co-op is over. <:neckrope:762813873614749747> <:PepeHands:713964579209871401> <:Kaizer:230460817227644938> <:Jerome:704531259971338271> <:deadchromosome:367460111800860692> <:SeemsGood:321103114486677504> <:danielhoe:575898686224334868> <:ugly:458085989169233921> <:sendhelp:575899004924198942> ")
        } else {
            bot.createMessage(msg.channel.id, "Congratulations! You've finished your first year! <:Pog:478592701915332609> <:marcusgasm:575898575410561024> <:EZ:713964592962994268> <:5Head:737008087847796858> <a:Clap:713964562910674994> You've got " + dayjs().to(dayjs("2021-09-08T00:00:00-05:00")) + " until the start of the new school year!")
        }
    }
})

bot.registerCommand("code", "<https://github.com/kthisisjosh/VentexBot>", {
    description: "View the code of the bot.",
    fullDescription: "View the code of the bot.",
});

bot.registerCommand("website", "<https://ventexgaming.netlify.app/>", {
    description: "View VentexGaming's website.",
    fullDescription: "View VentexGaming's website.",
});

bot.registerCommand(
    "embedtest",
    (msg, args, userID) => {
        bot.createMessage(msg.channel.id, {
            embed: {
                title: "Click for funniest video test",
                description: "Description test",
                url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                color: 0x008000,
                fields: [
                    {
                        name: "<@" + userID + ">", // Field title
                        value: "<@" + userID + ">", // Field
                        inline: true, // Whether you want multiple fields in same line
                    },
                    {
                        name: "Test field name 2.",
                        value: "Test field name 2",
                        inline: true,
                    },
                ],
                footer: {
                    // Footer text
                    text: "Test footer",
                },
            },
        });
    },
    {
        description: "Test embed command",
        fullDescription: "Test embed command",
    }
);

//-----------------------------------------------------------------------------------------------------------------------\\

bot.on("ready", () => {
    bot.editStatus("Available", {
        name: "~help - Ventex Bot :)",
        type: 1,
    });
    console.log("Ready!");
});

bot.connect();
