<template>
    <div class="list">
        <div v-for="shroom in shroomStore.shrooms">
            <ShroomCardComponent :shroom="shroom" />
        </div>
    </div>
</template>


<script setup lang="ts">
    import ShroomCardComponent from './ShroomCard.component.vue';
    import { useShroomStore } from '@/stores/shroom.store';

    const shroomStore = useShroomStore()


</script>


<style scoped>
    .list {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: 30px;
        margin: 50px;
    }
</style>