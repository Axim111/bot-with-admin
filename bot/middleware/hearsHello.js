import { bot, Markup } from "../connection/token.connection.js"


export const hearsHello = () => bot.on("new_chat_participant", async ctx => {
  ctx.reply(`hello`)

})



