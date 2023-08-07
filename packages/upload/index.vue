<template>
    <div>
        <input type="file" class="file-input" ref="inpRef" @change="inpChange" :multiple="multiple">
        <y-button @click="fileChange" :type="btnType">{{ label }}</y-button>
        <div class="fileList-box">
            <li v-for="(item, index) in fileList" :key="index">
                <span>{{ item.name }}</span>
                <span class="delete-span" @click="deleteFile(index)">删除 </span>
            </li>
        </div>
        <div class="area-box" @click="fileChange" ref="areaRef" :class="{ activeArea: isActive }" v-if="drag">
            <span>拖拽上传</span>
        </div>
    </div>
</template>

<script>
export default {
    name: "yUpload",
}
</script>

<script setup>
import { ref, toRefs, reactive, onMounted } from "vue"
import yButton from "../button";
const emit = defineEmits(['change'])
const props = defineProps({
    label: {
        type: String,
        default: "选择文件"
    },
    btnType: {
        type: String,
        default: "primary"
    },
    multiple: Boolean,
    drag: {
        type: Boolean,
        default: false
    }
})
const fileList = reactive([])
const inpRef = ref(null)
const areaRef = ref(null)
const isActive = ref(false)
const fileChange = () => {
    inpRef.value.click()
}
const inpChange = (e) => {
    fileList.unshift(...e.target.files)
    emit('change', fileList)
}
const deleteFile = (index) => {
    fileList.splice(index, 1)
}
onMounted(() => {
    if (props.drag) {
        let dorpArea = areaRef.value
        dorpArea.addEventListener('drop', (e) => {
            e.stopPropagation();
            e.preventDefault();
            fileList.unshift(...e.dataTransfer.files)
            emit('change', fileList)
            isActive.value = false
        }, false)
        dorpArea.addEventListener('dragleave', (e) => {
            e.stopPropagation();
            e.preventDefault();
            isActive.value = false
        })
        dorpArea.addEventListener('dragenter', (e) => {
            e.stopPropagation();
            e.preventDefault();
            isActive.value = true
        })
        dorpArea.addEventListener('dragover', (e) => {
            e.stopPropagation();
            e.preventDefault();
            isActive.value = true
        })
    }
})

</script>

<style lang="scss" scoped>
.file-input {
    display: none;
}

.fileList-box {
    width: 300px;

    li {
        line-height: 24px;
        display: flex;
        align-items: center;
        justify-content: space-between;

        .delete-span {
            cursor: pointer;
        }
    }
}

.area-box {
    width: 200px;
    height: 200px;
    border: 2px dashed #ccc;
    margin-top: 20px;
    cursor: pointer;

    &:hover {
        color: #409EFF;
        border-color: #409EFF;
    }

    span {
        display: inline-block;
        margin-left: 60px;
        margin-top: 80px;
    }
}

.activeArea {
    border-color: #409EFF;

    span {
        color: #409EFF;

    }
}
</style>