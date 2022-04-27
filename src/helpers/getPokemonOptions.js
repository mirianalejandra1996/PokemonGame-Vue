import pokemonApi from "@/api/pokemonApi";
//   I can use an endpoint with a range o pokemons, for example, to get 650 pokemons in array with the endpoint, which would be the best way to work

// but I will make the request 4 times, just for learning.

const getPokemons = () => {
  const pokemonsArr = Array.from(Array(650));
  //   const pokemonsArr = Array.from({ length: 650 }, (x, i) => i + 1);
  //   const pokemonsArr = [...Array(650)];
  //   const pokemonsArr = Array(650).fill();

  return pokemonsArr.map((_, i) => i + 1);
};

const getPokemonOptions = async () => {
  const shuffledPokemons = getPokemons().sort(() => Math.random() - 0.5);
  const pokemons = await getPokemonNames(shuffledPokemons.splice(0, 4));
  // console.table(pokemons);

  return pokemons;
};

// I can destructure my elements
const getPokemonNames = async ([n1, n2, n3, n4] = []) => {
  const promiseArr = [
    await pokemonApi.get(`/${n1}`),
    await pokemonApi.get(`/${n2}`),
    await pokemonApi.get(`/${n3}`),
    await pokemonApi.get(`/${n4}`),
  ];

  const [p1, p2, p3, p4] = await Promise.all(promiseArr);

  return [
    { name: p1.data.name, id: p1.data.id },
    { name: p2.data.name, id: p2.data.id },
    { name: p3.data.name, id: p3.data.id },
    { name: p4.data.name, id: p4.data.id },
  ];
};

export default getPokemonOptions;
