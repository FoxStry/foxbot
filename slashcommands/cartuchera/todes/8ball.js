const { MessageEmbed } = require("discord.js");

module.exports = {
	name: "8ball",
	description: "Preguntale a la bola y ella responde!",
	options: [
		{
			name: "pregunta",
			description: "Hacele una pregunta a la bola de FoxBot!",
			type: 3,
			require: true,
		},
	],

	async execute(client, interaction) {
		const pgr = interaction.options.getString("pregunta");

		const respuestas = [
			"sí chango",
			"Sí.",
			"no papito lindo",
			"capaz",
			"sin duda chango",
		];

		const botrespuesta =
			respuestas[Math.floor(Math.random() * respuestas.length)];

		const embed = new MessageEmbed()
			.setColor("#FF7400")
			.setDescription(
				`🎱 **Lanzaron la bola de FoxBot!**\n\n🗣️❓ ${pgr}\n\n🦊🎱 ${botrespuesta}`,
			);

		interaction.reply({ embeds: [embed] });
	},
};