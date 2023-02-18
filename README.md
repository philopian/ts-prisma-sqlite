

```shell
$ npx tsc --init
$ npm install prisma --save-dev
$ npx prisma init --datasource-provider sqlite
```


vscode extension => Prisma.prisma



```shell
# Add a migration
npx prisma migrate dev --name init
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