<template>
    <div class="y-space">
        <slot></slot>
    </div>
</template>

<script >
import { ref, toRefs, reactive, useSlots, h, computed } from "vue"
export default {
    name: 'ySpace',
    props: {
        inline: {
            type: Boolean,
            default: false
        },
        size: {
            type: Array,
            default: [10, 10]
        }
    },
    setup(props) {
        const $slots = useSlots()
        const slotList = ref([])
        const yStyle = computed(() => {
            return {
                display: props.inline ? 'inline-flex' : 'flex',
                gap: !props.inline ? `${props.size[0]}px` : `${props.size[0]}px ${props.size[1]}px`,
                'flex-direction': props.inline ? 'inherit' : 'column',
                'algin-items': 'center',
                'flex-wrap': 'wrap',
                width: 'fit-content'
            }
        })
        $slots.default().forEach((item, index) => {
            slotList.value.push(
                h(
                    'div',
                    {
                        className: 'y-space-item',
                        style: 'width:fit-content'
                    },
                    item
                )
            )
        })
        return () => [
            h(
                'div',
                {
                    className: 'y-space',
                    style: yStyle.value
                },
                slotList.value
            )
        ]
    }
}
</script>

<style lang="scss" scoped>
.y-space {
    display: inline-flex;
    gap: 10px 10px
}
</style>