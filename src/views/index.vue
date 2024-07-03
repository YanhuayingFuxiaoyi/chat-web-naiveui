<template>
  <h1>Hello App!</h1>
  <p>
    <strong>Current route path:</strong> {{ $route.fullPath }}
    <n-space>
    <n-button>Default</n-button>
    <n-button type="tertiary">
      Tertiary
    </n-button>
    <n-button type="primary">
      Primary
    </n-button>
    <n-button type="info">
      Info
    </n-button>
    <n-button type="success">
      Success
    </n-button>
    <n-button type="warning">
      Warning
    </n-button>
    <n-button type="error">
      Error
    </n-button>
  </n-space>
  </p>
  <nav>
    <n-button type="primary" @click="handleIncrement">{{ count }}</n-button>
    <RouterLink to="/">Go to Home</RouterLink>
    <RouterLink to="/about">Go to About</RouterLink>
  </nav>
  <main>
    <RouterView />
  </main>
</template>

<script setup lang="ts">
  import { storeToRefs } from 'pinia'
  import useAppStore from "@/pinia/modules/app";
  const appStore = useAppStore();
  const { count } = storeToRefs(appStore);

  const handleIncrement = () => {
    appStore.increment();
  }
</script>