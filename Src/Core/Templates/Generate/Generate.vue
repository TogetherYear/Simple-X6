<script lang="ts" setup>
import Header from '@/Core/Common/Header/Header.vue';
import Body from '@/Core/Common/Body/Body.vue'
import Pin from '@/Core/Common/Pin/Pin.vue'
</script>

<template>
    <div class="Generate">
        <Header :title="'初始化'" :danager="true"></Header>

        <Body>
            <Pin :title="'开始'" :archor="'right'" :index="0"></Pin>
        </Body>
    </div>
</template>

<style lang="scss" scoped>
@import "./Generate.scss"
</style>