import { createRouter, createWebHistory } from 'vue-router';
import PrincipalPagina from '@/modules/landing/pages/PrincipalPagina.vue';
import ContactoPagina from '@/modules/landing/pages/ContactoPagina.vue';
import PreciosPagina from '@/modules/landing/pages/PreciosPagina.vue';
import FeaturesPagina from '@/modules/landing/pages/FeaturesPagina.vue';
import LoginPagina from '@/modules/landing/pages/LoginPagina.vue';
import Pokemon from '@/modules/landing/pages/Pokemon.vue';

const routes = [
    {
        path: '/',
        name: 'PrincipalPagina',
        component: PrincipalPagina,
    },
    {
        path: '/contacto',
        name: 'ContactoPagina',
        component: ContactoPagina,
    },
    {
        path: '/precios',
        name: 'PreciosPagina',
        component: PreciosPagina,
    },
    {
        path: '/features',
        name: 'FeaturesPagina',
        component: FeaturesPagina,
    },
    {
        path: '/login',
        name: 'loginpagina', // Asegúrate de que el nombre coincida
        component: LoginPagina,
    },
    {
        path: '/pokemon/:id',
        name: 'Pokemon',
        component: Pokemon,
    },
];

export const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

export default router;
