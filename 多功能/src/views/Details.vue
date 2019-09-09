<template>
    <div>
        详情页
        {{msg}}
        <button @click="getfavBook(msg)">++收藏++</button>
    </div>
</template>

<script>
    import { mapMutations } from 'vuex'
    export default {
        data(){
            return{
                 msg:''
            }
        },
        methods:{
            ...mapMutations(['getfavBook']),
    
        },
        created(){
            this.msg = this.$route.params.name
        }

    }
</script>

<style scoped>

</style>