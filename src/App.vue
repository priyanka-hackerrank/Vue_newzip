<template>
  <div>
    <h8k-navbar v-bind:header="title"></h8k-navbar>
    <div class="layout-column align-items-center justify-content-center my_div">
      <button data-testid="clickButton">Click me!</button>
      <h4 data-testid="clickedText">You clicked this button 0 times</h4>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "Vue App",
    };
  },
  methods: {},
};
</script>

<style lang="scss">
@import "../node_modules/h8k-design/dist/index.css";
</style>
<style scoped>
.my_div {
  height: 100vh;
}
</style>
