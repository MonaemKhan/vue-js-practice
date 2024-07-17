<template>
  <h1>Helloow Wrold</h1>
  <TestMonaem msg="Monaem Khan Is" mst="View From nested Page"></TestMonaem>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import TestMonaem from './components/TestMonaem.vue'
export default {
  name: 'App',
  components: {
    HelloWorld,
    TestMonaem
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
