import Vue from 'vue'  
import App from './App.vue'


export const pokemonBus = new Vue();
var Pokedex = require('pokedex-promise-v2');
var P = new Pokedex();

new Vue({
  el: '#app',
  
  render: h => h(App)
})


