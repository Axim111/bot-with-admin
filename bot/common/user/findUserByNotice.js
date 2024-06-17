import prisma from "../../connection/db.connection.js"
export const findUsersByNotice = async () => {
  try {
    const userFound = await prisma.user.findMany({
      where: {
        notice: true,
      }

    })
    return userFound


  }
  catch (e) {
    console.log(e)
  }
}
