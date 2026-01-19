<template>
    <n-card
        content-style="padding: 0"
        footer-style="background-color: #ededed; margin: 20px; border-radius: 5px; padding: 0 12px 0 12px;"
        class="carte"
    >
        <template #header>{{ shroom.name }}</template>
        <template #cover>
            <img :src="apiUrl + shroom.sprite" :alt="shroom.name" class="sprite">
        </template>
        <p>{{ shroom.description }}</p>
    </n-card>
</template>





<script lang="ts" setup>
    import type { PropType } from 'vue';
    import type { Shroom } from '../../types/common.type';
    
    const apiUrl = import.meta.env.VITE_API_URL

    // Props ou on passe un pokemon pour l'afficher dans la carte
    defineProps({
        shroom: {
            type: Object as PropType<Shroom>,
            required: true
        }
    });
</script>





<style scoped>
    p {
        text-align: justify;
        margin: 0;
    }

    .sprite {
        height: 150px;
        object-fit: contain;
    }

    .carte {
        border-radius: 5px;
        box-shadow: 0 4px 10px lightgray; 
        width: 300px;
        height: 400px;
        padding: 0 20px;
    }
</style>