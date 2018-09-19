<template>
    <div class="container">
        <div id="mainBody">
            <!--The Progress Bar: Increases when user adds in a pokemon-->
            <pteam-header :PokemonCount="pokemons.length" :maxPokemon="maxPokemon"></pteam-header>

            <!--User can input their pokemon here-->
            <pteam-add-pokemon @pokemonAdded="newPokemon"></pteam-add-pokemon>

            <!--Pokemon will appear here-->
            <pteam-pokemon-list :pokemons="pokemons" @pokemonDeleted="deletePokemon"></pteam-pokemon-list>
            
            <!--Info box-->
             <pteam-footer></pteam-footer>

        </div>
    </div>
</template>


<script>
	import Header from './components/shared/Header.vue';
	import AddPokemon from './components/server/AddPokemon.vue';
	import PokemonList from './components/server/PokemonList.vue';
	import Footer from './components/shared/Footer.vue';

    export default {

    	data : function(){

    		return {
    			// keeps track of the list of pokemon 
    			pokemons : [], 

    			// keeps track of how many pokemon is added to the list
    			count : 0,

    			// max number = 6
    			maxPokemon : 6,
    			
    		};

    	},
    	methods : {

    		// adds new pokemon to the list
    		newPokemon(mon){

    			if(this.pokemons.length < this.maxPokemon){ 
    				this.pokemons.push(mon);
    			} else {
    				// alerts that only 6 pokemons can be added at a time
    				alert("Only 6 Pokemons can be added at a time!");
    			}

    		},
    		// deletes pokemon from the list
    		deletePokemon(index){
    			this.pokemons.splice(index,1);
    			--this.count;
    		},

    	}, 
    	components : {
    		'pteam-header' : Header,
    		'pteam-add-pokemon' : AddPokemon,
    		'pteam-pokemon-list' : PokemonList,
    		'pteam-footer' : Footer
    	},

    	
        
    };
</script>

<style>

    #mainBody{
        border : 3px solid black;
        border-radius: 20px;
        margin: 20px;
        padding: 20px;
        background-color: white;
    }

    body {
        background-color: #b32400;
    }

</style>





