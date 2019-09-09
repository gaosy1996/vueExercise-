<template>
    <div>
         3333
         <li v-for="(item,index) in favBook" :key='index'>
             {{item}}
         </li>
    </div>
</template>

<script>
import { mapState } from 'vuex'
    export default {
        computed:{
            ...mapState(['favBook'])
        }
    }
</script>

<style scoped>

</style>