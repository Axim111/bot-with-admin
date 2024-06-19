import { bot, Markup } from "../connection/token.connection.js"
export const ctxUnderMenu = async (ctx) => {

  await ctx.reply("Keyboard", Markup.keyboard([
    ["Text-1", "Text-2"],
    [ctx.session.userDM ? ctx.session.webMark : "you can use web DM only", "text-4"]
  ]).oneTime().resize())
}
