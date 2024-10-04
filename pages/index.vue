<template>
  <div class="grid gap-4 py-4">
    <!-- Genres Display -->
    <div v-if="genres" class="flex space-x-2">
      <label
        v-for="genre in genres"
        :key="genre.id"
        :class="[
          'p-2 rounded-md cursor-pointer',
          selectGenre.includes(genre.genre) ? 'bg-rose-300' : 'bg-sky-300'
        ]"
      >
        <input type="checkbox" :value="genre.genre" v-model="selectGenre" class="hidden" />
        {{ genre.genre }}
      </label>
    </div>
    <div v-else>
      <p>No genres found</p>
    </div>

    <!-- Books Display -->
    <div v-if="filteredBooks && filteredBooks.length > 0" class="grid xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4">
      <div v-for="book in filteredBooks" :key="book.id">
        <BookCard :book="book" />
      </div>
    </div>
    <div v-else>
      <p>No books found</p>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onBeforeMount } from 'vue'
import BookCard from '~/components/BookCard.vue'

// Data references
const books = ref([]);
const genres = ref([]);
const selectGenre = ref([]); // Array to store selected genres
const selectRate = ref(null)

// Fetch books
onBeforeMount(async () => {
  const { data, error } = await useFetch('/api/prisma/get-books/');
  if (error.value) {
    console.error('Error fetching books:', error.value);
  } else {
    books.value = data.value; // Ensure books contain genres
  }
});

// Fetch genres
onBeforeMount(async () => {
  const { data, error } = await useFetch('/api/prisma/get-genres/');
  if (error.value) {
    console.error('Error fetching genres:', error.value);
  } else {
    genres.value = data.value;
  }
});

// Filter books by selected genres
const filteredBooks = computed(() => {
 

  if (selectGenre.value.length === 0) {
    return books.value; // No filters applied
  }

  const filtered =
   books.value.filter(book => {
    return book.genres && book.genres.some(genreObj => 
      selectGenre.value.includes(genreObj.genre.genre) // Access the genre property
    );
  });

  console.log('Filtered Books:', filtered); // Log the filtered results
  return filtered;

 
  //  books.value.filter(book => {
  //   return book.genres && book.genres.some(genreObj => 
  //     selectGenre.value.includes(genreObj.genre.genre) // Access the genre property
  //   );
  // });

  
});
</script>
