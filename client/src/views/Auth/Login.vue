<template>
   <div>
      <div class="main">
         <div class="first-half">
            <h1>Hi</h1>
         </div>
         <div class="second-half">
            <div class="login-f-container">
               <h3>Login to your account.</h3>
               <div v-if="error">
                  <Error v-for="err in error" :key="err.param" :msg="err.msg" />
               </div>
               <form @submit.prevent="loginUser">
                  <div class="form-group">
                     <label class="form-label" for="username">Username</label>
                     <input
                        required
                        id="username"
                        name="username"
                        v-model="username"
                        class="form-input"
                        type="text"
                        placeholder="e.g themainman"
                     />
                  </div>
                  <div class="form-group-2">
                     <div class="form-item-flex">
                        <label class="form-label fl-l" for="password"
                           >Password</label
                        >
                        <a href="#" class="text-link fl-l">Forgot Password?</a>
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
                  <div class="login-btn-container">
                     <button type="submit" class="button login-btn">
                        Login
                     </button>
                  </div>
               </form>
               <div class="new-user-box">
                  <p class="form-label">Don't have an account yet?</p>
                  <router-link class="text-link" to="/register"
                     >Sign Up</router-link
                  >
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
      };
   },
   methods: {
      ...mapActions(['login']),
      loginUser() {
         let user = {
            username: this.username,
            password: this.password,
         };

         this.login(user).then((res) => {
            if (res) {
               if (res.data.success) {
                  this.$router.push('/profile');
               }
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
