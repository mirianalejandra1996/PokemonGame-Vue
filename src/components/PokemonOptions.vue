<template>
  <h3>Opciones</h3>
  <div class="options-container">
    <ul>
     <li v-for="pokemon in this.pokemons" :key="pokemon.id" @click="$emit('selection',pokemon.id)">{{pokemon.name}} </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    pokemons: {
      type: Array,
      required: true
    }
  },
  // ! new from vue 3!
  emits: ["selection"],
}
</script>

<style scoped>
ul {
    list-style-type: none;
    margin-bottom: 2rem;
    width: 250px;

}
li {
    background-color: white;
    border-radius: 5px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    cursor: pointer;
    margin-bottom: 10px;
    width:100%;
    padding: .5rem;
}

li:hover {
    background-color: rgba(0, 0, 0, 0.05);
}

.options-container {
    display: flex;
    justify-content: center;
}

h3 {
  margin: 3rem 0 1rem;
}

@media (max-width: 576px) {
ul {
    margin-bottom: 1rem;
    width: 80%;
}

h3 {
  margin: 1rem 0 1rem;
}
}
</style>