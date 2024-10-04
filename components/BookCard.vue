<template>
   
      <div v-if="book" class="bg-red-300 ">
        <div class="grid gap-2">
          <img  class="rounded-t" :src="book.cover" alt="product image">
          <p>{{ book.title }}</p>
          <span> {{ book.author.name }} </span>
          <p >{{ book.genres.map(g => g.genre.genre).join(', ') }}</p>
          <span>rate {{ book.rate }} </span>
          <span> {{ priceComputed }} </span>
        </div>
      </div>
</template>

<script setup>
const props = defineProps(['book'])
const {book} = toRefs(props)

const priceComputed = computed(() => {
  let result = (book.value.price + (book.value.price / 20)) / 100
  return result.toFixed(2)
}

)

</script>

