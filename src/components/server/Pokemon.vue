<template>
	<div class="pokemonCard">
		<div class="card pokemon">
		  <!-- <img class="card-img-top" src="..." alt="Card image cap"> -->
		  <div class="card-body">
		    <h4 class="card-title" >{{ pokemon | capitalizeFirstLetter }}</h4>
		    <img :src="getPokemonSprites()"/>
		    <p class="card-text"><strong>Pok&eacute;dex #</strong> : {{ pokemonData.ID }} </p>

		    <div  :class="invalidPokemonWarning" >
		    	<p class="card-text">{{ invalidPokemon }}</p>
		    </div>

		    <ul class="list-group list-group-flush">
			   <li class="list-group-item"><strong>Speed</strong> : {{ pokemonData.speed }}</li>
			   <li class="list-group-item"><strong>Special Defense</strong> : {{ pokemonData.specialDefense }}</li>
			   <li class="list-group-item"><strong>Special Attack</strong> : {{ pokemonData.specialAttack }}</li>
			   <li class="list-group-item"><strong>Defense</strong> : {{ pokemonData.defense }}</li>
			   <li class="list-group-item"><strong>Attack</strong> : {{ pokemonData.attack }}</li>
			   <li class="list-group-item"><strong>HP</strong> : {{ pokemonData.hp }}</li>
			</ul>

		  </div>
		</div>
	</div>

</template>


<script>
	
	import Vue from 'vue'
	import axios from 'axios'
	import VueAxios from 'vue-axios'
	
	Vue.use(VueAxios, axios);

	export default{
		props : {
			pokemon : String
		},
		data () {
			return {
				PokeApiURL : 'https://pokeapi.co/api/v2/',
				mainPokeApiPage: 'https://pokeapi.co',
				invalidPokemon : '',
				pokemonData : {
					allInfo : '' ,
					speed : '',
					specialDefense : '',
					specialAttack : '',
					defense : '',
					attack : '',
					hp : '',
					ID : ''
				},
				isValidpokemon : false,
				invalidPokemonWarning : {
					alert: this.isValidpokemon,
					'alert-danger': this.isValidpokemon
				},
				errored : false // error

			};
		},

		// capitalizes the first letter of the pokemon title in the card
		filters : {
			capitalizeFirstLetter(value){
				if (!value) return ''
  				value = value.toString()
  				return value.charAt(0).toUpperCase() + value.slice(1)
			}
		},

		methods: {

			// outputs the pokemon images
			getPokemonSprites(){
			    if(this.pokemonData.ID != '') return '../../../dist/assets/sprites/' + this.pokemonData.ID + '.png';
			    return '';
			}
		},

		mounted () {
			
			// gets pokemon info
			let pokemonInfo = this.pokemonData
		    axios
		      .get( this.PokeApiURL + 'pokemon/' + this.pokemon + '/')
		      .then(response => (
		      		pokemonInfo.allInfo = response,
		      		pokemonInfo.speed = pokemonInfo.allInfo.data.stats[0].base_stat,
		      		pokemonInfo.specialDefense = pokemonInfo.allInfo.data.stats[1].base_stat,
		      		pokemonInfo.specialAttack = pokemonInfo.allInfo.data.stats[2].base_stat,
		      		pokemonInfo.defense = pokemonInfo.allInfo.data.stats[3].base_stat,
		      		pokemonInfo.attack = pokemonInfo.allInfo.data.stats[4].base_stat,
		      		pokemonInfo.hp = pokemonInfo.allInfo.data.stats[5].base_stat,
		      		pokemonInfo.ID = pokemonInfo.allInfo.data.id
		      	))
		      .catch(error => (
		        	console.log(error),
			        // user entered an invalid pokemon
			        this.invalidPokemon = 'Pokemon not found, try again',
			        pokemonInfo.ID = '0',
			        pokemonInfo.speed = '?',
		      		pokemonInfo.specialDefense = '?',
		      		pokemonInfo.specialAttack = '?',
		      		pokemonInfo.defense = '?',
		      		pokemonInfo.attack = '?',
		      		pokemonInfo.hp = '?'
		      ));
		      
		}

	};
	
</script>


<style scoped>
	
	.pokemonCard{
		margin: 10px;
	}
	
	.pokemon{
		cursor: pointer;
	}

	.pokemon:hover{
		background-color: #ffebe6;
	}


</style>







