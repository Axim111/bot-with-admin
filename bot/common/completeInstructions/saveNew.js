import { bot } from "../../connection/token.connection.js"
import prisma from "../../connection/db.connection.js"
const saveNew = async (login, username, ctx) => {
  try {
    const userFound = await prisma.user.findUnique({
      where: {
        login
      }

    })
    // console.log("userFound", userFound)
    if (userFound) {
      if (userFound.username !== username) {
        const user = await prisma.user.update({
          where: {
            login
          },
          data: {
            username
          }
        })
        // ctx.reply(`${username} ваше име обнавлено!`)
        ctx.session.user = user

        return
      }
      ctx.session.user = userFound

      return
      // ctx.reply(`${userFound.username}, вы уже были зарегистрированы`)
    }
    else {
      const user = await prisma.user.create({
        data: {
          login,
          username
        }
      })
      ctx.session.user = user
      // ctx.reply("вы внесены в бд")

      return
    }
  } catch (e) {
    console.log(e)
  }
}
export default saveNew