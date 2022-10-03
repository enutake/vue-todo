<script setup lang="ts">
  import { ref } from 'vue';
  import router from "../router";

  const title = ref<string>();
  const description = ref<string>();
  
  const register = () => {
    let todoListData = JSON.parse(localStorage.getItem('todo') as string);
    const maxId: number = todoListData ? Math.max.apply(null,todoListData.map(function(todo){return todo.id;})) : 0;

    const newTodo = {
        id: maxId + 1,
        title: title.value,
        description: description.value
      };
      
    if(todoListData) {
      todoListData[maxId] = newTodo;
    } else {
      todoListData = [newTodo];
    }

    localStorage.setItem('todo', JSON.stringify(todoListData));
    router.push({'name': 'list'});
  }
</script>

<template>
    <div class="main-wrapper">
      <h2 class="h2">タスク新規登録</h2>
      <div class="q-gutter-xs flex flex-center form-group">
          <q-input class="title-input" clearable outlined v-model="title" label="タイトル" />
          <q-input class="description-input" v-model="description" outlined type="textarea" label='詳細'/>
          <div class="btn-group">
            <router-link :to="{name:'list'}">
              <q-btn flat color="primary" label="戻る" />
            </router-link>
            <q-btn color="primary" label="登録する" @click="register"/>
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
