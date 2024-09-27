<template>
  <div class="flex flex-col h-screen">
    <header
      class="flex items-center h-14 px-4 border-b border-gray-300 sm:h-16 md:px-6 lg:px-8"
    ></header>

    <main class="flex-1 flex items-center justify-center py-6">
      <div class="text-center">
        <h2 class="text-3xl font-bold">Bienvenido a La Puerta del Diablo</h2>
        <p>Descubre más sobre este hermoso lugar.</p>
      </div>
    </main>

    <section class="flex-1 flex items-center justify-center py-6">
      <div class="w-full max-w-[1200px] mx-auto flex gap-6">
        <div class="flex-1">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7400.597801170083!2d-89.18987505164525!3d13.624854599232597!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f6333dd4dd8b4a9%3A0x64ab35fb0d7621fa!2sPuerta%20del%20Diablo!5e0!3m2!1ses!2ssv!4v1726934601697!5m2!1ses!2ssv"
            width="100%"
            height="450"
            frameborder="0"
            style="border: 0"
            allowfullscreen=""
            aria-hidden="false"
            tabindex="0"
          ></iframe>
        </div>

        <div class="w-1/3">
          <h2 class="text-3xl font-bold text-center mb-4">Contáctanos</h2>
          <p class="text-center text-gray-500 mb-6">
            Envía un mensaje a nuestro correo electrónico:
          </p>
          <form @submit.prevent="sendEmail" class="bg-white shadow-md rounded-lg p-6">
            <div class="mb-4">
              <label for="email" class="block text-gray-700">Correo Electrónico:</label>
              <input
                type="email"
                v-model="email"
                id="email"
                class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-400"
                placeholder="Introduce tu correo"
                required
              />
            </div>
            <div class="mb-4">
              <label for="message" class="block text-gray-700">Mensaje:</label>
              <textarea
                v-model="message"
                id="message"
                class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-400"
                placeholder="Escribe tu mensaje aquí"
                rows="4"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              class="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-200"
            >
              Enviar
            </button>
            <p v-if="statusMessage" class="mt-4 text-center text-green-500">{{ statusMessage }}</p>
          </form>
        </div>
      </div>
    </section>

    <footer class="flex items-center h-14 px-4 border-t border-gray-300 sm:h-16 md:px-6 lg:px-8">
      <p class="flex-1 text-sm text-gray-500 text-center">
        © 2024 Acme Corporation. Derechos reservados
      </p>
    </footer>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      email: '',
      message: '',
      statusMessage: '',
    };
  },
  methods: {
    async sendEmail() {
      try {
        const response = await axios.post('http://localhost:3000/send-email', {
          email: this.email,
          message: this.message,
        });
        if (response.status === 200) {
          this.statusMessage = 'Correo enviado correctamente';
          this.email = '';
          this.message = '';
        }
      } catch (error) {
        console.error('Error al enviar el correo:', error);
        this.statusMessage = 'Error al enviar el correo';
      }
    },
  },
};
</script>

<style scoped>
/* Estilo adicional si es necesario */
</style>
