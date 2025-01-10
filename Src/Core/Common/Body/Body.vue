<script lang="ts" setup>
import { Body } from './Body'

const instance = new Body()

const {

} = instance.InitStates()

instance.Run()
</script>

<template>
    <div class="Body">
        <slot></slot>
    </div>
</template>

<style lang="scss" scoped>
@import "./Body.scss"
</style>