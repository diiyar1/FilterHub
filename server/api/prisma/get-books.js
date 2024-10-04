import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
    let books = await prisma.books.findMany({
      include: {
        author: true, //include the author detalis
        genres: {
          include: {
            genre: true, // Fetch the genre details from the Genres model
          },
        },
      },
    });
    return books
  })
  