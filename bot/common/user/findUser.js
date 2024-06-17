import prisma from "../../connection/db.connection.js"
export const findUser = async (login) => {
  try {
    const userFound = await prisma.user.findUnique({
      where: {
        login: login.toString()
      }

    })
    return userFound


  }
  catch (e) {
    console.log(e)
  }
}
