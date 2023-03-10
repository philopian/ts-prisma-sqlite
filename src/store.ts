import prisma from './prisma'

interface CreateUser {
  name: string
  email: string
}
interface UpdateUser {
  id: number
  name: string
  email: string
}

export async function createUser({ name, email }: CreateUser) {
  try {
    const user = await prisma.user.create({
      data: {
        name,
        email,
      },
    })
    return user
  } catch (error) {
    console.log('[Error] user NOT created', error)
  }
}

export async function getUser(id: number) {
  const users = await prisma.user.findFirst({
    where: { id },
  })
  return users
}

export async function getAllUsers() {
  const users = await prisma.user.findMany()
  return users
}

export async function updateUser({ id, name, email }: UpdateUser) {
  try {
    const user = await prisma.user.update({
      where: { id },
      data: { name, email },
    })
    return user
  } catch (error) {
    console.log('[Error] no user to update', error)
  }
}

export async function deleteUser(id: number) {
  try {
    const user = await prisma.user.delete({
      where: { id },
    })
    return user
  } catch (error) {
    console.log('[Error] no user found', error)
  }
}
