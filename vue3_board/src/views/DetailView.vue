<script setup lang="ts">
  import { ref } from 'vue';
  import { useRoute } from 'vue-router';
  import router from "../router";
  import type { Todo } from '../types/Todo';


  const todoListData = ref(JSON.parse(localStorage.getItem('todo') as string));
  const pageId: number = Number(useRoute().params.id);
  const targetTodo = todoListData.value.find((todo: Todo) => {
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

    const targetIndex = todoListData.value.findIndex((todo: Todo) => todo.id === pageId);
    todoListData.value[targetIndex] = todo;
    localStorage.setItem('todo', JSON.stringify(todoListData.value));

    router.push({'name': 'list'});
  }
</script>

<template>
    <div class="main-wrapper">
        <h2 class="h2">タスク詳細</h2>
        <div class="q-gutter-xs flex flex-center form-group">
            <q-input class="title-input" clearable outlined v-model="title" label="タイトル" />
            <q-input class="description-input" v-model="description" outlined type="textarea" label='詳細'/>
            <div class="btn-group">
                <router-link :to="{name:'list'}">
                    <q-btn flat color="primary" label="戻る" />
                </router-link>
                <q-btn color="primary" label="登録する" @click="update"/>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
  .main-wrapper {
    padding: 0 20px;
    .form-group {
      .title-input {
        width: 230px;
      }
      .description-input {
        width: 230px;
      }
      .btn-group {
        margin-top: 20px;
      }
    }
  }
  .h2 {
    font-size: 16px;
  }
</style>
