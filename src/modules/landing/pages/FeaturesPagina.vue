<template>
  <div class="background">
    <div class="informacion-container">
      <h1>Turismo SVC: La Puerta del Diablo</h1>
      <h2>¿Por qué ir a La Puerta del Diablo?</h2>
      <p>
        La Puerta del Diablo es una formación rocosa, es decir, un conjunto de rocas aisladas que logran formar en sí una unidad con belleza paisajística. Sus áreas verdes, la neblina que se mezcla con su belleza y tranquilidad, más la grieta que se encuentra formada por dos peñascos enclavados por el cerro El Chulo son los principales atractivos de este grandioso lugar que logra atraer a muchos turistas de todas partes del mundo.
      </p>
      <h2>Su riqueza histórica</h2>
      <p>
        O más que histórica, pudiésemos decir que legendaria y mitológica, pues según unos historiadores, el diablo se enamoró profundamente de una joven, su atracción hacia ella pasó a convertirse en una obsesión.
      </p>
      <h2>Su hermosa vista</h2>
      <img src="https://www.noticiaslagaceta.com/wp-content/uploads/2023/12/Puerta-del-Diablo-1.jpg" alt="La Puerta del Diablo" class="puerta-img"/>
    </div>
  </div>
</template>

<script lang="ts" setup>
</script>

<style scoped>
.background {
  background-image: url('https://www.noticiaslagaceta.com/wp-content/uploads/2023/12/Puerta-del-Diablo-1.jpg');
  background-size: cover;
  background-position: center;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.informacion-container {
  padding: 30px;
  background-color: rgba(255, 255, 255, 0.95);
  color: #333;
  border-radius: 15px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.3);
  max-width: 600px; /* Ancho máximo ajustado */
  margin: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  overflow-y: auto; /* Permite el desplazamiento si hay mucho contenido */
  max-height: 90vh; /* Limita la altura del contenedor */
}

h1 {
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: #2c3e50;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.4);
}

h2 {
  font-size: 1.8rem;
  margin-top: 20px;
  margin-bottom: 15px;
  color: #34495e;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
}

p {
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 15px;
  padding: 0 10px; /* Padding lateral para evitar que el texto toque los bordes */
}

.puerta-img {
  width: 80%; /* Ajusta el tamaño de la imagen */
  max-width: 300px; /* Máximo ancho para la imagen */
  border-radius: 10px; /* Esquinas redondeadas */
  margin-top: 20px; /* Espacio superior */
  box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3); /* Sombra para dar profundidad */
}
</style>