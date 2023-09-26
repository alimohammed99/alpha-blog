<template>
    <div class="home">
        <h1>HOME</h1>
        <div v-if="error"> {{ error }} </div>
        <div class="layout" v-if="posts.length">
            <PostsList :sendposts="posts" />
            <TagCloud :tagCloudPosts="posts" />
            <!-- This TagCloud is in another component, under composables. I'm nesting it here. I'm gonna need access to our posts in that composable so I have to send the posts there.-->
            <!-- Even though my business is with the tags, I still need to have access to the posts because "POSTS HAve the TAGS." -->
        </div>
        <div v-else>
            <Spinner />
            <div>LOADING.......</div>
            <!-- I already have a spinner component. -->
        </div>

    </div>
</template>

<script>
import PostsList from "../components/PostsList.vue";
import TagCloud from "../components/TagCloud.vue";
import getPosts from "../composables/getPosts.js";
import Spinner from "../components/Spinner.vue";

export default {
    name: "HomeView",
    components: { PostsList, Spinner, TagCloud },

    setup() {


        // Calling only 'getPosts()' won't work. I have to pass in the data that I need. It might work but it's not gonna return our values.

        const { posts, error, load } = getPosts()

        // Now, the above returns back the values, right from the getPosts.js file. I have to pass them here too since I'll be needing them here.

        load()
        // Calling the load() function to invoke the load() method passed in the getPosts.js

        return { posts, error };
    },
};
</script>


<style>
.home {
    max-width: 1200px;
    margin: 0 auto;
    padding: 10px;
}
.layout {
    display: grid;
    grid-template-columns: 3fr 1fr;
    gap: 20
}
</style>