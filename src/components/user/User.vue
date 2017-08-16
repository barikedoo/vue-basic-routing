<template>
  <div id="user">
      <h2> {{ title }} </h2>
      <router-view></router-view>
  </div>
</template>

<script>
export default {
    data() {
        return {
            title: 'Parent user component'
        }
    }

}
</script>

<style>
  #user {

  }
</style>
