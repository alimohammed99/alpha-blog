<template>
    <div>
        <PostsList :sendposts="filterBlogsByTag" />
    </div>
</template>

<script>

import getPosts from "../composables/getPosts.js";

import PostsList from "../components/PostsList.vue";

import { computed } from "vue";
// Just because I'm using the computed() hook.

import { useRoute } from 'vue-router'
// I wanna use route. Router is used for redirection while route is used to get info about the current route we're on.

export default {
    name: "Tag",
    components: { getPosts, PostsList },

    setup() {

        // Calling only 'getPosts()' won't work. I have to pass in the data that I need. It might work but it's not gonna return our values.

        const { posts, error, load } = getPosts()

        // Now, the above returns back the values, right from the getPosts.js file. I have to pass them here too since I'll be needing them here.

        load()
        // Calling the load() function to invoke the load() method passed in the getPosts.js

        //Invoking the route.
        const route = useRoute()

        const filterBlogsByTag = computed(() => {
            // Replace 'desiredTag' with the specific tag you want to filter by
            const desiredTag = route.params.uv;

            // Filter the 'posts' array to include only blogs with the desired tag
            return posts.value.filter(blog => blog.tags.includes(desiredTag));
        });

        return { posts, error, filterBlogsByTag };
    },
};
</script>

<style></style>