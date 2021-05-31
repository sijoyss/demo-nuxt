<template>
  <div>
    <Header @sidenavToggle="displaySidenav = !displaySidenav" />
    <Sidenav :show="displaySidenav" @close="displaySidenav = false" />
    <nuxt />
  </div>
</template>

<script>
import Header from "@/components/Navigation/Header";
import Sidenav from "@/components/Navigation/Sidenav";

export default {
  components: {
    Header,
    Sidenav
  },
  data() {
    return {
      displaySidenav: false
    };
  }
};
</script>

<style>
html {
  font-family: "Open Sans", sans-serif;
}

body {
  margin: 0;
}
</style>
