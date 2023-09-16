<script setup lang="ts"></script>

<template>
  <div class="right-layout">
    <Content />
    <div class="right" style="min-width: 100px;margin:20px; margin-top: 50px">
      <img src="../../static/contcat.jpg" alt="avatar" />
    </div>
  </div>
</template>

<style scoped>
.right-layout{
  display: flex;
}

@media screen and (max-width: 768px) {
  .right-layout > .right{
    display: none;
  }
}

</style>
