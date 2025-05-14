<script setup>
  import {ref,onMounted} from "vue";


  const name = ref("jeshan");
  const status = ref("active");
  const tasks = ref(['Task 1','Task 2','Task 3'])
  const newTask = ref('');


  const toggleStatus = ()=>{
    console.log(status.value);
    if(status.value === "active"){
      status.value = "pending"
    }
    else if(status.value === "pending"){
      status.value = "inactive"
    }
    else {
      status.value = "active"
    }
  }
  const addTask = () => {
    if(newTask.value.trim() !== ""){
      tasks.value.push(newTask.value);
      newTask.value = "";
    }
  }
  const deleteTask = (index)=>{
    tasks.value.splice(index,1);
  }

  onMounted(async ()=>{
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos');
      const data = await response.json();
      console.log(data);
      tasks.value=data.map((task)=> task.title)

    } catch (error) {
      
    }
  })
</script>


<template>
  <h1>Hello {{ name }}</h1>
  <p v-if="status =='active' "> User is active </p>
  <p v-else-if="status =='pending' "> User is penidng </p>
  <p v-else> User is inactive </p>

  <form @submit.prevent="addTask">
    <label for="newTask">Add new task</label>
    <input type="text" id="newTask" name="newTask" v-model="newTask">
    <button type="submit">Add Task</button>
  </form>
  <h3> Tasks :</h3>
  <ul>
    <li v-for="(task,index) in tasks" :key="task">
      <span>{{ task }}</span>
      <button @click="deleteTask(index)">x</button>
    </li>
  </ul>
  <button @click="toggleStatus"> Change status</button>
  
</template>

