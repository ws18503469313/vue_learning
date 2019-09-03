<template>
    <div>
        <div>Hello{{name}}</div>
        <div>
            <v-title title="Vue组件化" ></v-title>
            <v-button @click="handleClick" >点击按钮</v-button>
        </div>
        <p>
            <img src="../images/1567479808(1).jpg" style="width: 200px;" />
        </p>
    </div>
</template>
<script>
    import vTitle from './title.vue'
    import vButton from  './button.vue'

    export default{
        data() {
            return {
                name: 'Vue.js'
            }
        },
        components: {
            vTitle,
            vButton
        },
        methods: {
            handleClick(e){
                console.log('parent component event')
                console.log(e)
            }
        }
    }
</script>
<style scoped >
    div {
        color: #5bc0de;
        font-size: 24px;
    }
</style>