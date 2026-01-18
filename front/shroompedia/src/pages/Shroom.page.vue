<template>
    <h1>Liste des Shrooms</h1>

    <ShroomListComponent/>
</template>

<style scoped>
    h1 {
        text-align: center;
    }
</style>

<script lang="ts" setup>
    import { useShroomStore } from '@/stores/shroom.store';
    import { onMounted } from 'vue';
    import ShroomListComponent from '@/components/shrooms/ShroomList.component.vue';
    import router from '@/router';

    const shroomStore = useShroomStore()

    onMounted(async () => {
        await shroomStore.getShroomsList()

        if (shroomStore.shrooms.length == 0) {
            alert("Il faut être connecté pour voir les champignons")
            router.push('/login')
        }
    })

</script>