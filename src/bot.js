const Eris = require("eris");
const auth = require("./auth");
const screenshots = require("./screenshots");

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

bot.registerCommand("Val10Man", "<@&701890854281019493> **React ONCE if you want to play a Valorant 10 man.** \n\n Down to play: \n\n", {
    description: "Will ask mans if they want to play a Valorant 10 man.",
    fullDescription: "10 man Valorant comp match.",
    caseInsensitive: true,
    reactionButtons: [
        {
            emoji: "👍",
            type: "yes",
            response: (msg, args, userID) => {
                return msg.content + "\n" + "<@" + userID + ">";
            },
        },
        {
            emoji: "🔄",
            type: "reset",
            response: () => {
                return "**React ONCE if you want to play a Valorant 10 man.** \n\n Down to play: \n\n";
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
                return msg.content + "\n" + "<@" + userID + ">";
            },
        },
        {
            emoji: "🔄",
            type: "reset",
            response: () => {
                return "**React ONCE if you want to play a Valorant 5 man.** \n\n Down to play: \n\n";
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
                return msg.content + "\n" + "<@" + userID + ">";
            },
        },
        {
            emoji: "🔄",
            type: "reset",
            response: () => {
                return "**React ONCE if you want to play a League 10 man custom match.** \n\n Down to play: \n\n";
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
                return msg.content + "\n" + "<@" + userID + ">";
            },
        },
        {
            emoji: "🔄",
            type: "reset",
            response: () => {
                return "**React ONCE if you want to play a League 5 man.** \n\n Down to play: \n\n";
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
                return msg.content + "\n" + "<@" + userID + ">";
            },
        },
        {
            emoji: "🔄",
            type: "reset",
            response: () => {
                return "**React ONCE if you're down to play tft.** \n\n Down to play: \n\n";
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
        name: "Type ~help",
        type: 1,
    });
    console.log("Ready!");
});

bot.connect();
