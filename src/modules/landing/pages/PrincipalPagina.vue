<template>
  <div class="welcome-container">
    <h1>¡Parque Natural Puerta Del Diablo, El Salvador!</h1>
    <p>Nos alegra mucho que estés aquí. Explora nuestras funcionalidades y encuentra lo que necesitas.</p>
  </div>
</template>

<script lang="ts" setup>
</script>

<style scoped>
/* Estilos para la página principal */
.welcome-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 80vh;
  background: url('https://elsalvadoresbello.com/wp-content/uploads/2019/01/Puerta-del-Diablo-El-Salvador-es-Bello-1275x850.jpg') no-repeat center center;
  background-size: cover; /* Asegura que cubra toda la sección */
  color: white;
  padding: 20px;
  border-radius: 15px; /* Esquinas más redondeadas */
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5); /* Sombra para dar profundidad */
}

h1 {
  font-size: 3.5rem; /* Aumenta el tamaño del texto */
  margin-bottom: 20px;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7); /* Sombra para mejorar la legibilidad */
}

p {
  font-size: 1.5rem;
  max-width: 600px;
  margin: 0 auto; /* Centra el texto */
  line-height: 1.6; /* Mejora la legibilidad */
}
</style>

