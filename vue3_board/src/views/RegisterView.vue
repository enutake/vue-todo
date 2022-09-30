<script setup lang="ts">
  import { ref } from 'vue';

  const title = ref<string>();
  const description = ref<string>();
  
</script>

<template>
      <q-input clearable filled color="purple-12" v-model="title" label="title" />
      <q-input v-model="description" filled type="textarea" label='description'/>
      <router-link :to="{name:'list'}">
        <q-btn flat color="primary" label="戻る" />
      </router-link>
      <q-btn color="primary" label="登録する" />

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
