<template>
    <div class="card mt-1" v-if="data">
        <div class="card-body">
            <h5 class="card-title"> {{ data.name }} </h5>
            <h6 class="card-subtitle mb-2 text-muted">{{ data.description }}</h6>
            <select class="form-select" v-model="status_id" v-on:change="changeTaskStatus()">
                <option value="1">open</option>
                <option value="2">ended</option>
                <option value="3">canceled</option>
            </select>
        </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'EmployeeTaskComponent',
    data() {
        return {
            status_id: this.data.status_id,
            task_id: this.data.id
        }
    },
    methods:{
        changeTaskStatus(){
            this.$store.dispatch("changeTaskStatus", {status_id:this.status_id,task_id:this.task_id})
        }
    },
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
  