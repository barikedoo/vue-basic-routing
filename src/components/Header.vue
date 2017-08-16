<template>
    <div id="header">
    
        <router-link to="/" tag="div" class="router-link-all" exact>Home</router-link>
        <router-link to="/user" tag="div" class="router-link-all" exact>To User</router-link>
    
    </div>
</template>

<script>
export default {

}
</script>

<style>
#header {
    width: 100%;
    background: wheat;
    height: 60px;
}
</style>
