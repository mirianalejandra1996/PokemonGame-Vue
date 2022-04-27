<template>

<h1 v-if="!pokemon">Espere un momento...</h1>
<div v-else>
  <h1>¿Quién es este pokémon?</h1>
  <PokemonPicture :pokemonId="pokemon.id" :showPokemon="showPokemon" />
  <PokemonOptions :pokemons="pokemonsArr" @selection="checkAnswer"/>

  <!-- <template v-if="showAnswer" class="fade-in"> -->
  <div v-if="showAnswer" class="fade-in answer-container">
    <h2 class="answer">{{message}}</h2>
    <button @click="newGame" >Intentar de nuevo</button>
  <!-- </template> -->
  </div>
</div>
</template>

<script>
import PokemonPicture from "@/components/PokemonPicture";
import PokemonOptions from "@/components/PokemonOptions";
import getPokemonOptions from "@/helpers/getPokemonOptions.js";

export default {
  components: {
    PokemonPicture,
    PokemonOptions,
  },
  // data: () => {
  data() {
    return {
      pokemonsArr: [],
      pokemon: null,
      showPokemon: false,
      showAnswer: false,
      message: '',
    }
  },
  methods: {
    async mixPokemonArr (){
      this.pokemonsArr = await getPokemonOptions()
      // Now with mounted, this is a reactive object (because this object has handler and Target property)
      // I want a random number between 0 - 3 because my array has a length of 4 elements
      const randomPosition = Math.floor( Math.random() * 4)
      this.pokemon = this.pokemonsArr[randomPosition]
    },
    checkAnswer(selectedId) {
      this.showPokemon = true;
      this.message = selectedId === this.pokemon.id ? `Correcto! El pokemón es ${this.pokemon.name}` : `Te equivocaste! El pokemón es ${this.pokemon.name}`
      this.showAnswer = true;

    },
    newGame(){
      this.pokemonsArr = []
      this.pokemon = null
      this.showPokemon = false
      this.showAnswer= false
      this.message = ''
      this.mixPokemonArr()
    }
  },
  mounted() {
  // mounted: async () => {
    this.mixPokemonArr()
  }
};
</script>

<style scoped>
.answer-container{
    display: flex;
    flex-direction: column;
    align-items: center;
}


@media (max-width: 576px) { 
.answer-container{
  width: 100%;
}

.answer{
  font-size: 1.2rem;
  width: 80%;
}

}
</style>