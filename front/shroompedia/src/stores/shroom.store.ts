import {defineStore} from 'pinia';
import { getShrooms } from '@/apis/shroom.api';
import { ref } from 'vue';
import type { Shroom } from '../types/common.type';

export const useShroomStore = defineStore('shroom', () => {
    const shrooms = ref<Shroom[]>([]);

    const getShroomsList = async () => {
        try {
            shrooms.value = await getShrooms();
        } catch (error: any) {
            console.log(error.message);
            throw error;
        }
    }

    return {getShroomsList, shrooms};
});
