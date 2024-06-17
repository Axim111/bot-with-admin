import { Markup, session } from "../connection/token.connection.js"
import { findUser } from "../common/user/findUser.js"
export const menu = async (ctx) => {

  // const user = await findUser(ctx.from.id)

  const user = ctx.session.user
  await ctx.reply("меню", Markup.inlineKeyboard([
    [Markup.button.callback("все пользователи", "allUsers")],
    [Markup.button.callback("notice", "notice")],
    [Markup.button.callback(user.notice ? "notice active. turn off?" : "notice not active. turn on?", "noticeChange")],
    
  ]));//под текстом
}
