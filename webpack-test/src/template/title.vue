<template>
    <h1>
        <a :href=" '#' + title">{{title}}</a>
    </h1>
</template>

<script>
    export default {
       props: {//从父容器中获取值
           title: {
               type: String
           }
       }
    }
</script>

<style scoped>
    h1 a{
        color: #e4b9b9;
        font-size: 24px;
    }
</style>