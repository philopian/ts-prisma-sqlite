import { PrismaClient } from '@prisma/client'
import { mockDeep, mockReset, DeepMockProxy } from 'jest-mock-extended'

import prisma from '../src/prisma'
import { createUser, getUser, getAllUsers, updateUser, deleteUser } from '../src/store'

jest.mock('../src/prisma', () => ({
  __esModule: true,
  default: mockDeep<PrismaClient>(),
}))

beforeEach(() => {
  mockReset(prismaMock)
})

export const prismaMock = prisma as unknown as DeepMockProxy<PrismaClient>

describe('Store', () => {
  test('should create new user ', async () => {
    const user = {
      name: 'Rich',
      email: 'hello@prisma.io',
    }

    prismaMock.user.create.mockResolvedValue({ ...user, id: 1 })

    await expect(createUser(user)).resolves.toEqual({ ...user, id: 1 })
  })

  test('should read a user ', async () => {
    const id = 1
    const user = {
      id: 1,
      name: 'Rich',
      email: 'hello@prisma.io',
    }

    prismaMock.user.findFirst.mockResolvedValue(user)

    await expect(getUser(id)).resolves.toEqual(user)
  })

  test('should read all users ', async () => {
    const users = [
      {
        id: 1,
        name: 'Rich',
        email: 'one@prisma.io',
      },
      {
        id: 2,
        name: 'Rich',
        email: 'two@prisma.io',
      },
    ]

    prismaMock.user.findMany.mockResolvedValue(users)

    await expect(getAllUsers()).resolves.toEqual(users)
  })

  test('should update a users name ', async () => {
    const user = {
      id: 1,
      name: 'Rich Haines',
      email: 'hello@prisma.io',
    }

    prismaMock.user.update.mockResolvedValue(user)

    await expect(updateUser(user)).resolves.toEqual({
      id: 1,
      name: 'Rich Haines',
      email: 'hello@prisma.io',
    })
  })

  test('should delete a user ', async () => {
    const user = {
      id: 1,
      name: 'Rich Haines',
      email: 'hello@prisma.io',
    }

    prismaMock.user.delete.mockResolvedValue(user)

    const id = 1
    await expect(deleteUser(id)).resolves.toEqual(user)
  })
})
