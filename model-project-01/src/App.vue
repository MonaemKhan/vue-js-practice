<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <p>Welcome .. .. .. .. </p>
  <div v-if="isModalShow">
    <Modal :header="hrader" :text="text" theme="salew" 
    @close="ModalOPenClick" @OKPress="ModalOkPress">
    <h1>Hiiiiiiiiiii</h1> <!-- this is called inside slot -->
    <template v-slot:links>
      <a href="#">Sign In</a>
      <a href="#">Sign Up</a>
    </template>
    </Modal>
  </div>
  <button @click="ModalOPenClick">Open Modal</button>
</template>

<script>
import Modal from './components/Modal.vue'

export default {
  name: 'App',
  components: {
    Modal
  },
  data(){
    return{
      hrader: 'Sigh Up for Free !!',
      text: 'Grab Your things :) ',
      isModalShow: false,
    }
  },
  methods:{
        ModalOPenClick(){
            this.isModalShow = !this.isModalShow;
        },
        ModalOkPress(){
          this.text = 'Ok Button Is Pressed';
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
