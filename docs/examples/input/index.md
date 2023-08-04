<style>
    .example{
        border: 1px solid #f5f5f5;
        border-radius: 5px;
        padding:20px
    }
 
    details > summary:first-of-type {
        font-size: 10px;
        padding: 8px 0;
        cursor: pointer;
        color: #1989fa;
    }
</style>

# Input 输入框

## 基础用法
使用 v-model 绑定值

<div class="example">
    <div>
        <y-input ></y-input>
    </div>
</div>


<details>
<summary>展开查看</summary>

```vue
<template>
  <div class="example">
    <div>
        <y-input v-model="val"></y-input>
    </div>
</div>
</template>
<script lang="ts" setup>
import { y-input } from "tooy-ui";
import { ref } from 'vue'
const val = ref('')
</script>
```

</details>


## 禁用状态

<div class="example">
    <div>
         <y-input  disabled></y-input>
    </div>
</div>

<details>
<summary>展开查看</summary>

```vue
<template>
  <div class="example">
    <div>
        <y-input v-model="val" disabled></y-input>
    </div>
</div>
</template>
<script lang="ts" setup>
import { y-input } from "tooy-ui";
import { ref } from 'vue'
const val = ref('')
</script>
```

</details>

## 设置提示信息

<div class="example">
    <div>
     <y-input placeholder="请输入"></y-input>
    </div>
</div>

<details>
<summary>展开查看</summary>

```vue
<template>
  <div class="example">
    <div>
        <y-input v-model="val" placeholder="请输入"></y-input>
    </div>
</div>
</template>
<script lang="ts" setup>
import { y-input } from "tooy-ui";
import { ref } from 'vue'
const val = ref('')
</script>
```

</details>

## 清空输入内容

<div class="example">
    <div>
        <y-input  clearable></y-input>
    </div>
</div>

<details>
<summary>展开查看</summary>

```vue
<template>
  <div class="example">
    <div>
        <y-input v-model="val" clearable></y-input>
    </div>
</div>
</template>
<script lang="ts" setup>
import { y-input } from "tooy-ui";
import { ref } from 'vue'
const val = ref('')
</script>
```

</details>


## 隐藏输入信息

<div class="example">
    <div>
         <y-input  password></y-input>
    </div>
</div>

<details>
<summary>展开查看</summary>

```vue
<template>
  <div class="example">
    <div>
        <y-input v-model="val" password></y-input>
    </div>
</div>
</template>
<script lang="ts" setup>
import { y-input } from "tooy-ui";
import { ref } from 'vue'
const val = ref('')
</script>
```

</details>