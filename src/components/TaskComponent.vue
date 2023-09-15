<template>
    <div class="card mt-1" v-if="data">
        <div class="card-body">
            <h5 class="card-title"> {{ data.name }} </h5>
            <h6 class="card-subtitle mb-2 text-muted">{{ data.description }}</h6>
            <p class="card-text">Task Owner: {{ data.owner.name }} </p>
            <p class="card-text">Task Employee: {{ data.employee.name }} </p>
            <p class="card-text text-center text-danger"> {{ data.status.name }} </p>
        </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'TaskComponent',
    props: {
        data: {
            type: Object, default: () => {
            }
        }
    }
  }
  </script>
  
  <style>
  </style>
  