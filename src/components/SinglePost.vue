<template>
    <div class="post">

        <router-link :to="{ name: 'PostsDetails', params: { yz: individualPost.id } }">
            <!-- yz is the route parameter sent from the router page -->
            <h3>{{ individualPost.title }}</h3>
        </router-link>

        <p>{{ snippet }}</p>

        <span v-for="tag in individualPost.tags" :key="tag">
            #{{ tag }}
        </span>

    </div>
</template>

<script>
import { computed, onMounted, onUnmounted, onUpdated } from "vue";
export default {
    name: "",
    props: ["individualPost"],
    setup(props) {
        onMounted(() => {
            console.log("Component Mounted");
        });

        onUnmounted(() => {
            console.log("Component unmounted");
        });

        onUpdated(() => {
            console.log("Component updated");
        });

        const snippet = computed(() => {
            return props.individualPost.body.substring(0, 20) + "....";
        });

        return { snippet };
    },
};
</script>

<style lang="scss" scoped></style>
