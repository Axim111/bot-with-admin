import { bot, Markup, session } from "../connection/token.connection.js"
import { ctxStart } from "../ctxMiddleware/start.js"
import { findUser } from "../common/user/findUser.js"
import { menu } from "../ctxMiddleware/menu.js"
import { ctxUnderMenu } from "../ctxMiddleware/ctxUnderMenu.js"
export const startBot = () => bot.start(async (ctx, next) => {

  // console.log("under: ", ctx.session)
  await ctxStart(ctx)
  if (ctx.chat.id < 0) {
    ctx.session.userDM = false
  }
  // console.log("post: ", ctx.session)
  ctxUnderMenu(ctx)
  menu(ctx)
  next()

})



