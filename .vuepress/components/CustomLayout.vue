<template>
    <div class="container">
        <h1>{{ title }}</h1>
        <slot></slot>
    </div>
</template>

<script lang="ts" setup>
import { defineProps} from 'vue'
const prop = defineProps()
console.log(prop)
const title = 'aaa'

</script>
