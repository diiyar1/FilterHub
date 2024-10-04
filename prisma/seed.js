import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function seedBooks() {
  try {
    // Seed the first book
    const book1 = await prisma.books.create({
      data: {
        title: "The Fate of Fausto",
        description: "The Fate of Fausto is a modern-day fable that tells the story of a man named Fausto who believes he owns everything...",
        rate: 8,
        published: new Date("2003-02-01"),
        pages: 96,
        price: 414,
        cover: "https://imgs.search.brave.com/idvnEZ_u3gRTCue1YrsNul0YxNWgfOIAL3VS-FSaRUY/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9ibG9nLWNkbi5yZWVkc3kuY29tL3VwbG9hZHMvMjAxOS8xMi9mYXVzdG8tNzQ0eDEwMjQuanBn",
        author: {
          connectOrCreate: {
            where: { name: "Oliver Jeffers" },
            create: { name: "Oliver Jeffers" },
          },
        },
        genres: {
          create: [
            {
              genre: {
                connectOrCreate: {
                  where: { genre: "childrens" },
                  create: { genre: "childrens" },
                },
              },
            },
            {
              genre: {
                connectOrCreate: {
                  where: { genre: "nature" },
                  create: { genre: "nature" },
                },
              },
            },
            {
              genre: {
                connectOrCreate: {
                  where: { genre: "Fiction" },
                  create: { genre: "Fiction" },
                },
              },
            },
          ],
        },
      },
    });
    console.log("Book and genres successfully seeded:", book1);

    // Seed the second book
    const book2 = await prisma.books.create({
      data: {
        title: "One of Us Is Dead",
        description: "The highly anticipated new thriller from the bestselling author of The Perfect Marriage...",
        rate: 6,
        published: new Date("2003-02-01"),
        pages: 100,
        price: 6789,
        cover: "https://imgs.search.brave.com/ttfbov4vyvR1NyNpFS3ZyeVdoe9yERcR9eCI0GuoimY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFnZXMtbmEuc3NsLWltYWdlcy1hbWF6b24uY29tL2ltYWdlcy9J/LzgxbjhjM0NoSXJM",
        author: {
          connectOrCreate: {
            where: { name: "Jeneva Rose" },
            create: { name: "Jeneva Rose" },
          },
        },
        genres: {
          create: [
            {
              genre: {
                connectOrCreate: {
                  where: { genre: "Thriller" },
                  create: { genre: "Thriller" },
                },
              },
            },
            {
              genre: {
                connectOrCreate: {
                  where: { genre: "mystery" },
                  create: { genre: "mystery" },
                },
              },
            },
            {
              genre: {
                connectOrCreate: {
                  where: { genre: "Fiction" },
                  create: { genre: "Fiction" },
                },
              },
            },
            {
              genre: {
                connectOrCreate: {
                  where: { genre: "contemporary" },
                  create: { genre: "contemporary" },
                },
              },
            },
            {
              genre: {
                connectOrCreate: {
                  where: { genre: "crime" },
                  create: { genre: "crime" },
                },
              },
            },
            {
              genre: {
                connectOrCreate: {
                  where: { genre: "Young Adult" },
                  create: { genre: "Young Adult" },
                },
              },
            },
          ],
        },
      },
    });
    console.log("Book and genres successfully seeded:", book2);

    // Seed the third book
    const book3 = await prisma.books.create({
      data: {
        title: "Twisted Love",
        description: "He has a heart of ice … but for her, he'd burn the world...",
        rate: 4,
        published: new Date("2003-02-01"),
        pages: 609,
        price: 1099,
        cover: "https://imgs.search.brave.com/MIeL6P5fJ9RCOByVHU8_nDAKXuj92x9UCF0uYmL2PXA/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9zMjk4/Mi5wY2RuLmNvL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDIzLzEx/L3VzLWJvb2stY292/ZXIuanBlZy5vcHRp/bWFsLmpwZWc",
        author: {
          connectOrCreate: {
            where: { name: "Ana Huang" },
            create: { name: "Ana Huang" },
          },
        },
        genres: {
          create: [
            {
              genre: {
                connectOrCreate: {
                  where: { genre: "romance" },
                  create: { genre: "romance" },
                },
              },
            },
            {
              genre: {
                connectOrCreate: {
                  where: { genre: "Memoir" },
                  create: { genre: "Memoir" },
                },
              },
            },
            {
              genre: {
                connectOrCreate: {
                  where: { genre: "crime" },
                  create: { genre: "crime" },
                },
              },
            },
          ],
        },
      },
    });
    console.log("Book and genres successfully seeded:", book3);

    // Seed the fourth book
    const book4 = await prisma.books.create({
      data: {
        title: "The Boy at the Back of the Class",
        description: "The Boy at the Back of the Class tells the story of a young refugee boy named Ahmet...",
        rate: 9,
        published: new Date("2003-02-01"),
        pages: 80,
        price: 514,
        cover: "https://imgs.search.brave.com/33qajASBN6Fw2w-AFSXtaB1SGfn7DtuPQg5zCpD3nFQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9ibG9nLWNkbi5yZWVkc3kuY29tL3VwbG9hZHMvMjAxOS8xMi9ib3ktYXQtdGhlLWJhY2suanBn",
        author: {
          connectOrCreate: {
            where: { name: "Onjali Q. Raúf" },
            create: { name: "Onjali Q. Raúf" },
          },
        },
        genres: {
          create: [
            {
              genre: {
                connectOrCreate: {
                  where: { genre: "Fiction" },
                  create: { genre: "Fiction" },
                },
              },
            },
            {
              genre: {
                connectOrCreate: {
                  where: { genre: "childrens" },
                  create: { genre: "childrens" },
                },
              },
            },
            {
              genre: {
                connectOrCreate: {
                  where: { genre: "contemporary" },
                  create: { genre: "contemporary" },
                },
              },
            },
            {
              genre: {
                connectOrCreate: {
                  where: { genre: "art" },
                  create: { genre: "art" },
                },
              },
            },
          ],
        },
      },
    });
    console.log("Book and genres successfully seeded:", book4);

  } catch (error) {
    console.error("Error seeding books:", error);
  } finally {
    await prisma.$disconnect();
  }
}

seedBooks();
