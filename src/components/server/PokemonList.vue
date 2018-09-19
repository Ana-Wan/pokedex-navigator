<template>
	<div class="row">
			<div class="col-md-4" v-for="(pokemon, index) in pokemons">
				<pteam-pokemon :pokemon="pokemon" @click.native="deletePokemon(index)" > 	
				</pteam-pokemon>	
			</div>
	</div>
</template>

<script>
	import Pokemon from './Pokemon.vue'

	export default {

		props : ['pokemons'],
		methods: {
			deletePokemon(index) {
				this.$emit('pokemonDeleted', index);
			}
		},


		components : {
			'pteam-pokemon' : Pokemon
		}

	};
	
</script>


<style scoped>
	
</style>







