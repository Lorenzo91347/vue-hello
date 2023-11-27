'use strict'

const { createApp } = Vue;

const myApp =
    createApp({
        data() {
            return {
                title: 'ciao'
            };
        },
    });
myApp.mount('#app');
