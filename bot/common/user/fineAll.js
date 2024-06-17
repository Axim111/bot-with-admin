import prisma from '../../connection/db.connection.js'
export const findUsers = async () => {
	try {
		const userFound = await prisma.user.findMany()
		return userFound
	} catch (e) {
		console.log(e)
	}
}
