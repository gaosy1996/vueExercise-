<template>
    <div class="header">
         <router-link to='/' tag='li'>点菜</router-link>
         <router-link to='/evaluate' tag='li'>评价</router-link>
         <router-link to='/merchant' tag='li'>商家</router-link>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
    .header{
        width: 100%;
        height: 44px;
        background: #efefef;
        border-bottom: 1px solid #eee;
        display: flex;
        align-items: center;
        justify-content: space-around; 
    }
</style>