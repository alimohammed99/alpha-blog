// I'm gonna need ref here
import { ref } from 'vue'


// tagCloudPosts is the props sent from Home. It holds the posts.
const useTagCloud = (tagCloudPosts) => {


    // This will be an array of all the UNIQUE tags, packed together from different posts, without repetition. I'm holding it with ref coz it's gonna ba reactive.
    const allTags = ref([])


    // Set() is a collection of values and IT DOESN'T ALLOW REPETITION. Exactly what I need.
    const tagSet = new Set()


    // This is exactly why I sent our posts here. Before getting access to tags or cycling through them, I need access to the posts first. Since 'tags ∈ post'.
    tagCloudPosts.forEach(item => {
        // "item" now holds all the posts. I'm cycling through all the posts.


        item.tags.forEach(data => tagSet.add(data))

    })
    // 'tags'? That's the tags property that's on every post in the database.
    // So, it's gonna cycle through all the tags in the DB, store them in 'data' and add them all to our magic set (tagSet).

    // We add stuffs to Set() using the add() method and not push().
    // push() is for adding stuffs to Arrays[].
    // And I chose to use set() here instead of arrays coz arrays accept duplicates and I don't want that here.

    // Now we have all tags successfully inside tagSet, without repetition.
    // So now, converting the set() into an array, using the SPREAD OPERATOR "..." ;
    allTags.value = [...tagSet]
    // I don't wanna have my items inside a set() at the end. I want to store them in an array, and I already have a reactive array (allTags).
    // What this is doing is, taking all items in the set and SPREADING them in our Array.

    // I could have used [tagSet] alone instead of adding the spread operator, but the idea of using the spread operator enables us to have the items in the set SPREAD OUT in the array, rather than having the set itself. We're more interested in the items not the container.

    return { allTags }

}

// Since this file is just a composable. I'm exporting it to where I need it ( i.e, inside 'TagCloud' component ).
export default useTagCloud
