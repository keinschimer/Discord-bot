//Base
const { Command } = require("discord.js-commando");
// const path = require("path");

//Embed
// const { RichEmbed } = require("discord.js");

module.exports = class UpdateCommand extends Command {
	constructor(client) {
		super(client, {
			name: "update",
			memberName: "update",
			group: "dev",
			description: "updates the bot",
			aliases: ["up"],
			details: "updates the bot with a file over git",
			ownerOnly: true,
		});
	}
	run(msg) {
		if (process.platform === "win32") { // windows only
			const { spawn } = require("child_process");
			const bat = spawn(__dirname + "/../../src/scripts/my.bat");

			bat.stdout.on("data", data => console.log(data.toString()));
			bat.stderr.on("data", data => console.log(data.toString()));
			bat.on("exit", code => {
				if (!code) {
					return msg.channel.send(`Update succ *code: ${code}*`);
				}
				return msg.channel.send(`Update failed *code: ${code}*`);
			});

		}
	}
};