import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import mock from '@/mock';

Vue.use(Vuex);


const state = {
   favBook:[]
}

const mutations = {
   getfavBook(state,msg){
      state.favBook.push(msg)
      console.log('1',state.favBook.push(msg))
   }
}

const actions = {
    
}



export default new Vuex.Store({
    state,
    mutations,
    actions
})