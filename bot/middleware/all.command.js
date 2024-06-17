import { bot } from "../connection/token.connection.js"
import { getAllUSers } from "../ctxMiddleware/getAllUSers.js"

export const allUsers = () => bot.action("allUsers", async (ctx) => {
  getAllUSers(ctx)



  // сэйвит нового пользователя... или нет

})