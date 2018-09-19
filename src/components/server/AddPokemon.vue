<template>
	<div>
		<form>
			<div class="form-group">
				<label>Add your Pokemon </label>
				<input  type="text" name="pokemon" class="form-control" v-model="pokemon" > 
			</div>

			<div class="form-group">
				<button @click.prevent="AddPokemon()" class="btn btn-primary">Add Pokemon</button>
			</div>
			
		</form>
	</div>

</template>

<script> 

	export default {
		data : function(){
			return {
				pokemon: ''
			};
		},
		methods : {
			AddPokemon() {

				    if(this.pokemon == '' ){
						alert("Please input a Pokemon"); // user input an empty field
					} else {
						this.$emit('pokemonAdded', this.pokemon); // emits the pokemon and its info to the parent component
						this.pokemon = '';
					}
			}
		},
		
		
	};
	
</script>


<style scoped>

	div {
		margin-top: 30px;
	}
	
</style>







