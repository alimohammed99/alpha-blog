<template>
    <div>
        <div class="create">
            <form action="" @submit.prevent="handleSubmit">
                <!-- ".prevent" prevents the form from reloading everytime we submit data. -->
                <label for="">Title</label>
                <input type="text" v-model="title" required>

                <label for="">Content</label>
                <textarea v-model="body" name="" id="" cols="30" rows="10" required></textarea>

                <label for="">Tags ( Hit "Enter" to add a Tag )</label>
                <input type="text" v-model="tag" @keydown.enter.prevent="handleKeyDown">
                <!-- I added the eventListener coz I wanna perform an action whenever User clicks "Enter". -->
                <!-- The ".prevent" is gonna prevent the form from submitting, coz normally, "Enter" button submits every form. -->

                <div v-for="tag in tags" :key="tag" class="pill">
                    # {{ tag }}
                </div>

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

            if (!tags.value.includes(tag.value)) {
                // Checking if the item that's been typed in currently has not been typed in before. I wanna make sure every item is unique so there'll be no repetition. Why would you type same thing again?

                tag.value = tag.value.replace(/\s/, '')
                // Using 'RegEx' to remove white spaces from the input field. 
                // "//" is the regular expression bracket, "\s" stands for white spaces.
                // The above code is gonna remove all white spaces and replace them with nothing. This literally means it's gonna remove white spaces.

                tags.value.push(tag.value)
                // After the above conditions are met, it's gonna store every new item User types in the tags array.
            }

            tag.value = ''
            // Clearing the input field whenever User adds anything.....making the field ready to accept new items.

        }

        const error = ref(null);

        const handleSubmit = async () => {
            try {
                let newBlog = {
                    title: title.value,
                    body: body.value,
                    tags: tags.value,
                };
                let data = await fetch("http://localhost:3000/posts/", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(newBlog),
                })
                    .then(() => {
                        // "this.$router" is used to redirect.
                        this.$router.push("/");
                        // Pushing another route into the history.
                        // After adding a Blog, users should be redirected to the homepage('/') to see all Blogs.
                    })
                if (!data.ok) {
                    throw Error("Unable to add Blog, try again!")
                }
            }
            catch (err) {
                error.value = err.message
                console.warn(error.value)
            }
        }
        return { title, body, tag, tags, handleKeyDown, handleSubmit }
    }
};
</script>

<style>
form {
    max-width: 480px;
    margin: 0 auto;
    text-align: left;
}

input,
textarea {
    display: block;
    margin: 10px 0;
    width: 100%;
    box-sizing: border-box;
    padding: 10px;
    border: 1px solid #eee;
}

textarea {
    height: 160px;
}

label {
    display: inline-block;
    margin-top: 30px;
    position: relative;
    font-size: 20px;
    color: white;
    margin-bottom: 10px;
    background: #ff8800;
    transform: rotateZ(-5.3deg);
    padding: 10px;
}

/**label::before {
    content: "";
    display: block;
    width: 100%;
    background: #ff8800;
    position: absolute;
    z-index: -1;
    padding-right: 40px;
    left: -30px;
    transform: rotateZ(-1.5deg);
}

/*The above was commented out coz it ddn't work. So insteaad, some of the codes there were added to the original 'label' styling.*/

button {
    display: block;
    margin-top: 30px;
    background: #ff8800;
    color: white;
    border: none;
    padding: 8px 16px;
    font-size: 18px;
    cursor: pointer;
}

.pill {
    display: inline-block;
    margin: 10px 10px 0 0;
    color: #444;
    background: #ddd;
    padding: 8px;
    border-radius: 20px;
    font-size: 15px;
}
</style>