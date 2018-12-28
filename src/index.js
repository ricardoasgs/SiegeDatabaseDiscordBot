const Discord = require("discord.js");
const client = new Discord.Client();
const axios = require("axios");
const { rankSwitch } = require("./helper");

require("dotenv").config();

client.on("ready", () => {
  console.log("I am ready!");
});

client.on("message", async msg => {
  const message = msg.toString().split(" ");
  if (message[0] == "!rank") {
    const nickname = message[1];
    const user = await axios.get(
      `https://r6stats.com/api/player-search/${nickname}/pc`
    );

    const id = user.data[0].uplay_id;
    const seasons = await axios.get(
      `https://r6stats.com/api/stats/${id}/seasonal`
    );

    const rank = seasons.data.seasons.wind_bastion.regions.ncsa[0].rank;
    const rankImage = rankSwitch(rank);

    const embed = new Discord.RichEmbed()
      .setTitle("Ranking Rainbow six Siege")
      .setColor(0xff0000)
      .setDescription(`O Rank Atual de ${nickname} é:`)
      .setThumbnail(rankImage);

    msg.channel.send(embed);
  } else {
    return;
  }
});

client.login(process.env.BOT_TOKEN);
