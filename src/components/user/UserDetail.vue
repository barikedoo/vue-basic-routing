<template>
  <div id="user-detail">
      <h2> {{ title }} </h2>
      <p>User ID - {{ $route.params.id }} </p>
      <router-link tag="button" :to="{name: 'userEdit', query: {locale: 'ru', action :'update'}}">Edit User</router-link>
  </div>
</template>

<script>
export default {
    data() {
        return {
            title:'User Detail Component'
        }
    }
}
</script>

<style>
  #user-detail {

  }
</style>
