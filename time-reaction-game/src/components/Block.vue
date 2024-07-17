<template>
    <div class="block" v-if="isblock" @click="StopTime">
        <h3>Click Me .. .. ..</h3>
    </div>
</template>

<script>
export default {
    name: 'Block',
    props: ['delay'],
    data() {
        return {
            isblock: false,
            timer: null,
            reactionTime: 0,
        }
    },
    mounted() {
        setTimeout(() => {
            this.isblock = true;
            this.StartTime();
        }, this.delay);
    },
    methods: {
        StartTime() {
            this.timer = setInterval(() => {
                this.reactionTime += 1;
            }, 1);
        },
        StopTime() {
            clearInterval(this. timer);
            this.$emit('endTime',this.reactionTime);
            this.isblock = false;
        }
    }
}
</script>

<style>
.block {
    width: 400px;
    border-radius: 20px;
    background: aqua;
    color: whitesmoke;
    text-align: center;
    padding: 100px 0;
    margin: 40px auto;
}
</style>