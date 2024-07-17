<template>
    <h1>{{ msg }}</h1>
    <h2>{{ title }}</h2>
    <MSGBOX MSG="THis Is from Test Monaem File PopUp View" ></MSGBOX>
</template>

<script>

import MSGBOX from './MSG_BOX/MSGBOX.vue'

export default {
    name: 'TestMonaem',
    components:{
        MSGBOX,
    },
    props:{
        msg: String
    },
    data(){
        return{
            title: 'This Is title',
        }
    }
}
</script>