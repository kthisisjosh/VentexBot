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
        owner: "Simplistics",
        prefix: "~",
    }
);

/**
 * Screenshot-related commands.
 */

//-----------------------------------------------------------------------------------------------------------------------\\

bot.registerCommand("rsm", "React (can react multiple times) to get a random screenshot memory from #screenshot-memories.", {
    description: "Gets a random screenshot memory from the #screenshot-memories channel. Put some in there!",
    fullDescription: "Gets a random screenshot memory from the #screenshot-memories channel. Put some in there!",
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

/**
 * Down to play related commands.
 */

//-----------------------------------------------------------------------------------------------------------------------\\

bot.registerCommand("Valorant10Man", "@here React ONCE if you want to play a Valorant 10 man. \n\n Down to play: \n\n", {
    description: "Will ask mans if they want to play a Valorant 10 man with a @ here.",
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
                return "React ONCE if you want to play a Valorant 10 man. \n\n Down to play: \n\n";
            },
        },
    ],
    reactionButtonTimeout: 500000,
});

bot.registerCommand("Valorant5Man", "@here React ONCE if you're down to play a Valorant 5 man. \n\n Down to play: \n\n", {
    description: "Will ask mans if they want to play a Valorant 5 man with a @ here.",
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
                return "React ONCE if you want to play a Valorant 5 man. \n\n Down to play: \n\n";
            },
        },
    ],
    reactionButtonTimeout: 500000,
});

bot.registerCommand("tft", "@here React ONCE if you're down to play TFT. \n\n Down to play: \n\n", {
    description: "Will ask mans if they want to play tft with a @ here.",
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
                return "@here React ONCE if you're down to play TFT. \n\n Down to play: \n\n";
            },
        },
    ],
    reactionButtonTimeout: 500000,
});

/**
 * Miscellaneous
 */

//-----------------------------------------------------------------------------------------------------------------------\\





//-----------------------------------------------------------------------------------------------------------------------\\

bot.on("ready", () => {
    bot.editStatus("Available", {
        name: "Simplistics",
        type: 1,
    });
    console.log("Ready!");
});

bot.connect();
