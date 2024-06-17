import { bot } from "../connection/token.connection.js"
import { findUsers } from "../common/user/fineAll.js"
import { csvCreate } from "../common/fileWork/csvCreate.js"


export const getAllUSers = async (ctx) => {
  const users = await findUsers()
  csvCreate(users)

  bot.telegram.sendDocument(
    ctx.chat.id,
    { source: "bot/resFile/allUsers.csv" }
  );







  // ctx.editMessageReplyMarkup();



}