import { bot, Markup, session } from "../connection/token.connection.js"
import { ctxStart } from "../ctxMiddleware/start.js"
import { findUser } from "../common/user/findUser.js"
import { menu } from "../ctxMiddleware/menu.js"

export const startBot = () => bot.start(async ctx => {
  // const login = String(ctx.chat.id)
  // const username = ctx.chat.first_name ?? "anon"
  // сэйвит нового пользователя... или нет
  console.log("under: ", ctx.session)
  await ctxStart(ctx)
  console.log("post: ", ctx.session)

  menu(ctx)


})



