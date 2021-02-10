<template>
   <div>
      <div class="main">
         <div class="first-half"><h1>Hi</h1></div>
         <div class="second-half">
            <div class="login-f-container">
               <h3>Create an account.</h3>
               <div v-if="error">
                  <Error v-for="err in error" :key="err.param" :msg="err.msg" />
               </div>

               <form @submit.prevent="registerUser">
                  <div class="form-group">
                     <label class="form-label" for="email">Username </label>
                     <input
                        required
                        id="username"
                        name="username"
                        v-model="username"
                        class="form-input"
                        type="text"
                        placeholder="e.g john_doe"
                     />
                  </div>
                  <div class="form-group-2">
                     <label class="form-label" for="email">Full Name </label>
                     <input
                        required
                        id="name"
                        name="name"
                        v-model="name"
                        class="form-input"
                        type="text"
                        placeholder="e.g John Doe"
                     />
                  </div>
                  <div class="form-group-2">
                     <label class="form-label" for="email"
                        >Email Address
                     </label>
                     <input
                        required
                        id="email"
                        name="email"
                        v-model="email"
                        class="form-input"
                        type="email"
                        placeholder="xyz@example.com"
                     />
                  </div>
                  <div class="form-group-2">
                     <div class="form-item-flex">
                        <label class="form-label fl-l" for="password"
                           >Password
                        </label>
                     </div>
                     <input
                        required
                        name="password"
                        id="password"
                        v-model="password"
                        class="form-input"
                        type="password"
                        placeholder="6 characters minimum"
                     />
                  </div>
                  <div class="form-group-2">
                     <div class="form-item-flex">
                        <label class="form-label fl-l" for="confirm_password"
                           >Confirm Password
                        </label>
                     </div>
                     <input
                        required
                        name="confirm_password"
                        id="confirm_password"
                        v-model="confirm_password"
                        class="form-input"
                        type="password"
                        placeholder="Re-type your password"
                     />
                  </div>
                  <div class="login-btn-container">
                     <button type="submit" class="button login-btn">
                        Register
                     </button>
                  </div>
               </form>
               <div class="new-user-box">
                  <p class="form-label">Already have an account?</p>
                  <router-link class="text-link" to="/login">Login</router-link>
               </div>
            </div>
         </div>
      </div>
   </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex';
import Error from '@/components/Errors';
export default {
   components: {
      Error,
   },
   computed: {
      ...mapGetters(['error']),
   },
   data() {
      return {
         username: '',
         password: '',
         confirm_password: '',
         name: '',
         email: '',
      };
   },
   methods: {
      ...mapActions(['register']),
      registerUser() {
         let user = {
            username: this.username,
            password: this.password,
            confirm_password: this.confirm_password,
            email: this.email,
            name: this.name,
         };
         this.register(user).then((res) => {
            // to access res in view side return res in vuex actions
            //  console.log(JSON.stringify(res.response.data.errors));

            if (res && res.data.success) {
               this.$router.push('login');
            }
         });
      },
   },
};
</script>
<style>
.card {
   width: 60%;
   border-radius: 0;
}
.btn {
   border-radius: 0;
}
.form-control {
   border-radius: 0;
}
</style>
