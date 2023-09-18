import { ref } from "vue";
// I imported this coz I wanna use 'ref' here.

const getPosts = () => {
    const posts = ref([]);

    const error = ref(null);

    const load = async () => {
        try {
            let data = await fetch('http://localhost:3000/posts')
            if (!data.ok) {
                throw Error("No data available!")
            }
            posts.value = await data.json()
        }
        catch (err) {
            error.value = err.message
            console.log(error.value)
        }
    }

    return { posts, error, load }
    // I'm not gonna invoke the load() function here. Instead, I'll go invoke it wherever I need it. I just have to return it here.

    // Now when I invoke it in the place I wanna use it, it returns these values too.
}

export default getPosts
// I'm exporting this out so I'll be able to import and use it wherever I want.