<template>
    <div>
        <li @click="toDetail(bookName,bookId)">
            <span>-----{{bookName}}------</span>
            <span>------{{bookId}}-------</span>
        </li>
         
    </div>
</template>

<script>
    export default {
        props:['bookName','bookId'],
        methods:{
            toDetail(bookName,bookId){
                this.$router.push({
                    name:'Details',
                    params:{
                        id:bookId,
                        name:bookName
                    }
                })
            }
        }
    }
</script>

<style scoped>

</style>