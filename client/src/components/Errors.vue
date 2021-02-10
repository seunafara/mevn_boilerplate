<template>
   <div class="alert alert-danger">{{ msg }}</div>
</template>
<script>
export default {
   props: ['msg'],
};
</script>
<style scoped>
.alert {
   background: red;
   color: white;
   padding: 10px;
   border: 1px solid;
   border-radius: 5px;
   font-family: Nunito, sans-serif;
   margin-bottom: 7px;
}
</style>
