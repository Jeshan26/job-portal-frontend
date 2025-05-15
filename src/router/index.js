import { createRouter, createWebHistory } from "vue-router";


import HomeView from "@/views/HomeView.vue";
import JobsView from "@/views/JobsView.vue";
import JobView from "@/views/JobView.vue";
import AddJobView from "@/views/AddJobView.vue";
import NotFoundView from "@/views/NotFoundView.vue";

const router = createRouter({
    history : createWebHistory(import.meta.env.BASE_URL),
    routes :[
        {
            path:'/',
            name: 'home',
            component: HomeView,
        },
        {
            path:'/jobs',
            name: 'jobs',
            component: JobsView,
        },
        {
            path:'/jobs/:id',
            name: 'single-job',
            component: JobView,
        },
        {
            path:'/jobs/add',
            name: 'Add Job',
            component: AddJobView,
        },
        {
            path:'/:catchAll(.*)',
            name: 'Not Found',
            component: NotFoundView,
        },
    ]
});

export default router;