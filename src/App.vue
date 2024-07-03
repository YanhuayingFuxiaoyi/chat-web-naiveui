<template>
  <n-space>
      <n-button @click="theme = darkTheme">
        深色
      </n-button>
      <n-button @click="theme = null">
        浅色
      </n-button>
    </n-space>
  <n-config-provider :theme="theme">
    <n-card>
      <RouterView />
    </n-card>
  </n-config-provider>
</template>

<script setup lang="ts">
  import { defineComponent } from 'vue'
  import { darkTheme } from 'naive-ui'

  const theme = ref<typeof darkTheme | null>(null)
</script>