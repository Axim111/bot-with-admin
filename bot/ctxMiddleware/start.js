import { bot, Markup, session } from "../connection/token.connection.js"
import saveNew from "../common/prisma/saveNew.js"


export const ctxStart = async (ctx) => {
  // console.log(ctx.chat)
  const login = String(ctx.chat.id)
  const username = ctx.chat.first_name ?? "anon"

  // сэйвит нового пользователя... или нет

  await saveNew(login, username, ctx)

}
