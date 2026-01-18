<template>
  <n-menu :options="menuOptions" mode="horizontal"/>
</template>

<script lang="ts" setup>
import {computed} from 'vue'
import {useRouter} from 'vue-router'

const router = useRouter();

const menuOptions = computed(() => [
    {
        label: 'Accueil',
        key: 'home',
        onClick: () => {
            router.push('/');
        }
    },
    {
        label: 'Shrooms',
        key: 'shrooms',
        onClick: () => {
            router.push('/shrooms');
        }
    },
    {
        label: 'Login',
        key: 'login',
        onClick: () => {
            router.push('/login');
        }
    }
]);
</script>
