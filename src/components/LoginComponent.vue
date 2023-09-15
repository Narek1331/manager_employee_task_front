<template>
    <div class="vue-tempalte container">
        <!-- <form> -->
            <h3>Sign In</h3>
 
            <div class="form-group">
                <label>Email address</label>
                <input type="email" class="form-control form-control-lg" v-model="user.email"/>
            </div>
 
            <div class="form-group">
                <label>Password</label>
                <input type="password" class="form-control form-control-lg" v-model="user.password"/>
            </div>

            <br>
            
            <button type="submit" class="btn btn-dark btn-lg btn-block" v-on:click="login">Sign In</button>
            
            <p class="text-right mt-2 mb-4">
                <router-link to="/">Signup</router-link>
            </p>
 
        <!-- </form> -->
    </div>
</template>
 
<script>
    export default {
        data() {
            return {
                user:{
                    email:"",
                    password:""
                }
            }
        },
        methods: {
            login(){
                
                this.$store.dispatch("login", this.user).then(
                (r) => {
                    if(r.user.role.name == 'employee'){
                        this.$router.push("/employee_profile");
                    }else if(r.user.role.name == 'manager'){
                        this.$router.push("/manager_profile");

                    }
                },
                (error) => {
                    console.log(error)
                }
            );
            }
        }

    }
</script>