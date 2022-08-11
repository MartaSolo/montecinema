<script>
// import HelloWorld from "./components/HelloWorld.vue";
// import TheWelcome from "./components/TheWelcome.vue";
</script>

<template>
  <div class="header">Header</div>
  <div class="hero">Hero</div>
  <div class="soon">Coming soon</div>
  <div class="screenings">Screenings</div>
  <div class="contact">Contact</div>
</template>

<style lang="scss" scoped>
@import "../assets/stylesheets/colors";
.header {
  border: 1px solid blue;
}
.hero {
  height: 100px;
  border: 1px solid red;
}
.soon {
  height: 100px;
  border: 1px solid $colorAccent;
}
.screenings {
  height: 200px;
  border: 1px solid violet;
}
.contact {
  height: 50px;
  border: 1px solid yellow;
}
</style>
