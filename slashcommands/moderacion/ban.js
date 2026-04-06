const { MessageEmbed } = require("discord.js");

module.exports = {
	name: "ban", 
	description: "BBBBBBBBANEADOOOOOO!",

	async execute(client, interaction){

		let ping  = Date.now() - interaction.createdTimestamp;

		const embed = new MessageEmbed()
		.setColor("#FF7400")
		.setDescription(`Ando en ${ping}ms de ping chango!`)

		interaction.reply({embeds: [embed]})
	}
}	