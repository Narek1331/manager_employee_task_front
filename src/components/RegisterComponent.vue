<template>
    <div class="vue-tempalte container">
        <!-- <form> -->
            <h3>Sign Up</h3>
 
            <div class="form-group">
                <label>Name</label>
                <input type="text" class="form-control form-control-lg" v-model="user.name"/>
            </div>
 
            <div class="form-group">
                <label>Email address</label>
                <input type="email" class="form-control form-control-lg" v-model="user.email"/>
            </div>
 
            <div class="form-group">
                <label>Password</label>
                <input type="password" class="form-control form-control-lg" v-model="user.password"/>
            </div>

            <div class="form-group">
                <label>User role</label>
                <select class="form-select" v-model="user.role_id">
                    <option selected value="2">Employee</option>
                    <option value="1">Manager</option>
                </select>
            </div>

            <br>
 
            <button type="submit" class="btn btn-dark btn-lg btn-block" v-on:click="register">Sign Up</button>
 
            <p class="forgot-password text-right">
                Already registered 
                <router-link :to="{name: 'login'}">sign in?</router-link>
            </p>
        <!-- </form> -->
    </div>
</template>
 
<script>
    export default {
        data() {
            return {
                user:{
                    name:"",
                    email:"",
                    password:"",
                    role_id:"2",
                }
            }
        },
        methods: {
            register(){

                this.$store.dispatch("register", this.user).then(
                () => {
                    this.$router.push("/login");
                },
                (error) => {
                    console.log(error)
                }
            );
            }
        }
    }
</script>