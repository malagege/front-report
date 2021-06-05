<template>
  <h2>回報新增</h2>
  <button class="btn btn-default btn-primary" @click="addReport" :disabled="disableBtn == true">新增回報</button>
  <div class="row ">
    <div class="col d-flex">
    <input class="flex-grow-1" ref="title" type="text" placeholder="回報標題">
    </div>
  </div>
  <div class="row ">
    <div class="col d-flex" >
      <textarea  class="flex-grow-1" ref="content" placeholder="回報內容"></textarea>
    </div>
  </div>

</template>

<script>
import api from '../fetch.js'

export default{
  emits:['reloadData'],
  data(){
    return {
      disableBtn: false
    }
  },
  methods:{
    addReport(){
      this.disableBtn = true;
      api.addReport(this.$refs.title.value,this.$refs.content.value).then(result=>{
        if(result.success){
          this.$refs.title.value = '';
          this.$refs.content.value = '';
          this.$emit('reloadData')
        }
          alert(result.msg)
          this.disableBtn = false;
      })
    }
  }
}
</script>

<style>

</style>