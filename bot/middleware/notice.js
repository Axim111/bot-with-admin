import { bot } from "../connection/token.connection.js"

import { ctxChangNotice } from "../ctxMiddleware/ctxNotice.js"


export const noticeUSers = () => {
  bot.action("notice", async ctx => {
    ctxChangNotice(ctx)

  })
}


