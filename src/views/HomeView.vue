<template>
    <div class="home">
        <h1>HOME</h1>
    
        <PostsList v-if="togglePosts" :sendposts="posts" />
    
        <button @click="handleTogglePosts">Show/Hide Posts</button>

        <button @click="posts.pop()">Delete a Post</button>
    </div>
</template>

<script>
import { ref } from "vue";
import PostsList from "../components/PostsList.vue";

export default {
    name: "HomeView",
    components: { PostsList },

    setup() {
        const posts = ref([]);

        const error = ref(null);

        const load = async () => {
            try {
                let data = await fetch(' http://localhost:3000/posts')
                if (!data.ok) {
                    throw Error("No data available")
                }
            }
            catch(err) {
                error.value = err.message
                console.warn(err.message)
            }
        }

        load()

        return { posts };
    },
};
</script>
