<template>
  <div id="user-list">
      <h2> {{ title }} </h2>
    <router-link tag="li" to="/user/1">User 1</router-link>
    <router-link tag="li" to="/user/2">User 2</router-link>
    <router-link tag="li" to="/user/3">User 3</router-link>
    
  </div>
</template>

<script>
export default {
    data() {
        return {
            title: 'User List Component'
        }
    }

}
</script>

<style>
  #user-list {

  }

  li {
      cursor: pointer;
  }
</style>
