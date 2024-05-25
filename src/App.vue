<template>
  <div>

    <img alt="Vue logo" src="./assets/logo.png">
    {{ messageCount }}
    <button @click="increment">click me</button>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
export default {
  name: 'App',
  components: {
  },
  computed: {
    ...mapState({
      messageCount: (state) => state.user.user,
    })
  },
  methods: {
    ...mapMutations(['increment'])
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
