<template>
    <div class="main">
        <div class="left">
             <ul>
                 <li 
                    v-for="(item,index) in meunList" :key='index' 
                    @click="btn(index)"
                    :class='index === currentIndex ? "active" : ""  '
                >
                     {{item.title}}
                 </li>
             </ul>
        </div>
        <div class="right">
            <li v-for="(item,index) in currentList" :key='index'>
                <span>{{item.title}}</span>
                 <p>{{item.con}}</p>
            </li>
        </div>
    </div>
</template>

<script>
    import mock from '@/mock'
    export default {
        data(){
            return{
               meunList:[],
               currentIndex:0,
               currentList:[]
            }
        },
        methods:{
           btn(index){
               this.currentIndex = index
               this.req()
           },
           req(){
               this.axios('/api/list').then(res => {
                    this.meunList = res.data
                    this.currentList = this.meunList[this.currentIndex].list
               })
           }
        },
        created(){
            this.req()
        }
    }
</script>

<style scoped>
    .main{
       flex: 1;
       display: flex;
    }

    .left{
       width: 30%;
       height: 100%;
       border-right: 1px solid #000; 
    }

    .left li {
        width: 100%;
        height: 50px;
        line-height: 50px;
        text-align: center;
    }
    
    .right{
        flex: 1;
    }

    .right li {
        width: 100%;
        height: 100px;
        border-bottom: 1px solid #ccc;
    }

    .active{
        background: #ccc;
        color: blue;
    }
</style>