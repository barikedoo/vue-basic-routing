<template>
    <div id="user-edit">
        <h2> {{ title }} </h2>
        <p> Locale: {{ $route.query.locale }} </p>
        <p> Action: {{ $route.query.action }} </p>
        <button @click="confirmed = true">Confirm</button>
        <a href="#red-block">aa</a>
        <div style="height:1100px; border: 1px solid black"></div>
        <div style="height:200px; width:100px; background-color:red" id="red-block"></div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            title: 'User Edit Component',
            confirmed: false
        }
    },
    beforeRouteLeave(to, from, next) {
        if(this.confirmed) {
            next();
        } else {
            if(confirm('Are you sure you want to leave without saving?')) {
                next();
            } else (
                next(false)
            );
        }
    }
}
</script>

<style>
#user-edit {}
</style>
