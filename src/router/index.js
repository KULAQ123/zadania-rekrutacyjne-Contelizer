import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/HomeView.vue";
import TaskOne from "../views/TaskOneView.vue";
import TaskTwo from "../views/TaskTwoView.vue";
import TaskThree from "../views/TaskThreeView.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/task-one", name: "TaskOne", component: TaskOne },
  { path: "/task-two", name: "TaskTwo", component: TaskTwo },
  { path: "/task-three", name: "TaskThree", component: TaskThree },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
