<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
import { wsClient } from '@/service/webSocket';
import { onMounted, ref } from 'vue';

onMounted(() => {
  const newWs = new wsClient();
  newWs.connect();
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
