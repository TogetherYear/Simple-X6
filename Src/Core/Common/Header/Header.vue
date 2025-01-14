<script lang="ts" setup>
const props = withDefaults(
    defineProps<{
        danager?: boolean
        title: string
    }>(),
    {
        danager: false,
    }
);
</script>

<template>
    <div :class="{ Header: true, Danager: props.danager }">
        <span class="Title">{{ title }}</span>
    </div>
</template>

<style lang="scss" scoped>
@import "./Header.scss"
</style>