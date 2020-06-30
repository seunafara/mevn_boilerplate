<template>
  <div>
    <Navbar />
    <div class="main-home">
      <div class="main-home-contents">
        <h2>MEVN</h2>
        <p>Built by Afara Seun (@seunafara)</p>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar';
export default {
  name: 'Home',
  components: {
    Navbar,
  },
  methods: {},
  created() {},
};
</script>

<style scoped>
.main-home {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 32px;
}
.main-home h2 {
  font-weight: 100;
}
.main-home p {
  font-weight: 100;
}
.main-home-contents {
  display: block;
  text-align: center;
}
</style>
