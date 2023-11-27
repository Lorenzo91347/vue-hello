'use strict'

const { createApp } = Vue;

const myApp =
    createApp({
        data() 
            return {
            title: 'ciao',
            img: 'https://picsum.photos/200',

        }
    });

myApp.mount('#app');



/*
              CssData: 'red',
              isOK: true,
              type: 'A',
              friends: ['luca', 'paolo', 'giulia'],
              friendsObj: [

                  {
                      naMe: 'Luca',
                      age: 25,

                  },
                  {
                      naMe: 'Giulia',
                      age: 28,
                  }
              ]
          };
      },
      methods: {
          ifTrue() {
              2 > 1;
          },
      }*/

