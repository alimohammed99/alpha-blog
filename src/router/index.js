import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PostsDetails from '../views/PostsDetails.vue'
import Create from '../views/Create.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/posts/:yz',
    // route parameter
    // This enables me to navigate to the specific Project I wanna view using the Project id.
    // "yz" stands for the Project id.
    name: 'PostsDetails',
    component: PostsDetails,
    props: true
    // Now the ProjectsDetails page will be able to accept properties from anywhere.
    // This is because I want to send the route parameter(yz i.e id) from the Projects page to this Details page as props.
  },
  {
    path: '/create',
    name: 'Create',
    component: Create
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
