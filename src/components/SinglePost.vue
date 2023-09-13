<template>
    <div class="post">
    
    
    
        <h3>{{ individualPost.title }}</h3>
    
    
    
    
    
    
    
        <p>{{ snippet }}</p>
    
    
    
    
    
    
    
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

<style lang="scss" scoped>

</style>
