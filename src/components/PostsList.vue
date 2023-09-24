<template>
    <div class="post-list">
    
        <div v-for="eachPost in sendposts" :key="eachPost.id">
    
            <SinglePost :individualPost="eachPost" />
    
        </div>
    
    </div>
</template>

<script>
import SinglePost from './SinglePost.vue'
export default {
    name: '',
    props: ['sendposts'],
    components: { SinglePost },
    setup(props) {
        console.log(props.sendposts)
    }

};
</script>

<style lang="scss" scoped>

</style>