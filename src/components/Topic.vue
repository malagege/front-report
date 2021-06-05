<template>
  <div class="card">
   <div class="card-header">
    {{ report.title }}
  </div>
  <div class="card-body">
<pre>
{{ report.content }}
</pre>    
  </div>
    <div class="card-footer text-muted">
    <div class="d-flex">
            <input type="text" :value="name" @input="$emit('update:name',$event.target.value)"  style="width:80px">
            <input type="text" ref="inputtext" class="flex-grow-1" style="width:100px">
<div class="btn-group dropup">
  <button type="button" class="btn btn-primary" @click="sendMsg" :disabled="disableBtn == true">
    送出
  </button>
  <button type="button" class="btn btn-primary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
    <span class="visually-hidden">Toggle Dropdown</span>
  </button>
  <ul class="dropdown-menu">
    <li v-for="word in tplWord" :key="word">
        <a class="dropdown-item" href="javascript:;" @click="$refs.inputtext.value=word">{{word}}</a>
    </li>
    <li>
      <div class="dropdown-divider"></div>
    </li>
    <li>
      <span class="dropdown-item" @click="$emit('addTplWord')">
        新增範本
      </span>
    </li>
  </ul>
</div>
    </div>
  </div>
</div>
</template>

<script>
import api from '../fetch.js';

export default {
    emits:['reloadData','addTplWord','update:name'],
    props:['name','tplWord','report'],
    data: function(){
      return {
        disableBtn: false
      }
    },
    methods:{
        printLog(e){
            console.log(e.target.value);
            console.log('hello')
            this.$emit('input:name',e.target.value)
        },
        sendMsg(){
          var msg = this.$refs.inputtext.value;
          console.log(this.$refs.inputtext.value);
          if(!!this.$refs.inputtext.value === false){
            alert('請輸入訊息!!')
            return false;
          }
          // alert(this.$refs.inputtext.value);
          this.disableBtn = true;
          api.sendContent(this.report.id,this.name + " "+ msg).then(result=>{
            console.log(result)
            if(result.success){
              this.$refs.inputtext.value = '';
            }
            alert(result.msg)
            this.$emit('reloadData')
            this.disableBtn = false;
          });
        }
    }
}
</script>

<style>

</style>