'use strict'

const { createApp } = Vue;

const myApp =
    createApp({
        data() {
            return {
                title: 'ciao',
                img: 'https://picsum.photos/200'
            };
        },
    });
myApp.mount('#app');
