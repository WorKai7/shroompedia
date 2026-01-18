<template>
    <h1>Accueil Shroompedia</h1>

    <hr>

    <div class="cta">
        <h2>Découvrez l'encyclopédie du jeu culte ShroomTD !</h2>
    
        <n-button type="primary" @click="redirect()">En savoir plus</n-button>

        <img :src="chemin" alt="">
    </div>

    <hr>
</template>


<script lang="ts" setup>
    import router from '@/router';
    import { useUserStore } from '@/stores/user.store';

    const apiUrl = import.meta.env.VITE_API_URL

    const userStore = useUserStore()

    const chemin = apiUrl + "/images/splash.png"

    const redirect = () => {
        if (userStore.isAuthenticated) {
            router.push('/shrooms')
        }

        else {
            router.push('/login')
        }
    }
</script>


<style scoped>
    h1 {
        text-align: center;
    }

    .cta {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 20px;
        gap: 25px;
    }

    img {
        height: 500px;
        transition: all ease 1s;
        border-radius: 15px;
    }

    img:hover {
        scale: 1.05;
        border-radius: 30px;
    }
</style>