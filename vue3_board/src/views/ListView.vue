<script setup lang="ts">
  import { ref } from 'vue';
  import DeleteDialog from '../components/DeleteDialog.vue';
  import type { Todo } from '../types/Todo';

  const todoListData = ref(JSON.parse(localStorage.getItem('todo') as string));

  let showConfirm = ref(false);
  let selectedTodo = ref<Todo>();

  const open = (todo: Todo) => {
    showConfirm.value = true;
    selectedTodo.value = todo;
  }

  const execDelete = () => {
    todoListData.value = todoListData.value.filter((todo: Todo) => {
      return todo.id !== selectedTodo.value?.id;
    })
    localStorage.setItem('todo', JSON.stringify(todoListData.value));
  }

</script>
<template>
      <q-list bordered separator class="todolist">
        <div v-for="(todo, i) in todoListData" :key="i">
          <q-item :to="{name: 'detail', params:{id: todo.id}}" clickable v-ripple>
            <q-item-section>
              <q-item-label overline>{{ todo.title }}</q-item-label>
              <q-item-label>{{ todo.description }}</q-item-label>
            </q-item-section>
            <q-item-section top side>
              <div class="text-grey-8 q-gutter-xs">
                <q-btn size="12px" flat dense round icon="delete" @click.prevent @click="open(todo)"/>
              </div>
            </q-item-section>
          </q-item>
        </div>
      </q-list>
      <q-page-sticky position="bottom-right" :offset="[18, 18]">
        <router-link :to="{name:'register'}">
          <q-btn round color="primary" icon="add" />
        </router-link>
      </q-page-sticky>

      <DeleteDialog v-model="showConfirm" :todo="selectedTodo" @execDelete="execDelete"/>
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
