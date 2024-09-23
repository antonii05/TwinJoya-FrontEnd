import { ref } from 'vue';
import type { Empresa } from '@/models/Empresa';
import EmpresaApi from '@/api/EmpresaApi';

export const useEmpresa = () => {
    const empresas = ref([] as Empresa[]);

    const cargarEmpresas = async () => {
        try {
            empresas.value = await EmpresaApi.getEmpresas();
        } catch (error) {
            console.log('Error en la carga de empresas ERROR: ' + error);
        }
    };

    return { empresas, cargarEmpresas };
};
