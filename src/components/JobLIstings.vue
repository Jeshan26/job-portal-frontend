<script setup>
    import { reactive,ref, defineProps, onMounted } from 'vue';
    import JobListing from './JobListing.vue';
    import { RouterLink } from 'vue-router';
    import PulseLoader from 'vue-spinner/src/PulseLoader.vue';
    import axios from 'axios';

    
    defineProps({
        limit:Number,
        showBtn: {
            type: Boolean,
            default : false,
        }
    });

    // below is using ref(primitives or objects)
    // const jobs = ref([]);

    //  reactive uses ref under the hood but takes only objects
    const state = reactive({
        jobs: [],
        isLoading: true,
    })

onMounted(async()=>{
    try {
        const response = await axios.get('/api/jobs');
        state.jobs = response.data;
    } catch (error) {
        console.error('Error fetching job',error);
    } finally {
        state.isLoading = false;
    }
});
</script>

<template>
    <section class="bg-blue-50 px-2 py-10">
        <div class="container-xl lg:container m-auto">
            <h2 class="text-3xl font-bold text-green-500 mb-6 text-center">
                Browse Jobs
            </h2>
            <!-- Show Loading spinner while isLoading = true -->
             <div v-if="state.isLoading" class="text-center text-gray-500 py-6">
                <PulseLoader/>
             </div>

             <!-- Show Job Listing when done loading -->
            <div v-else  class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <JobListing v-for="job in state.jobs.slice(0,limit || state.jobs.length)" :key="job.id" :job="job" />
            </div>
        </div>
    </section>
<!-- view all buttons -->
    <section v-if= "showBtn" class="m-auto max-w-lg my-10 px-6">
      <RouterLink
        to="/jobs"
        class="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
        >View All Jobs</RouterLink
      >
    </section>
    
</template> 