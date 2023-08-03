<template>
    <div :class="yClass">
        <input type="text" class="" :value="modelValue" @input="input" :placeholder="placeholder" :disabled="disabled"
            :password="password">
        <span class="clear-icon" :style="clearStyle" @click="clearInput"><i>x</i></span>
    </div>
</template>

<script>
export default {
    name: "yInput",
};
</script>

<script setup>
import { computed } from "vue"
const emit = defineEmits(["update:modelValue"])
const props = defineProps({
    modelValue: String | Number,
    placeholder: String,
    disabled: Boolean,
    clearable: Boolean,
    password: Boolean,
})
const input = (e) => {
    emit('update:modelValue', e.target.value)
}
const yClass = computed(() => {
    return [
        'y-input',
        {
            'y-input-disabled': props.disabled,
            'y-input-password': props.password,

        }
    ]
})

const clearStyle = computed(() => {
    return [
        {
            'display': props.clearable ? props.modelValue ? 'block' : 'none' : 'none'
        }
    ]
})
const clearInput = () => {
    emit('update:modelValue', '')
}
</script>

<style lang="scss" scoped>
.y-input {
    display: inline-block;
    min-width: 250px;
    position: relative;

    input {
        outline: none;
        border: 1px solid #d4d3d3;
        line-height: 1;
        padding: 10px 8px;
        width: 100%;
        font-size: 14px;
        color: #505050;
        border-radius: 4px;
        transition: all .15s ease;

        &:focus {
            border-color: #409EFF;
        }
    }

    .clear-icon {
        position: absolute;
        top: 8px;
        right: 4px;
        cursor: pointer
    }
}

.y-input-disabled {
    input {
        cursor: no-drop;
    }
}

.y-input-password {
    input {
        -webkit-text-security: disc;
        -moz-text-security: disc;
    }
}
</style>