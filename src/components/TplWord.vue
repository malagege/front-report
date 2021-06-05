<template>
    <h2>文字模版修改</h2>
    <div class="row">
        <div class="col">
            <button class="btn btn-default btn-success" @click="$emit('addTplWord')">新增</button>
        </div>
    </div>
    <div class="row" v-for="(word,index) in tplWord" :key="index">
        <div class="col-12 d-flex">
            <input  class="control-form flex-grow-1" type="text" :value="word" @input="$emit('updateTplWord',index,$event.target.value)"/>
            <button class="btn btn-default btn-danger" @click="$emit('deleteTplWord',index)">刪除</button>
        </div>
    </div>
</template>

<script>

export default {
    emits:['addTplWord','updateTplWord','deleteTplWord'],
    props:['tplWord']
}
</script>

<style>

</style>