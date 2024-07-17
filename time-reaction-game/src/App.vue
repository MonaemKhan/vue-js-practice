<template>
  <h1>{{ title }}</h1>
  <button @click="startPlay" :disabled="isBlockShow">Play</button>
  <Block v-if="isBlockShow" :delay="delay" @endTime="endTime" />
  <Result v-if="isResultShow" :Score="score"/>
</template>

<script>
import Result from './components/Result.vue'
import Block from './components/Block.vue'

export default {
  name: 'App',
  components: {
    Result,
    Block
  },
  data() {
    return {
      title: 'Welcome to Reaction Timer Game',
      isBlockShow: false,
      isResultShow: false,
      delay: null,
      score: 0,
    }
  },
  methods: {
    startPlay() {
      this.delay = 2000 + Math.random() * 5000;
      this.isBlockShow = true;
      this.isResultShow = false;
    },
    endTime(reactionTime) {
      this.score = reactionTime;
      this.isBlockShow = false;
      this.isResultShow = true;
    }
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
