<template>
  <div
    v-if="!isLoggedIn"
    class="login-container bg-cover bg-center bg-fixed"
    style="background-image: url('https://i0.wp.com/elsalvadorinenglish.com/wp-content/uploads/2023/12/Cover-Wordpress-17.png?fit=1170%2C610&ssl=1');"
  >
    <h2>Inicio de Sesión</h2>
    <form @submit.prevent="login" class="login-form">
      <div class="form-group">
        <label for="email">Correo Electrónico:</label>
        <input type="email" v-model="email" required />
      </div>
      <div class="form-group">
        <label for="password">Contraseña:</label>
        <input type="password" v-model="password" required />
      </div>
      <button type="submit" class="btn">Iniciar Sesión</button>
    </form>
  </div>

  <div v-else class="welcome-message">
    <h2>Bienvenido, {{ email }}</h2>
    <p>Estamos felices de tenerte aquí. Explora las maravillas que ofrecemos en La Puerta del Diablo.</p>
    <button @click="logout" class="btn">Cerrar Sesión</button>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const email = ref('');
const password = ref('');
const isLoggedIn = ref(false);
const router = useRouter();

const login = () => {
  if (email.value && password.value) {
    alert(`Inicio de sesión exitoso para ${email.value}`);
    isLoggedIn.value = true; // Cambia el estado de inicio de sesión
    router.push({ name: 'PrincipalPagina' }); // Redirige a la página principal
  } else {
    alert('Por favor, rellene todos los campos.');
  }
};

const logout = () => {
  alert(`Sesión cerrada para ${email.value}`);
  isLoggedIn.value = false; // Restablece el estado de inicio de sesión
  email.value = ''; // Limpia el campo de correo
  password.value = ''; // Limpia el campo de contraseña
  router.push({ name: 'loginpagina' }); // Redirige a la página de inicio de sesión
};
</script>

<style scoped>
.login-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f4f4f4;
  padding: 20px;
  background-size: cover; /* Asegura que la imagen cubra el fondo sin estirarse */
  background-position: center; /* Centra la imagen */
}

h2 {
  margin-bottom: 20px;
  color: #fff; /* El texto ahora será blanco para que contraste mejor con el fondo */
}

.login-form {
  background-color: rgba(255, 255, 255, 0.8); /* Fondo semitransparente para que sea legible */
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  width: 300px;
}

.form-group {
  margin-bottom: 15px;
}

label {
  margin-bottom: 5px;
  font-weight: bold;
  color: #333;
}

input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

input:focus {
  border-color: #007bff;
  outline: none;
}

.btn {
  background-color: #007bff;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 100%;
}

.btn:hover {
  background-color: #0056b3;
}

.welcome-message {
  margin-top: 20px;
  text-align: center;
  color: #2c3e50;
  font-size: 1.2rem;
}
</style>
