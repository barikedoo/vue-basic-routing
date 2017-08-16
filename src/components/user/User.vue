<template>
    <div id="user">
        <h2> {{ title }} </h2>
        <transition 
            enter-active-class="animated fadeInLeft"
            leave-active-class="animated fadeOutRight"
            mode="out-in"
        >
            <router-view></router-view>
        </transition>
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
#user {}
</style>
