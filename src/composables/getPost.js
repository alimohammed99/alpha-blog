// PostsDetails owns the getPost under composables.

import { ref } from "vue";
// I imported this coz I wanna use 'ref' here.

const getPost = (yz) => {
    // 'yz' is the ID. I need to pass it here, from the PostsDetails page. 
    // It was passed as props to the PostsDetails page and since this getPost is just a composable that's needed in the PostsDetails, I can easily have access to all the data. "PostsDetails" is like the Parent while "getPosts" is a child.
    const post = ref(null);
    // I ddnt let it be an empty array (like in getPosts.js) coz here, I'm only getting a particular post.

    const error = ref(null);

    const load = async () => {
        try {
            // I want the page to load the contents after some delay......coz I wanna create a spinner that's gonna load before the page displays.
            await new Promise(resolve => {
                setTimeout(resolve, 2000)
            })
            // So the above code means: after 2 secs, I'm calling the resolve function.
            // Although the resolve function isn't doing anything really, it's just holding back TIME somehow.
            // So, what this whole thing mean is, after calling the laod() function, it's gonna wait 2 secs then do what it's supposed to do, i.e display the data.

            let data = await fetch('http://localhost:3000/posts/' + yz)
            if (!data.ok) {
                throw Error("That Post does not exist!")
            }
            post.value = await data.json()
        }
        catch (err) {
            error.value = err.message
            console.log(error.value)
        }
    }

    return { post, error, load }
    // I'm not gonna invoke the load() function here. Instead, I'll go invoke it wherever I need it. I just have to return it here.

    // Now when I invoke it in the place I wanna use it, it returns these values too.
}

export default getPost
// I'm exporting this out so I'll be able to import and use it wherever I want. 
// I want to go and use it in the PostsDetails view.