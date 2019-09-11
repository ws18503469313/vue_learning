<template>
    <div>
        <div>{{$store.state.count}}</div>
        <div>{{count}}</div>
        <div>{{message}}</div>
        <div>{{list}}</div>
        <div><input type="text" v-model="size"/></div>
        <div>
            <button @click="handleClick">Change word</button>
            <button @click="increase">inrease</button>
            <button @click="decrease">decrease</button>
        </div>
    </div>

</template>

<script>
    export default {
        name: "message",
        data(){
            return{
                message: "hello world",
                size: 1,
                list: this.$store.getters.filteredList
            }
        },
        methods: {
            handleClick(){
                this.message = 'hello vue'
            },
            increase(){
                this.$store.commit("increasement")
            },
            decrease(){
                this.$store.commit("decreasement", this.size)
            }
        },
        computed: {
            count(){
                return this.$store.state.count
            }
        }
    }
</script>

<style scoped>

</style>