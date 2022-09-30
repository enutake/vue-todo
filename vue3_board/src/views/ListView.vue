<script setup lang="ts">

  const todoListData = JSON.parse(localStorage.getItem('todo') as string);

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
        <router-link :to="{name:'register'}">
          <q-btn round color="primary" icon="add" />
        </router-link>
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
