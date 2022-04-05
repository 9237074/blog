<template>
  <main class="page" style="display: flex">
    <div style="flex: 1">
      <slot name="top" />

      <div class="theme-default-content">
        <Content />
      </div>

      <PageMeta />

      <PageNav />

      <slot name="bottom" />
    </div>
    <div class="page_right">
      <div>
        <img :src="wechat" class="wechat_img">
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import PageMeta from "@theme/PageMeta.vue";
import PageNav from "@theme/PageNav.vue";
import wechat from '../public/images/wechat.jpg'
</script>
<style>
.page_right {
  display: none;
}
.wechat_img{
  position: fixed;
  top: 100px;
  width: 150px;
}
@media screen and (min-width: 768px) {
  .page_right {
    width: 20%;
    display: block;
  }
}
</style>
