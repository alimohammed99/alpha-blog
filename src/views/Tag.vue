<template>
    <div class="tag">
        <!-- Check for errors first -->
        <div v-if="error">
            {{ error }}
        </div>

        <!-- Only display some data if there's data to display -->
        <div v-if="posts.length" class="layout">
            <PostsList :sendposts="filterBlogsByTag" />
            <TagCloud :tagCloudPosts="posts"/>
        </div>

        <!-- If there's no post to display -->
        <div v-else>
            <Spinner />
        </div>

    </div>
</template>

<script>

import getPosts from "../composables/getPosts.js";

import PostsList from "../components/PostsList.vue";

import TagCloud from "../components/TagCloud.vue";

import Spinner from "../components/Spinner.vue";

import { computed } from "vue";
// Just because I'm using the computed() hook.

import { useRoute } from 'vue-router'
// I wanna use route. Router is used for redirection while route is used to get info about the current route we're on.

export default {
    name: "Tag",
    components: { getPosts, PostsList, Spinner, TagCloud },

    setup() { 

        // Calling only 'getPosts()' won't work. I have to pass in the data that I need. It might work but it's not gonna return our values.

        const { posts, error, load } = getPosts()

        // Now, the above returns back the values, right from the getPosts.js file. I have to pass them here too since I'll be needing them here.

        load()
        // Calling the load() function to invoke the load() method passed in the getPosts.js

        //Invoking the route.
        const route = useRoute()

        const filterBlogsByTag = computed(() => {
            // getting the route parameter sent from router page. Getting it with "route".
            const desiredTag = route.params.uv;

            // Filter the 'posts' array to return only blogs which contains the desired tags clicked.
            return posts.value.filter(blog => blog.tags.includes(desiredTag));
        });

        return { posts, error, filterBlogsByTag };
    },
};
</script>

<style>
.tag {
    max-width: 1200px;
    margin: 0 auto;
    padding: 10px;
}
</style>