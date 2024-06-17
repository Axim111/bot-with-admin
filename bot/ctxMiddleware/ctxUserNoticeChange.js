import { updateNotice } from "../common/user/updateNotice.js"
import { menu } from "./menu.js"
export const ctxUserNoticeChange = async (ctx) => {
  const user = ctx.session.user
  const updatedNotice = updateNotice(user)
  ctx.session.user = await updatedNotice

  try {
    await ctx.telegram.deleteMessage(ctx.chat.id, ctx.update.callback_query.message.message_id)
  }
  catch (e) {
    console.log(e)
  }

  // ctx.editMessageReplyMarkup();
  // menu(ctx)
}