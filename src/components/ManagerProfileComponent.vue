<template>
    <div class="container">
        <h1>Manager Profile</h1>
        <div class="text-center text-primary">
          <router-link to="/create_task" class="btn">Add Task</router-link>
        </div>
        <div v-if="allTasks.length">
          <TaskComponent
            v-for="task in allTasks"
            :data="task"
            :key="task.id"
            :name="task.name"
          /> 
        </div>
          <!-- <li v-for="item in allTasks" :key="item.id">
          {{ item.name }}
        </li> -->
    </div>
  </template>
  
  <script>
  import TaskComponent from './TaskComponent.vue'
  export default {
    name: 'ManagerProfile',
    data() {
            return {}
    },
    components:{
      TaskComponent
    },
    methods: {},
    computed: {
      allTasks() {
        return this.$store.getters.getAllTasks
      },
    },
    beforeMount(){
      this.$store.dispatch('getAllTasks')
    }

  }
  </script>
  
  <style>

  </style>
  