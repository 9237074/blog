<template>
  <div>bbb</div>
  <div>{{ title }}</div>
  <div>{{ title2 }}</div>

</template>

<script setup>
import { ref } from "vue";
console.log("vbb");
const title = ref("title1");
const title2 = 2
</script>
