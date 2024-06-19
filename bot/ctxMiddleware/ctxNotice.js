import { CronJob } from 'cron';
import { findUsersByNotice } from "../common/user/findUserByNotice.js"
import { useNewReplies } from "telegraf/future";
import { updateNotice } from "../common/user/updateNotice.js"
import { findUser } from "../common/user/findUser.js"
export const ctxChangNotice = async (ctx) => {

  new CronJob(
    '35 * * * * *', // cronTime

    async () => {

      const users = await findUsersByNotice()

      for (let i in users) {


        setTimeout(async () => {

          try { await ctx.telegram.sendMessage(users[i].login, "croneFake") } catch (e) {
            const user = await findUser(users[i].login)
            updateNotice(user)
          }

        }, 50 * (i))
      }

    }, // onTick
    null, // onComplete
    true, // start
    'America/Los_Angeles' // timeZone
  );


  ctx.editMessageReplyMarkup();

}