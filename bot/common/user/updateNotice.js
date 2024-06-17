import prisma from '../../connection/db.connection.js'
import { findUser } from './findUser.js'
export const updateNotice = async (user) => {

  // const login = ctx.session.user.login
  const login = user.login

  const noticeUpdated = await prisma.user.update({
    where: {
      login
    },
    data: {
      notice: !user.notice
    }
  })
  return noticeUpdated


}