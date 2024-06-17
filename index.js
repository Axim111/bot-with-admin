// t.me/my_admin_prisma_test_bot
import { Composer, Scenes, Telegraf, session } from "telegraf"
import 'dotenv/config'
import { bot } from './bot/connection/token.connection.js'
import { startBot } from "./bot/middleware/start.command.js"

import { allUsers } from "./bot/middleware/all.command.js"
import { noticeUSers } from "./bot/middleware/notice.js"
import { hearsHello } from "./bot/middleware/hearsHello.js"
import { noticeChange } from "./bot/middleware/changeNotice.js"
bot.use(session({ defaultSession: () => ({ user: 0 }) }))
startBot()
hearsHello()


allUsers()
noticeUSers()
noticeChange()

bot.launch()
//index -> middleware -> stageMiddleware -> common
//connect^--------- ^ -------^----------------^
