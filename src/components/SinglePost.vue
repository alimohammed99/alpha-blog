<template>
    <div class="post">

        <router-link :to="{ name: 'PostsDetails', params: { yz: individualPost.id } }">
            <!-- yz is the route parameter sent from the router page -->
            <h3>{{ individualPost.title }}</h3>
        </router-link>

        <p>{{ snippet }}</p>


        <span v-for="tag in individualPost.tags" :key="tag">
            <router-link :to="{ name: 'tags', params: { uv: tag } }">
                #{{ tag }}
            </router-link>
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

<style>
.post {
    margin: 0 40px 30px;
    padding-bottom: 30px;
    border-bottom: 1px dashed #e7e7e7;
}

.post h3 {
    display: inline-block;
    position: relative;
    font-size: 26px;
    color: white;
    margin-bottom: 10px;
    max-width: 400px;
}

.post h3::before {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    background: #ff8800;
    position: absolute;
    z-index: -1;
    padding-right: 40px;
    left: -30px;
    transform: rotatez(-1deg);
}
</style>
