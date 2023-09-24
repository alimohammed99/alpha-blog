<template>
    <div v-if="error">{{ error }}</div>
    <div v-if="post" class="post">
        <h3>{{ post.title }}</h3>
        <p class="pre">{{ post.body }}</p>
    </div>
    <div v-else>
        <Spinner />
        <div>LOADING.......</div>
        <!-- I already have a spinner component. -->
    </div>
</template>

<script>
import getPost from "../composables/getPost.js";
import Spinner from "../components/Spinner.vue";

import { useRoute } from 'vue-router'
// I wanna use route. Router is used for redirection while route is used to get info about the current route we're on.

export default {
    props: ['yz'],
    // yz is the route parameter sent from the router page. I need it here as a prop.
    components: { Spinner },
    setup(props) {
        //This is how we use props in the setup function.

        //Invoking the route.
        const route = useRoute()

        // const { post, error, load } = getPost(props.yz)
        // This was commented out coz I decided to use route to get the id instead of using the props I sent initially.

        // Using route to get the ID. The ID is denoted by 'yz'
        // This idea is good coz if maybe we dont have the ID as a prop. We can still get what we want.
        const { post, error, load } = getPost(route.params.yz)
        // Both this code and the commented one above will still work the same way.

        load()
        //This one is from the getPost.js. Since "getPost.js" is a composable that I'm using in here. I invoked the load() function here coz it's here I wanna use it.

        return { post, error }
    }
};
</script>

<style>
.post {
    max-width: 1200px;
    margin: 0 auto;
}

.post p {
    color: #444;
    line-height: 1.5em;
    margin-top: 40px;
}

.pre {
    white-space: pre-wrap;
}
</style>