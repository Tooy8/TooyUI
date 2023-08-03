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
    <y-space>
      <y-button>123</y-button>
      <y-button>123</y-button>
      <y-button>123</y-button>
      <y-button>123</y-button>
      <y-button>123</y-button>
      <y-button>123</y-button>
      <y-button>123</y-button>
      <y-button>123</y-button>

    </y-space>
  </div>
</template>



<script setup>
import { ref } from 'vue'
const val = ref('')
const val2 = ref('')
const val3 = ref('')
const val4 = ref('')

</script>

<style lang="scss" scoped></style>
