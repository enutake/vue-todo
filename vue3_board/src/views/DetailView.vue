<script setup lang="ts">
  import { ref } from 'vue';
  import { useRoute } from 'vue-router';

  const todoListData = [
  {
    'id': 1,
    'title': '掃除',
    'description': 'お風呂と部屋の掃除',
  },
  {
    'id': 2,
    'title': '買い物',
    'description': 'シャンプーと夜ご飯の食材の購入',
  },
  {
    'id': 3,
    'title': '銀行',
    'description': '銀行振込',
  },
  ];

  const pageId: number = Number(useRoute().params.id);

  const title = ref<string>(todoListData[pageId-1].title);
  const description = ref<string>(todoListData[pageId-1].description);

  
</script>

<template>
      <q-input clearable filled color="purple-12" v-model="title" label="title" />
      <q-input v-model="description" filled type="textarea" label='description'/>
      <router-link :to="{name:'list', params:{id: todoListData[pageId-1].id}}">
        <q-btn flat color="primary" label="戻る" />
      </router-link>
      <q-btn color="primary" label="更新する" />

</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
