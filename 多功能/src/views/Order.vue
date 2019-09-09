<template>
  <div>
      <Item v-for="(item,index) in bookList" :key='index' :bookName='item.bookName' :bookId='item.bookId'/>
  </div>
</template>

<script>
    import mock from "@/mock";
    import Item from '../components/Item';
    export default {
        data(){
            return{
               bookList:[]
            }
        },
        created(){
            this.axios('/api/bookList').then(res => {
                console.log(res.data.ranklist0)
                this.bookList = res.data.ranklist0
            })
        },
        components:{
            Item
        }
    }
</script>

<style scoped>
    
</style>