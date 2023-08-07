<template>
  <!-- 按钮 -->
  <div>
    <y-button>默认按钮</y-button>
    <y-button type="primary">主要按钮</y-button>
    <y-button type="success">成功按钮</y-button>
    <y-button type="info">信息按钮</y-button>
    <y-button type="warning">警告按钮</y-button>
    <y-button type="error">危险按钮</y-button>
    <br />
    <y-button type="info" disabled>信息按钮</y-button>
    <y-button type="warning" disabled>警告按钮</y-button>
    <y-button type="error" disabled>危险按钮</y-button>
    <br />

    <y-button type="info" plain>信息按钮</y-button>
    <y-button type="warning" plain>警告按钮</y-button>
    <y-button type="error" plain>危险按钮</y-button>
  </div>

  <!-- input -->
  <div>
    <y-input v-model="val" placeholder="请输入" disabled></y-input>
    <y-input v-model="val2" placeholder="请输入" clearable></y-input>
    <y-input v-model="val3" placeholder="请输入" password></y-input>
  </div>


  <!-- textarea -->
  <div>
    <y-textarea v-model="val4" :maxlength="10" placeholder="请输入" readonly disabled :resize="false" :cols="50"
      :rows="10"></y-textarea>
  </div>

  <!-- space -->
  <div>
    <y-space :inline=true :size='[10, 10]'>
      <y-button>demo</y-button>
      <y-button>demo</y-button>
      <y-button>demo</y-button>
      <y-button>demo</y-button>
      <y-button>demo</y-button>
      <y-button>demo</y-button>
      <y-button>demo</y-button>
      <y-button>demo</y-button>
    </y-space>
  </div>

  <!-- select -->
  <div>
    <y-select :options="state.options" filedLabel="name" filedValue="id" placeholder="请选择"></y-select>
  </div>

  <!-- radio -->
  <div>
    <y-radio :options="state.options" filedLabel="name" filedValue="id" @change="change" customColor="#09b63d"
      :inline=false></y-radio>
  </div>

  <!-- upload -->
  <div>
    <y-upload multiple @change="change" label="上传文件" btnType="success" drag> </y-upload>
  </div>
</template>




<script setup>
import { ref, reactive } from 'vue'
const val = ref('')
const val2 = ref('')
const val3 = ref('')
const val4 = ref('')
const state = reactive({
  options: [{ name: "中国", id: 'China', disabled: true }, { name: "美国", id: 'America' }, { name: "韩国", id: 'Korea' }, { name: "俄罗斯", id: 'Russia' },]
})
const change = (e) => {
  console.log(e);
}
</script>

<style lang="scss" scoped></style>
