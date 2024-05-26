<template>
  <div>
    <p class="bg-red-500"> Counter: {{ publishedBooksMessage }}</p>
    <button @click="increment">Increment</button>
    <button @click="decrement">Decrement 3</button>
  </div>

</template>

<script setup lang="ts">
import { useStore } from 'vuex';
import { computed } from 'vue'
import { State } from './../store';
const store = useStore<State>();

const publishedBooksMessage = computed(() => {
  return store.state.counter.count
})
const increment = () => {
  store.dispatch('counter/increment');
};

const decrement = () => {
  store.dispatch('counter/decrement');
};

</script>