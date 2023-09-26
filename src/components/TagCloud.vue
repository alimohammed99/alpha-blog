<template>
    <div class="tag-cloud">
        <h3>Tags</h3>
        <div v-for="tagList in allTags" :key="tagList">
            <router-link :to="{ name: 'Tag', params: { uv: tagList } }">
                # {{ tagList }}
            </router-link>
        </div>
    </div>
</template>

<script>

// Importing the useTagCloud composable into here.
// We can now use the composable inside our setup here.
import useTagCloud from '../composables/useTagCloud.js'

export default {
    props: ['tagCloudPosts'],

    setup(props) {
        // The composable function name is useTagCloud.
        // And I'm passing the data we need into the curly brackets.
        // And I still have to return the props that holds the posts(tagCloudPosts)
        const { allTags } = useTagCloud(props.tagCloudPosts)

        return { allTags }
        // Returning this here so it can be accessible in the template.
    }

};

</script>

<style>

.tag-cloud {
    padding: 10px;
}
.tag-cloud h3 {
    border-bottom: 1px solid #eee;
    padding: 16px 8px;
    color: #444;
}
.tag-cloud div {
    display: inline-block;
    padding: 10px;
}
.tag-cloud a {
    color: #ccc;
    text-decoration: none;
}
.tag-cloud a.router-link-active {
    color: #ff8800;
    font-weight: bold;
}

</style>