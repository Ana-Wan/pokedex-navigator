<template>
	<div class="row">
		<div class="col-md-12">
			<div id="header">
				<img src="../../assets/icons/pokeball.png" id="pokeballIcon">
				<h1>Pok&eacute;dex</h1>
			</div>
			<div class="progress">
			  <div class="progress-bar bg-danger" role="progressbar" :style="{ width: (PokemonCount / 6) * 100 + '%' }" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"
			    >{{ PokemonCount }} / {{ maxPokemon }}</div>
			</div>
			
		</div>
	</div> 
</template>


<script>
	export default {
		
		props : {
			PokemonCount : Number,
			maxPokemon : Number
		},

	};


	
</script>


<style scoped>

	#header {
		margin-bottom: 30px;
	}

	#pokeballIcon{
		width: 40px;
		height: 40px;
		float: left;
		margin-right: 10px;
	}

</style>







