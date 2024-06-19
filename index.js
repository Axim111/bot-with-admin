// t.me/my_admin_prisma_test_bot
import { Composer, Scenes, Telegraf, session, Markup } from "telegraf"
import 'dotenv/config'
import { bot } from './bot/connection/token.connection.js'
import { startBot } from "./bot/middleware/start.command.js"

import { allUsers } from "./bot/middleware/all.command.js"
import { noticeUSers } from "./bot/middleware/notice.js"
import { hearsHello } from "./bot/middleware/hearsHello.js"
import { noticeChange } from "./bot/middleware/changeNotice.js"
import { message } from 'telegraf/filters'



bot.use(session({
  defaultSession: () => (
    { webLink: "https://04b4-37-140-41-179.ngrok-free.app", webMark: Markup.button.webApp("web", "https://04b4-37-140-41-179.ngrok-free.app"), userDM: true })
}))

// ctx.session.web = "http://localhost:5173/"

startBot()
bot.on(message("web_app_data"), async ctx => {

  console.log(ctx.webAppData.data.text())
  ctx.reply(ctx.webAppData.data.text())
});
hearsHello()


allUsers()
noticeUSers()
noticeChange()

bot.launch()
//index -> middleware -> stageMiddleware -> common
//connect^--------- ^ -------^----------------^



