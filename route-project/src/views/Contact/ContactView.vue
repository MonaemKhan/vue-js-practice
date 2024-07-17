<template>
  <h1>From Contact View Page</h1>
  <h2>{{ id }}</h2>
  <h3>{{ userId }}</h3>
</template>

<script>
export default {
name: 'ContactView',
props:['id','userId']
}
</script>

<style>

</style>