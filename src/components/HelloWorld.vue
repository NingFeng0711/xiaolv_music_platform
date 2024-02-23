<script setup lang="ts">
import { ref } from 'vue';
import { useMainStore } from '@/store/main';
import { useRouter } from 'vue-router';

defineProps<{ msg: string }>();

const count = ref(0);
const mainStore = useMainStore();
const router = useRouter();

const testClick = () => {
  count.value++;
  mainStore.$patch({
    name: '名称被修改了,nameLength也随之改变了',
  });
  setTimeout(() => {
    router.push({ name: 'Login' });
  }, 2000);
};
</script>

<template>
  <h1>{{ msg }}</h1>
  <n-button @click="testClick">点我替换数据DEMO</n-button>
  <h2>用户名:{{ mainStore.name }}<br />长度:{{ mainStore.nameLength }}</h2>
  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank"> Vite Docs </a>
    |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Docs</a>
    |
    <a>Vue testClick</a>
  </p>

  <button type="button" @click="count++">count is: {{ count }}</button>
</template>

<style lang="scss" scoped>
a {
  color: $test-color;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
