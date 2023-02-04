import Vue from "vue";
import VueRouter from "vue-router";
import Departments from '../components/diagnose/department.vue';
Vue.use(VueRouter);

const routes = [{
        path: '/',
        name: 'index',
        component: Departments
    },
    // {
    //     path: '/test',
    //     name: 'test',
    //     componen
    // }
];

const router = new VueRouter({
    routes
});

export default router;