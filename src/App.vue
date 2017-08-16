<template>
  <div id="app">

    <app-header></app-header>

    <router-view></router-view>
  </div>  
</template>

<script>

import Header from './components/Header.vue'
export default {

components: {
  'app-header': Header
},

  data() {
    return {
    }
  },
}
</script>

<style lang="scss">

* {
  margin: 0;
  padding: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  color: #2c3e50;
}

button {
  padding: 10px 35px;
  margin-bottom: 20px;
}

a {
  text-decoration: none;
}

li {
  list-style: none;
  display: inline-block;
  padding: 10px 15px;
  &:hover {
    background: lightgray;
  }
}

.router-link-active {
  background: lightblue;
}

.router-link-all {
  display: inline-block;
  padding: 8px 15px;

}

</style>
