const { ActivityType } = require("discord.js");

module.exports = {
	name: "ready",
	once: true,

	async execute(client, interaction){

		console.log("|> ESTADO CARGADO");

		let statusarray = [
			{
				name: "foxstry.net",
				type: ActivityType.Watching,
				url:"foxstry.net"
				status: "online",
			},
		];

		setInterval(() => {
			const option = Math.floor(Math.random() * statusarray.length);

			client.user.setPresence({
				activities: [
					{
						name: statusarray[option].name,
						type: statusarray[option].type,
						url: statusarray[option].url,
					},
				],
				status: statusarray[option].status,
			});
		},5000);
	},
};