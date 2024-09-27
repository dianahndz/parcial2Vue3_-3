<template>
  <header>
    <nav class="navbar">
      <ul class="nav-links">
        <li><router-link to="/">Principal Página</router-link></li>
        <li><router-link :to="{ name: 'FeaturesPagina' }">Features Página</router-link></li>
        <li><router-link :to="{ name: 'ContactoPagina' }">Contacto Página</router-link></li>
        <li><router-link :to="{ name: 'PreciosPagina' }">Precios Página</router-link></li>
        <li><router-link :to="{ name: 'loginpagina' }">Iniciar Sesión</router-link></li>
        <li><router-link :to="{ name: 'Pokemon', params: { id: 1 } }">Pokemon</router-link></li>
      </ul>
    </nav>
  </header>
  <main>
    <router-view />
  </main>
</template>

<script lang="ts" setup>
</script>

<style scoped>
/* Estilos básicos para el menú de navegación */
.navbar {
  background-color: #25ebd0;
  padding: 10px;
}

.nav-links {
  list-style-type: none;
  display: flex;
  justify-content: space-around;
}

.nav-links li {
  display: inline;
}

.nav-links a {
  color: white;
  text-decoration: none;
  padding: 10px 20px;
}

.nav-links a:hover {
  background-color: #c184e9;
  border-radius: 5px;
}
</style>
