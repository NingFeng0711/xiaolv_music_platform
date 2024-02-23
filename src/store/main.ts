import { defineStore } from 'pinia';

export const useMainStore = defineStore({
  id: 'useMainStore',
  state: () => ({
    name: '超级管理员',
  }),
  // getters
  getters: {
    nameLength: (state: any) => state.name.length,
  },
  actions: {
    async insertPost(data: string) {
      // 可以做异步
      // await doAjaxRequest(data);
      this.name = data;
    },
  },
});
