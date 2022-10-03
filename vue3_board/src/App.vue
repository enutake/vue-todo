<script setup lang="ts">
  import { ref } from 'vue';
  const drawerLeft = ref(false);
</script>

<template>
  <div class="q-pa-md">
    <q-layout view="lhh LpR lff" container style="height: 500px" class="shadow-2 rounded-borders">
      <q-header reveal class="bg-primary">
        <q-toolbar>
          <q-btn flat @click="drawerLeft = !drawerLeft" round dense icon="menu" />
          <q-toolbar-title>TODO</q-toolbar-title>
        </q-toolbar>
      </q-header>

      <main style="margin-top: 50px">
        <router-view></router-view>
      </main>

      <q-drawer
        v-model="drawerLeft"
        :width="200"
        :breakpoint="700"
        bordered
        class="bg-grey-3"
      >
        <q-scroll-area class="fit">
          <q-list>
            <q-item to="/">ホーム</q-item>
            <q-item to="/list">タスク一覧</q-item>
            <q-item to="/register">タスク新規登録</q-item>
          </q-list>
        </q-scroll-area>
      </q-drawer>
    </q-layout>
  </div>
</template>

<style scoped>
</style>