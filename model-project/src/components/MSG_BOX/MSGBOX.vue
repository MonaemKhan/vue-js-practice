<template>
    <div class="top-div" v-if="isShow">
        <div class="top-div-header">
            <button @click="hide_click">X</button>
        </div>
        <div class="top-div-body">
            {{MSG}}
        </div>
        <div class="top-div-footer">
            <button class="top-div-footer-cencle" @click="hide_click">Test 1</button>
            <button class="top-div-footer-ok" @click="hide_click">Test 2</button>
        </div>
    </div>
</template>

<script>
console.log('hi');
export default ({
    name: 'MSGBOX',
    props : {
        MSG:String,
    },
    data(){
        return{
            isShow : true
        }
    },
    methods: {
        hide_click(){
            this.isShow = false
        }
    },
})
</script>

<style scoped>
.top-div {
    position: absolute; /* or fixed */
    top: 40%;
    left: 30%;
    right: 30%;
    width: 40%;
    background-color: #f8b400;
    color: white;
    padding: 10px;
    z-index: 1000; /* Ensures this div is on top */
}

.top-div-header{
    text-align: right;
    padding: 10px;
    cursor: pointer;
}
.top-div-body{
padding: 10px;
}

.top-div-footer{
    text-align: right;
}

.top-div-footer button{
    border-radius: 5px;
    border: none;
    background-color: #f8b400;
    cursor: pointer;
}

.top-div-footer .top-div-footer-cencle{
    color: red;
}

.top-div-footer .top-div-footer-ok{
    color: green;
}
</style>