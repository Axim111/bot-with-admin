import { Telegraf, Markup, session } from "telegraf"
import 'dotenv/config'
export const bot = new Telegraf(process.env.BOT_TOKEN)
export { Markup, session } 