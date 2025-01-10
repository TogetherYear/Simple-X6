<script lang="ts" setup>
import { Pin } from './Pin'

const props = withDefaults(
    defineProps<{
        title: string
        archor?: 'left' | 'right',
        index: number
    }>(),
    {
        archor: 'right'
    }
);

const instance = new Pin()

const {

} = instance.InitStates()

instance.Run()
</script>

<template>
    <div class="Pin" :style="{ left: props.archor === 'left' ? '0%' : '50%', top: `${25 * props.index + 5}px` }">
        <div :class="{ PinCon: true }" v-if="props.archor === 'right'">
            <span class="Title">{{ title }}</span>
            <span class="Circle">
                <span class="Inner"></span>
            </span>
        </div>
        <div :class="{ PinCon: true, Left: true }" v-else>
            <span class="Circle">
                <span class="Inner"></span>
            </span>
            <span class="Title">{{ title }}</span>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import "./Pin.scss"
</style>