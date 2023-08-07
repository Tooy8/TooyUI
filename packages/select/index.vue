<template>
    <div class="y-select" v-clickOutside>
        <input type="text" readonly :value="selectVal" :disabled="disabled" :placeholder="placeholder">
        <transition name="slide-fade">
            <div class="y-position-box" v-if="postionShow">
                <li v-for="(item, index) in options" :key="index" @click="change(item, index)"
                    :class="{ 'item-active-li': activeIndex == index }" class="item-li">{{ item[filedLabel]
                    }}</li>
            </div>
        </transition>

    </div>
</template>


<script>
export default {
    name: "ySelect",
};
</script>


<script setup>
import { ref, toRefs, reactive } from "vue"
const props = defineProps({
    options: {
        type: Array,
        default: () => []
    },
    disabled: Boolean,
    filedLabel: {
        type: String,
        default: 'label'
    },
    filedValue: {
        type: String,
        default: 'value'
    },
    placeholder: String
})
const selectVal = ref('')
const postionShow = ref(false)
const activeIndex = ref(-1)
const vClickOutside = {
    beforeMount(el) {
        let handler = (e) => {
            if (!props.disabled) {
                if (el.contains(e.target) && e.target.className.indexOf('item-li') == -1) {
                    postionShow.value = true
                } else {
                    postionShow.value = false
                }
            }

        }
        document.addEventListener('click', handler)
    },
}
const change = (item, index) => {
    activeIndex.value = index
    selectVal.value = item[props.filedLabel]
    postionShow.value = false
}
</script>

<style lang="scss" scoped>
.slide-fade-enter-active {
    transition: all .15s ease-out;
}

.slide-fade-leave-active {
    transition: all .15s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
    transform: translateY(-15px);
    opacity: 0;
}

.y-select {
    min-width: 250px;
    display: inline-block;
    height: 40px;
    position: relative;

    input {
        border: 1px solid #d4d3d3;
        padding: 8px 10px;
        outline: none;
        width: 100%;
        box-sizing: border-box;
        cursor: pointer;
    }

    .y-position-box {
        width: 100%;
        height: auto;
        overflow: hidden;
        position: absolute;
        top: 42px;
        border: 1px solid #d4d3d3;
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
        z-index: 99;

        li {
            list-style: none;
            line-height: 40px;
            padding: 0 10px;
            box-sizing: border-box;
            cursor: pointer;
            font-size: 14px;

            &:hover {
                background: #f0f0f0;
            }
        }

        .item-active-li {
            color: #409EFF
        }
    }
}
</style>