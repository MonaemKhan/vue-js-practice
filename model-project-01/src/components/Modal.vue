<template>
  <div class="backdrop" @click.self="closeModal">
    <div class="modal" :class="{sale: theme === 'sale'}">
        <h1>{{ header }}</h1>
        <p>{{ text }}</p>
        <slot>Default Content</slot>
        <button @click.self="okButtonClick"> OK </button>
        <div>
            <slot name="links"></slot>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'Modal',
    props:['header','text','theme'],
    methods:{
        closeModal(){
            this.$emit('close');
        },
        okButtonClick(){
            this.$emit('OKPress');
        }
    }
}
</script>

<style>
.modal{
    width: 400px;
    padding: 20px;
    margin: 100px auto;
    background: white;
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
    background: red;
}
</style>