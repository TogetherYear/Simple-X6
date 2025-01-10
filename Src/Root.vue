<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import { Generate } from './Core';

const dom = ref<HTMLDivElement | null>(null)

onMounted(() => {
    Generate(dom.value!).then((ctx) => { });
})

</script>

<template>
    <div ref="dom" class="Root"></div>
</template>

<style lang="scss" scoped>
.Root {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background: #212121;
}
</style>
