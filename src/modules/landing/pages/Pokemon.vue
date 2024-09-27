<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="flex flex-col h-screen">
      <header class="flex items-center h-14 px-4 border-b border-gray-300 sm:h-16 md:px-6 lg:px-8">
        <div>
          <a class="flex items-center gap-2 font-semibold" href="/">
            <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="40" height="40" />
          </a>
        </div>
      </header>
  
      <main class="flex-1 flex items-center justify-center py-6">
        <div class="text-center">
          <h2 class="text-3xl font-bold mb-4">Pokémon Details</h2>
          <div v-if="pokemon">
            <img :src="pokemon.sprites.front_default" :alt="pokemon.name" class="w-32 h-32 mx-auto" />
            <h3 class="text-2xl font-bold">{{ capitalize(pokemon.name) }}</h3>
            <p>ID: {{ pokemon.id }}</p>
            <div v-if="pokemon.abilities.length">
              <h4 class="text-lg font-semibold mt-4">Habilidades:</h4>
              <ul>
                <li v-for="(ability, index) in pokemon.abilities" :key="index">
                  {{ capitalize(ability.ability.name) }} 
                  <span v-if="ability.is_hidden">(Oculta)</span>
                </li>
              </ul>
            </div>
          </div>
          <div v-else-if="error">
            <p class="text-red-500">{{ error }}</p>
          </div>
          <div v-else>
            <p>Cargando...</p>
          </div>
        </div>
      </main>
  
      <footer class="flex items-center h-14 px-4 border-t border-gray-300 sm:h-16 md:px-6 lg:px-8">
        <p class="flex-1 text-sm text-gray-500 text-center">
          © 2024 Acme Corporation. Derechos reservados
        </p>
      </footer>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  
  export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Pokemon', // Asegúrate de que este nombre sea único
    data() {
      return {
        pokemon: null,
        error: null
      };
    },
    methods: {
      fetchPokemon(id) {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
          .then(response => {
            this.pokemon = response.data;
          })
          .catch(error => {
            console.error(error);
            this.error = "Error al cargar el Pokémon.";
          });
      },
      capitalize(value) {
        if (!value) return '';
        return value.charAt(0).toUpperCase() + value.slice(1);
      }
    },
    mounted() {
      const pokemonId = this.$route.params.id;
      this.fetchPokemon(pokemonId);
    }
  };
  </script>
  
  <style scoped>
  /* Estilos personalizados si los necesitas */
  </style>
  