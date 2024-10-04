import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
    let genres = await prisma.genres.findMany()
    console.log(genres) // Log to see how many genres are fetched
    return genres
  })
  