<template>
  <div
    class="pricing-container bg-cover bg-center bg-fixed py-12 min-h-screen"
    style="background-image: url('https://i0.wp.com/elsalvadorinenglish.com/wp-content/uploads/2023/12/Cover-Wordpress-17.png?fit=1170%2C610&ssl=1');"
  >
    <div class="bg-white bg-opacity-80 p-10 rounded-lg shadow-lg max-w-6xl mx-auto">
      <h1 class="text-4xl font-bold text-center mb-12">Nuestros Planes de Precios</h1>

      <div class="pricing-cards grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Plan Básico -->
        <div class="pricing-card bg-white shadow-lg rounded-lg p-6 transform transition hover:scale-105">
          <h2 class="text-2xl font-semibold mb-4">Plan 1</h2>
          <p class="text-3xl font-bold text-blue-600 mb-6">$3.00</p>
          <ul class="mb-6">
            <li class="mb-3">Promoción para niños</li>
            <li class="mb-3">Guías turísticos</li>
            <li class="mb-3">Estudiantes con carné vigente</li>
          </ul>
          <button class="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">Elegir</button>
        </div>

        <!-- Plan Profesional -->
        <div class="pricing-card bg-white shadow-lg rounded-lg p-6 transform transition hover:scale-105">
          <h2 class="text-2xl font-semibold mb-4">Plan 2</h2>
          <p class="text-3xl font-bold text-blue-600 mb-6">$5.00</p>
          <ul class="mb-6">
            <li class="mb-3">Promoción para adultos</li>
            <li class="mb-3">Personas con discapacidad</li>
            <li class="mb-3">Entrada gratis a nuestros cafetines</li>
          </ul>
          <button class="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">Elegir</button>
        </div>

        <!-- Plan Empresarial -->
        <div class="pricing-card bg-white shadow-lg rounded-lg p-6 transform transition hover:scale-105">
          <h2 class="text-2xl font-semibold mb-4">Plan 3</h2>
          <p class="text-3xl font-bold text-blue-600 mb-6">$10.00</p>
          <ul class="mb-6">
            <li class="mb-3">Promoción para extranjeros</li>
            <li class="mb-3">Acceso a cafetines</li>
            <li class="mb-3">Acceso a nuestras caminatas</li>
          </ul>
          <button class="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">Elegir</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
</script>

<style scoped>
/* Estilos opcionales */
</style>
