<template>
    <div>
        <el-time-select v-model="value1" :picker-options="{
            start: '08:30',
            step: '00:15',
            end: '18:30'
        }" placeholder="选择时间">
        </el-time-select>
    </div>
</template>

<script>
  export default {
    name : 'TimePicker',
    data () {
      return {
        value1 : ''
      }
    }
  }
</script>


<style scoped>
  @import url("//unpkg.com/element-ui@2.4.6/lib/theme-chalk/index.css");
</style>