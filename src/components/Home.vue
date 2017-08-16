<template>
    <div id="home">
        <h2> {{ title }} </h2>
        <button @click="execute"> Execute the function</button>
    </div>
</template>

<script>


export default {
    data() {
        return {
            title: 'Basic Home Component'
        }
    },
    methods: {
        execute() {
            var vm = this;
            alert('This is it');
            console.log(this.$router);
            setTimeout(function () {
                vm.$router.push('/user/3/edit');
            }, 3000)
        }
    }
}
</script>

<style>

</style>
