<script lang="ts">
import { defineComponent } from 'vue';
import HelloWorld from '@/components/HelloWorld.vue';

export default defineComponent({
  name: 'WelcomeHome',
  components: {
    HelloWorld,
  },
  setup() {
    return {};
  },
});
</script>

<template>
  <main>
    <img alt="Vue logo" src="@/assets/logo.png" />
    <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
  </main>
</template>

<style lang="scss" scoped></style>
