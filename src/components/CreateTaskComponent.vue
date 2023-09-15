  <template>
    <div class="container mt-3">
        <div class="form-group">
            <label>Name</label>
            <input type="text" class="form-control" placeholder="Enter name" v-model="task.name">
        </div>
        <div class="form-group">
            <label>Description</label>
            <input type="text" class="form-control" placeholder="Enter description" v-model="task.description">
        </div>
        <div class="form-group">
            <label>Select Employee</label>
            <select class="form-select" v-model="task.employee_id">
                <option 
                v-for="user in allEmployeeUsers"
                :data="user"
                :key="user.id"
                :value="user.id"
                >
                    {{ user.name }}
                </option>
            </select>
        </div>
        
        <button type="submit" class="btn btn-primary" v-on:click="save_task()">Save</button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'CreateTaskComponent',
    data() {
        return {
            task:{
                name:"",
                description:"",
                employee_id:""
            }
        }
    },
    methods:{
        save_task(){
            this.$store.dispatch("storeTask", this.task).then(
                () => {
                    this.$router.push("/manager_profile");
                },
                (error) => {
                    console.log(error)
                }
            );
        }
    },
    beforeMount(){
        this.$store.dispatch('getAllEmployeeUsers')
    },
    computed:{
        allEmployeeUsers(){
            return this.$store.getters.getAllEmployeeUsers
        }
    }
  }
  </script>
  
  <style>
  </style>
  