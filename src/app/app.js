import '../assets/scss/main.scss';

import Vue from 'vue';
import App from './components/Application.vue.vue';

const app = new Vue(App);
app.$mount('#app');

window.app = app;