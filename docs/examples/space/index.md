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

# Space 间距

## 基础用法

<div class="example">
    <div>
    <y-space>
      <y-button>demo</y-button>
      <y-button>demo</y-button>
      <y-button>demo</y-button>
      <y-button>demo</y-button>
      <y-button>demo</y-button>
    </y-space>
    </div>
</div>


<details>
<summary>展开查看</summary>

```vue
<template>
  <div class="example">
    <div>
    <y-space>
      <y-button>demo</y-button>
      <y-button>demo</y-button>
      <y-button>demo</y-button>
      <y-button>demo</y-button>
      <y-button>demo</y-button>
    </y-space>
    </div>
</div>
</template>
```

</details>


## 设置排列方式

<div class="example">
    <div>
    <y-space inline="true">
      <y-button>demo</y-button>
      <y-button>demo</y-button>
      <y-button>demo</y-button>
      <y-button>demo</y-button>
      <y-button>demo</y-button>
    </y-space>
    </div>
</div>


<details>
<summary>展开查看</summary>

```vue
<template>
  <div class="example">
    <div>
    <y-space inline="true">
      <y-button>demo</y-button>
      <y-button>demo</y-button>
      <y-button>demo</y-button>
      <y-button>demo</y-button>
      <y-button>demo</y-button>
    </y-space>
    </div>
</div>
</template>
```

</details>


## 设置间距

<div class="example">
    <div>
    <y-space size="[10,10]">
      <y-button>demo</y-button>
      <y-button>demo</y-button>
      <y-button>demo</y-button>
      <y-button>demo</y-button>
      <y-button>demo</y-button>
    </y-space>
    </div>
</div>


<details>
<summary>展开查看</summary>

```vue
<template>
  <div class="example">
    <div>
    <y-space  size="[10,10]">
      <y-button>demo</y-button>
      <y-button>demo</y-button>
      <y-button>demo</y-button>
      <y-button>demo</y-button>
      <y-button>demo</y-button>
    </y-space>
    </div>
</div>
</template>
```

</details>
