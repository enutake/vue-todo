<script setup lang="ts">
  import { ref } from 'vue';
  import { useRoute } from 'vue-router';
  import router from "../router";


  const todoListData = ref(JSON.parse(localStorage.getItem('todo') as string));
  const pageId: number = Number(useRoute().params.id);
  const targetTodo = todoListData.value.find((todo) => {
    return todo.id === pageId;
  })
  const title = ref<string>(targetTodo.title);
  const description = ref<string>(targetTodo.description);

  const update = () => {
    const todo = {
      id: pageId,
      title: title.value,
      description: description.value
    };

    const targetIndex = todoListData.value.findIndex((todo) => todo.id === pageId);
    todoListData.value[targetIndex] = todo;
    localStorage.setItem('todo', JSON.stringify(todoListData.value));

    router.push({'name': 'list'});
  }
</script>

<template>
      <q-input clearable filled color="purple-12" v-model="title" label="title" />
      <q-input v-model="description" filled type="textarea" label='description'/>
      <router-link :to="{name:'list'}">
        <q-btn flat color="primary" label="戻る" />
      </router-link>
      <q-btn color="primary" label="更新する" @click="update"/>

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
