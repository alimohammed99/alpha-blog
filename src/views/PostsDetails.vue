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
export default {
    props: ['yz'],
    // yz is the route parameter sent from the router page. I need it here as a prop.
    components: { Spinner },
    setup(props) {
        //This is how we use props in the setup function.

        const { post, error, load } = getPost(props.yz)

        load()

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
    color:#444;
    line-height: 1.5em;
    margin-top: 40px;
}
.pre {
    white-space: pre-wrap;
}
</style>