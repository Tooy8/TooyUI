<style>
    .example{
        border: 1px solid #f5f5f5;
        border-radius: 5px;
        padding:20px
    }
 .y-textarea{
    border:1px solid #eee
 }
    details > summary:first-of-type {
        font-size: 10px;
        padding: 8px 0;
        cursor: pointer;
        color: #1989fa;
    }
</style>

# Textarea 文本域

## 基础用法
使用 v-model 绑定值

<div class="example">
    <div>
        <y-textarea maxlength="10"></y-textarea>
    </div>
</div>


<details>
<summary>展开查看</summary>

```vue
<template>
  <div class="example">
    <div>
         <y-textarea v-model="val"></y-textarea>
    </div>
</div>
</template>
<script lang="ts" setup>
import { y-textarea } from "tooy-ui";
import { ref } from 'vue'
const val = ref('')
</script>
```

</details>

## 设置初始宽高

<div class="example">
    <div>
        <y-textarea :maxlength="10" :cols="50" :rows="10"></y-textarea>
    </div>
</div>


<details>
<summary>展开查看</summary>

```vue
<template>
  <div class="example">
    <div>
          <y-textarea v-model="val" :cols="50" :rows="10"x></y-textarea>
    </div>
</div>
</template>
<script lang="ts" setup>
import { y-textarea } from "tooy-ui";
import { ref } from 'vue'
const val = ref('')
</script>
```

</details>

## 禁用状态

<div class="example">
    <div>
        <y-textarea maxlength="10" disabled></y-textarea>
    </div>
</div>


<details>
<summary>展开查看</summary>

```vue
<template>
  <div class="example">
    <div>
         <y-textarea v-model="val" disabled></y-textarea>
    </div>
</div>
</template>
<script lang="ts" setup>
import { y-textarea } from "tooy-ui";
import { ref } from 'vue'
const val = ref('')
</script>
```

</details>

## 提示信息

<div class="example">
    <div>
        <y-textarea maxlength="10" placeholder="请输入"></y-textarea>
    </div>
</div>


<details>
<summary>展开查看</summary>

```vue
<template>
  <div class="example">
    <div>
         <y-textarea v-model="val" placeholder="请输入"></y-textarea>
    </div>
</div>
</template>
<script lang="ts" setup>
import { y-textarea } from "tooy-ui";
import { ref } from 'vue'
const val = ref('')
</script>
```

</details>

## 是否只读

<div class="example">
    <div>
        <y-textarea maxlength="10" readonly></y-textarea>
    </div>
</div>


<details>
<summary>展开查看</summary>

```vue
<template>
  <div class="example">
    <div>
         <y-textarea v-model="val" readonly></y-textarea>
    </div>
</div>
</template>
<script lang="ts" setup>
import { y-textarea } from "tooy-ui";
import { ref } from 'vue'
const val = ref('')
</script>
```

</details>

## 是否支持缩放

<div class="example">
    <div>
        <y-textarea maxlength="10" :resize="false"></y-textarea>
    </div>
</div>


<details>
<summary>展开查看</summary>

```vue
<template>
  <div class="example">
    <div>
         <y-textarea v-model="val" :resize="false"></y-textarea>
    </div>
</div>
</template>
<script lang="ts" setup>
import { y-textarea } from "tooy-ui";
import { ref } from 'vue'
const val = ref('')
</script>
```

</details>

## 获取、失去光标回调事件

<div class="example">
    <div>
        <y-textarea maxlength="10" @focus="focus" @blur="blur"></y-textarea>
    </div>
</div>


<details>
<summary>展开查看</summary>

```vue
<template>
  <div class="example">
    <div>
         <y-textarea v-model="val" @focus="focus" @blur="blur"></y-textarea>
    </div>
</div>
</template>
<script lang="ts" setup>
import { y-textarea } from "tooy-ui";
import { ref } from 'vue'
const val = ref('')
const focus = (e) => {
    emit('focus', e)
}
const blur = (e) => {
    emit('blur', e)
}
</script>
```

</details>