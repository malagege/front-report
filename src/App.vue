<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  <!-- <HelloWorld msg="Hello Vue 3 + Vite" /> -->
  <Header />
  <div class="container">

      <!-- :name="state.name" 
      @input:name="chgUserName"  -->

    <div v-if="$route.name == 'topic'">
      <component :is="Topic" v-for="report in reports"
        :report="report"
        @reloadData="reloadData"
        v-model:name="state.name"
        @update:name="chgUserName"
        :tplWord="state.tplWord" 
        @addTplWord="addTplWord" 
        :key="report.id" />
    </div>
    <div v-else-if="$route.name == 'tplword'">
      <TplWord :tplWord="state.tplWord" 
                @updateTplWord="cghTplWord"
                @deleteTplWord="deleteTplWord"
                @addTplWord="addTplWord"
                />      
    </div>
    <div v-else>
      <Leo @reloadData="reloadData" />
    </div>
  </div>

</template>

<script setup>
import { ref } from 'vue'
import { useStorage } from '@vueuse/core'
import HelloWorld from './components/HelloWorld.vue'
import Topic from './components/Topic.vue'
import Leo from './components/Leo.vue'
import TplWord from './components/TplWord.vue'
import Header from './components/Header.vue'
import api from './fetch.js';

const name = ref('testffff')
var reports = ref([]);
reloadData();
const test = ref('Topic')
const state = useStorage('vue-use-locale-storage', {
  name: '人名',
  tplWord: [' GPS 打卡 VPN已連 體溫: ',' GPS 打卡 體溫: ','DONE']
})

function reloadData(){
  api.getReports().then(data=>reports.value = data);
}


function chgUserName(value){
  name.value = value;
  state.value.name = value
  console.log('chgUserName state.name:' + state.name);
}

function cghTplWord(index,value) {
  console.log(index,value);
  state.value.tplWord[index] = value;
}

function deleteTplWord(index) {
  console.log(index);
  state.value.tplWord.splice(index,1);
}

function addTplWord(){
  state.value.tplWord.push(prompt("請輸入文字範本"))
}
// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/script-setup-2/active-rfcs/0000-script-setup.md
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;

}
</style>
