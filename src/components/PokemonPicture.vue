<template>

<div class="pokemon-container">
  <img :src="imgSrc" alt="pokemon" class="hidden-pokemon">
  <img v-if="showPokemon" :src="imgSrc" alt="pokemon" class="fade-in">
</div>
</template>

<script>
export default {
    props: {
      pokemonId : {
        type: Number,
        required : true,
      },
      showPokemon : {
        type : Boolean,
        required: true,
        default: false,
      },
    },
    computed : {
      imgSrc () {
        return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.pokemonId}.svg`;
      }
    }
}
</script>

// El scoped es para que estos estilos no queden de manera global, para que solo se apliquen a este componente
<style scoped>

.pokemon-container {
    height: 200px;
    margin-top: 2rem;
    position: relative
}
img {
  height: 100%;
  position: absolute;
  width: 100vw;
  margin-left: -50vw;
  user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
}
.hidden-pokemon {
    filter: brightness(0);
}

@media (max-width: 576px) {

  .pokemon-container {
    height: 150px;
}
}
</style>