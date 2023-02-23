
- Setup
  ```shell
  $ npx tsc --init
  $ npm install prisma --save-dev
  $ npx prisma init --datasource-provider sqlite
  ```
- The `./prisma/schema.prisma` file is the heart of your database structure
- Use the `push` to make changes that are in the `./prisma/schema.prisma` file to your database
- Use the `pull` to change the `./prisma/schema.prisma` file based on the data structure in your database



vscode extension => Prisma.prisma



```shell
# Add a migration
npx prisma migrate dev --name init

# Create changes to your models in `./prisma/schema.prisma`

# Update your data with the changes by doing a push
$ npx prisma db push


# Pull the changes that might have happend to your DB to the `./prisma/schema.prisma` file
$ npx prisma db pull


```

- boilerplate code:
  ```ts
  import { PrismaClient } from '@prisma/client'

  const prisma = new PrismaClient()

  async function main() {
    // ... you will write your Prisma Client queries here
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
  ```