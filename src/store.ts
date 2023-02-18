import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function createUser({ name, email }: { name: string; email: string }) {
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

export async function getUser({ id }: { id: number }) {
  const users = await prisma.user.findFirst({
    where: { id },
  })
  return users
}

export async function getAllUsers() {
  const users = await prisma.user.findMany()
  return users
}

export async function updateUser({ id, name, email }: { id: number; name: string; email: string }) {
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

export async function deleteUser() {
  try {
    const user = await prisma.user.delete({
      where: { id: 1 },
    })
    return user
  } catch (error) {
    console.log('[Error] no user found', error)
  }
}
