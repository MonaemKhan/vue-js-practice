<template>
  <div class="backdrop">
    <div class="modal" :class="{sale: theme === 'success'}">
        <h1>{{ header }}</h1>
        <p>{{ text }}</p>
    </div>
  </div>
</template>

<script>
export default {
    name: 'ModalView',
    props:['header','text','theme'],
    
}
</script>

<style>
.modal{
    width: 400px;
    padding: 20px;
    margin: 100px auto;
    background: rgb(233, 63, 63);
    border-radius: 10px;
}

.backdrop{
    top: 0;
    position: fixed;
    background: rgba(0, 0, 0, 0.678);
    width: 100%;
    height: 100%;
}
h1{
    color: aquamarine;
    border: none;
    padding: 0;
}

.modal.sale{
    background: green;
}
</style>