<template>
  <n-el
    tag="div"
    style="
      position: fixed;
      right: 44px;
      bottom: 100px;
      z-index: 1000;
      color: var(--primary-color);
      transition: 0.3s var(--cubic-bezier-ease-in-out);
    "
  >
    <n-space>
      <n-button @click="theme = darkTheme">
        深色
      </n-button>
      <n-button @click="theme = null">
        浅色
      </n-button>
    </n-space>
  </n-el>
  <n-config-provider :theme="theme" ref="containerRef">
    <n-layout position="absolute">
      <RouterView />
    </n-layout>
  </n-config-provider>
</template>

<script setup lang="ts">
  import { defineComponent } from 'vue'
  import { darkTheme } from 'naive-ui'

  const theme = ref<typeof darkTheme | null>(null)
</script>