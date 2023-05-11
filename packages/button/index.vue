<template>
  <button :class="yClass" :disabled="disabled">
    <slot></slot>
  </button>
</template>
  

<script>
export default {
  name: "yButton",
};
</script>

<script setup>
import { computed } from "vue";

const props = defineProps({
  type: {
    type: String,
    default: "default",
  },
  disabled: Boolean,
  plain: Boolean,
});

const yClass = computed(() => {
  return [
    "y-button",
    `y-button-${props.type}`,
    props.disabled ? "y-button-disabled" : "",
    props.plain ? "y-button-plain" : "",
  ];
});
</script>
  
<style lang="scss" scoped>
.y-button {
  border: 0;
  padding: 12px 24px;
  outline: none;
  background: none;
  line-height: 1;
  font-size: 14px;
  box-sizing: border-box;
  cursor: pointer;
  border-radius: 4px;
  display: inline-block;
  margin-right: 10px;
  &:hover,
  &:focus {
    opacity: 0.8;
  }
}
.y-button-default {
  color: #333;
  border: 1px solid #dcdfe6;
  &:hover,
  &:focus {
    color: #409eff;
    border-color: #c6e2ff;
    background-color: #c6e2ff;
  }
}
.y-button-primary {
  color: #fff;
  background: #409eff;
  border-color: #409eff;
}
.y-button-success {
  color: #fff;
  background: #67c23a;
  border-color: #67c23a;
}
.y-button-warning {
  color: #fff;
  background: #e6a23c;
  border-color: #e6a23c;
}
.y-button-error {
  color: #fff;
  background: #f56c6c;
  border-color: #f56c6c;
}
.y-button-info {
  color: #fff;
  background: #909399;
  border-color: #909399;
}
.y-button-disabled {
  opacity: 0.4;
  &:hover,
  &:focus {
    opacity: 0.4;
    cursor: no-drop;
  }
}
.y-button-plain {
  border-radius: 20px;
}
</style>