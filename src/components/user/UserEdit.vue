<template>
  <div id="user-edit">
      <h2> {{ title }} </h2>
      <p> Locale: {{ $route.query.locale }} </p>
      <p> Action: {{ $route.query.action }} </p>
  </div>
</template>

<script>
export default {
    data() {
        return {
            title: 'User Edit Component'
        }
    }
}
</script>

<style>
  #user-edit {

  }
</style>
