import { PrismaClient } from '@prisma/client'

import { createUser, getUser, getAllUsers, updateUser, deleteUser } from './store'

const prisma = new PrismaClient()

async function main() {
  // Create
  const createdUser = await createUser({ name: 'davee', email: 'daveee@dave.com' })
  console.log(`[CREATE USER]`, createdUser)

  const user = await getUser({ id: 2 })
  console.log(`[GET USER]`, user)

  const users = await getAllUsers()
  console.log(`[GET USERS]`, users)

  // Update
  const updatedUser = await updateUser({ id: 2, name: 'michael', email: 'mik@mike.com' })
  console.log(`[UPDATED USER]`, updatedUser)

  // Delete
  const deletedUser = await deleteUser(2)
  console.log(`[DELETED USER]`, deletedUser)

  const whatsLeftInTheDM = await getAllUsers()
  console.log(whatsLeftInTheDM)
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
