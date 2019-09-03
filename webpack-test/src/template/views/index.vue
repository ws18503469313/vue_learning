<template>
    <div>
        <div>首页</div>
        <div>随机增加
            <Counter :number="number"></Counter>
        </div>
    </div>
</template>

<script>
    import Counter from "./counter.vue";
    export default {
        name: "index",
        components: {Counter},
        data() {
            return {
                number: 0
            }
        },

        methods: {
            addRandom(num){
                this.number += num
            }
        },
        created() {//$bus需要在组件创建的时候使用
            this.$bus.on("add", this.addRandom)
        },
        beforeDestroy() {//使用结束后,销毁监听句柄
            this.$bus.off("add", this.addRandom)
        }
    }
</script>

<style scoped>

</style>