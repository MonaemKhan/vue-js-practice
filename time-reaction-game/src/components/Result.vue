<template>
    <h4>Reaction Time is : {{ Score }}ms</h4>
    <h3>Your Rank Is {{ rank }}</h3>
</template>
  
  <script>
  export default {
      name: 'Result',
      props:['Score'],
      data(){
        return{
            rank : null,
        }
      },
      mounted(){
        if(this.Score <= 200){
            this.rank = 'You have a Good Reflex';
        }else{
            this.rank = 'You Need More Focus';
        }
      }
  }
  </script>
  
  <style>
  
  </style>