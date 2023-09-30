import { ref } from "vue"
// I imported this coz I wanna use 'ref' here.

const getPosts = () => {
    const posts = ref([]);

    const error = ref(null);

    const load = async () => {

        try {

            // I want the page to load the contents after some delay......coz I wanna create a spinner that's gonna load before the page displays.
            await new Promise(resolve => {
                setTimeout(resolve, 2000)
            })
            // So the above code means: after 2 secs, I'm calling the resolve function.
            // Although the resolve function isn't doing anything really, it's just holding back TIME somehow.
            // So, what this whole thing mean is, after calling the load() function, it's gonna wait 2 secs then do what it's supposed to do, i.e display the data.

            let data = await fetch('http://localhost:3000/posts')
            if (!data.ok) {
                throw Error("Unable to fetch Posts!")
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