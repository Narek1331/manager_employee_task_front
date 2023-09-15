<template>
     <div class="container">
        <h1>Employee Profile</h1>
        <div v-if="allTasks.length">
          <EmployeeTaskComponent
            v-for="task in allTasks"
            :data="task"
            :key="task.id"
          /> 
        </div>
    </div>
  </template>
  
  <script>
  import EmployeeTaskComponent from './EmployeeTaskComponent.vue';
  export default {
    name: 'EmployeeProfile',
    components:{
      EmployeeTaskComponent
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
  