<style>
    .example{
        border: 1px solid #f5f5f5;
        border-radius: 5px;
        padding:20px
    }
    .y-button {
        margin:10px 5px
    }
    
    details > summary:first-of-type {
        font-size: 10px;
        padding: 8px 0;
        cursor: pointer;
        color: #1989fa;
    }
</style>

# Button 按钮

## 基础用法

使用 type、disabled、和 plain 来定义按钮的样式。

<div class="example">
    <div>
        <y-button>默认按钮</y-button>
        <y-button type="primary">主要按钮</y-button>
        <y-button type="success">成功按钮</y-button>
        <y-button type="info">信息按钮</y-button>
        <y-button type="warning">警告按钮</y-button>
        <y-button type="error">危险按钮</y-button> 
    </div>
</div>


<details>
<summary>展开查看</summary>

```vue
<template>
  <div>
        <y-button>默认按钮</y-button>
        <y-button type="primary">主要按钮</y-button>
        <y-button type="success">成功按钮</y-button>
        <y-button type="info">信息按钮</y-button>
        <y-button type="warning">警告按钮</y-button>
        <y-button type="error">危险按钮</y-button> 
  </div>
</template>
<script lang="ts" setup>
import { y-button } from "tooy-ui";
</script>
<style>
.y-button {
  margin-right: 10px;
}
</style>
```

</details>


## 禁用状态

<div class="example">
    <div>
        <y-button type="primary" disabled>主要按钮</y-button>
        <y-button type="success" disabled>成功按钮</y-button>
        <y-button type="info" disabled>信息按钮</y-button>
        <y-button type="warning" disabled>警告按钮</y-button>
        <y-button type="error" disabled>危险按钮</y-button> 
    </div>
</div>

<details>
<summary>展开查看</summary>

```vue
<template>
  <div>
        <y-button type="primary" disabled>主要按钮</y-button>
        <y-button type="success" disabled>成功按钮</y-button>
        <y-button type="info" disabled>信息按钮</y-button>
        <y-button type="warning" disabled>警告按钮</y-button>
        <y-button type="error" disabled>危险按钮</y-button> 
  </div>
</template>
<script lang="ts" setup>
import { y-button } from "tooy-ui";
</script>
<style>
.y-button {
  margin-right: 10px;
}
</style>
```

</details>

## 调整尺寸

<div class="example">
    <div>
        <y-button type="primary" plain>主要按钮</y-button>
        <y-button type="success" plain>成功按钮</y-button>
        <y-button type="info" plain>信息按钮</y-button>
        <y-button type="warning" plain>警告按钮</y-button>
        <y-button type="error" plain>危险按钮</y-button> 
    </div>
</div>

<details>
<summary>展开查看</summary>

```vue
<template>
  <div>
        <y-button type="primary" plain>主要按钮</y-button>
        <y-button type="success" plain>成功按钮</y-button>
        <y-button type="info" plain>信息按钮</y-button>
        <y-button type="warning" plain>警告按钮</y-button>
        <y-button type="error" plain>危险按钮</y-button> 
  </div>
</template>
<script lang="ts" setup>
import { y-button } from "tooy-ui";
</script>
<style>
.y-button {
  margin-right: 10px;
}
</style>
```

</details>