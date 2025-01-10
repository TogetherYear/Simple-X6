<script lang="ts" setup>
import { Header } from './Header'

const props = withDefaults(
    defineProps<{
        danager?: boolean
        title: string
    }>(),
    {
        danager: false,
    }
);

const instance = new Header()

const {

} = instance.InitStates()

instance.Run()
</script>

<template>
    <div :class="{ Header: true, Danager: props.danager }">
        <span class="Title">{{ title }}</span>
    </div>
</template>

<style lang="scss" scoped>
@import "./Header.scss"
</style>