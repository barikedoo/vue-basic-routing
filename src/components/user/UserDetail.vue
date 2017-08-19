<template>
    <div id="user-detail">
        <h2> {{ title }} </h2>
        <p>User ID - {{ $route.params.id }} </p>
        <router-link tag="button" :to="urlData">Edit User</router-link>
    </div>
</template>

<script>
export default {
    data() {
        return {
            title: 'User Detail Component',
            urlData: {
                name: 'userEdit',
                query: {
                    locale: 'ru',
                    action: 'update'
                },
                hash: '#red-block'
            }
        }
    },

    // Запрещает просмотр роута, если условия не соблюдены]
    // beforeRouteEnter(to, from, next) {
    //     if (false) {
    //         next();
    //     } else {
    //         alert('You are not allowed here!');
    //         next(false);
    //     }
    // } 
}
</script>

<style>
#user-detail {}
</style>
