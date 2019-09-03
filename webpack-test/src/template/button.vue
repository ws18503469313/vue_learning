<template>
    <button @click="handleClick" :style="styles"><a>123</a></button>
</template>

<script>
    export default {
        props: {
            color: {
                type: String,
                default: "#00cc66"
            }
        },
        computed: {
            styles(){
                return {
                    backgroundColor: this.color
                }
            }
        },
        methods: {
            handleClick(e){
                console.log('button component event')
                this.$emit("click", e)//调用父组件的方法
            }
        }
    }
</script>

<style scoped>
    button{
        border: 0;
        outline: none;
        color: #fff;;
        padding: 4px 8px;
    }
    button:active{
        position: relative;
        top: 1px;
        left: 1px;
    }
</style>