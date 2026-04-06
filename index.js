const Discord = require("discord.js");
const { Client, Collection } = require("discord.js");
const client = new Client ({ intents: 53608446 });
const { loadSlash } = require("./handlers/slashHandler")
// const Enmap = require("enmap");

require("dotenv").config()

client.on("interactionCreate", async (interaction) => {
	if(!interaction.isCommand()) return;
	const cmd = client.slashCommands.get(interaction.commandName);
	if(!cmd) return;

	const args = [];
	for(let option of interaction.options.data){
		if(option.type === 1){
			if (option.name) args.push(option.name);
			option.options?.forEach((x) => {
				if(x.value) args.push(x.value);
			});
		}  else if(option.value) args.push(option.value);
	}
	cmd.execute(client, interaction, args);
})

client.slashCommands = new Collection();

(async () => {
	await client
	.login(process.env.TOKEN)
	.catch((err) => 
		console.error(`|> HUBO UN ERROR INTENTANDO INICIAR LA CONSOLA: ${err}`));
})();

client.on("ready", async () => {
	await loadSlash(client)
	.then(() => {
		console.log("|> COMANDOS CARGADOS");
	})
	.catch((err) => 
		console.error(`|> HUBO UN ERROR INTENTANDO CARGAR LOS COMANDOS: ${err}`));
	console.log(`|> PLATAFORMA INICIADA DESDE EL CLIENTE ${client.user.tag}`);
});