import { ctxUserNoticeChange } from "../ctxMiddleware/ctxUserNoticeChange.js"
import { bot, Markup } from "../connection/token.connection.js"
import { menu } from "../ctxMiddleware/menu.js"

export const noticeChange = () => {
  bot.action("noticeChange", async (ctx) => {
    await ctxUserNoticeChange(ctx)
    menu(ctx)
  })
}