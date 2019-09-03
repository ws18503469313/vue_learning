<template>
    <div>
        {{number}}
        <button @click="addRandom">随机增加</button>
    </div>
</template>

<script>
    export default {
        name: "counter",
        props: {
            number: {
                type: Number
            }
        },
        methods: {
            addRandom(){
                var num = Math.floor(Math.random() * 100+1)
                this.$bus.emit('add', num)
            }


        }
    }
</script>

<style scoped>

</style>