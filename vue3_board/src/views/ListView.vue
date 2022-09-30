<script setup lang="ts">
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
  ]
</script>
<template>
      <q-list bordered separator class="todolist">
        <div v-for="(todo, i) in todoListData" :key="i">
          <q-item :to="{name: 'detail', params:{id: todo.id}}" clickable v-ripple>
            <q-item-section>
              <q-item-label overline>{{ todo.title }}</q-item-label>
              <q-item-label>{{ todo.description }}</q-item-label>
            </q-item-section>
          </q-item>
        </div>
      </q-list>
      <q-page-sticky position="bottom-right" :offset="[18, 18]">
        <q-btn round color="primary" icon="add" />
      </q-page-sticky>
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
