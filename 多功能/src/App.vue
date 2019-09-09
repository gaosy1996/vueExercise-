<template>
    <div id='app'>
        <Header></Header>
        <main>
            <router-view></router-view>
        </main>
    </div>
</template>

<script>
import Header from '@/components/Header'
export default {
    components:{
        Header
    }
}
</script>

<style>
    *{
        margin: 0;
        padding: 0;
        list-style: none;
        text-decoration: none;
        font-size: 14px;
    }

    html,body,#app{
        width: 100%;
        height: 100%;
    }
</style>
