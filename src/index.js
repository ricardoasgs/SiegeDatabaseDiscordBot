const Discord = require("discord.js");
const client = new Discord.Client();
const axios = require("axios");

require("dotenv").config();

client.on("ready", () => {
  console.log("I am ready!");
});

client.on("message", msg => {
  const message = msg.toString().split(" ");
  if (message[0] == "!rank") {
    nickname = message[1];
    axios
      .get(`https://r6stats.com/api/player-search/${nickname}/pc`)
      .then(response => {
        const id = response.data[0].uplay_id;
        axios
          .get(`https://r6stats.com/api/stats/${id}/seasonal`)
          .then(response => {
            const rank =
              response.data.seasons.wind_bastion.regions.ncsa[0].rank;
            const embed = new Discord.RichEmbed()
              .setTitle("Ranking Rainbow six Siege")
              .setColor(0xff0000)
              .setDescription(`O Rank Atual do Usuário é: ${rank}`);

            msg.channel.send(embed);
          })
          .catch(error => {
            msg.channel.send(error);
          });
      })
      .catch(error => {
        msg.channel.send(error);
      });
  } else {
    return;
  }
});

client.login(process.env.BOT_TOKEN);
