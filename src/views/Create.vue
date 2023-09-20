<template>
    <div>
        <div class="create">
            <form action="">
                <label for="">Title</label>
                <input type="text" v-model="title" required>

                <label for="">Content</label>
                <textarea v-model="body" name="" id="" cols="30" rows="10" required></textarea>

                <label for="">Tags ( Hit "Enter" to add a Tag )</label>
                <input type="text" v-model="tag" @keydown.enter.prevent="handleKeyDown" required>
                <!-- I added the eventListener coz I wanna perform an action whenever User clicks "Enter". -->
                <!-- The ".prevent" is gonna prevent the form from submitting, coz normally, "Enter" button submits every form. -->

                <button type="submit">Add Post</button>
            </form>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue'
export default {
    setup() {
        const title = ref('')
        const body = ref('')
        const tag = ref('')
        const tags = ref([])

        const handleKeyDown = () => {
            //
        }

        return { title, body, tag, handleKeyDown }
    }
};
</script>

<style></style>