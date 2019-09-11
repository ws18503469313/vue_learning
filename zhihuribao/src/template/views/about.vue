<template>
    <div>
        介绍页
        <div>
            <button @click="turnToUser">跳转到user</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "about",
        methods: {
            turnToUser(){
                this.$router.push("/user/123")
            }
        }
    }
</script>

<style scoped>

</style>