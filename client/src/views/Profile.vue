<template>
  <div>
    <Navbar />
    <div class="card">
      <ul class="list-group" v-if="user">
        <li class="list-group-item">Email: {{ user.email }}</li>
        <li class="list-group-item">Username: {{ user.username }}</li>
        <li class="list-group-item">Name: {{ user.name }}</li>
      </ul>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex';
import Navbar from '@/components/Navbar';
export default {
  computed: mapGetters(['user']),
  components: {
    Navbar,
  },
  methods: {
    ...mapActions(['getProfile']),
  },
  created() {
    this.getProfile();
  },
};
</script>
<style scoped>
.card {
  margin-top: 100px;
}
</style>
