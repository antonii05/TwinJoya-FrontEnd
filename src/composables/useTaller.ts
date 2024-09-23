import { ref } from 'vue';
import type { Taller } from '@/models/Taller';
import TallerApi from '@/api/TallerApi';

export const useTaller = () => {
    const talleres = ref([] as Taller[]);

    const cargarTalleres = async () => {
        try {
            talleres.value = await TallerApi.getTalleres();
        } catch (error) {
            console.log('Error en la carga de empresas ERROR: ' + error);
        }
    };

    return { talleres, cargarTalleres };
};
