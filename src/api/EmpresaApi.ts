import axios from 'axios';
import type { AxiosError, AxiosResponse } from 'axios';
import type { Empresa } from '@/models/Empresa';

export default {
    name: 'EmpresaApi',
    async getEmpresas(): Promise<Empresa[]> {
        return axios
            .get('/empresas/getEmpresas')
            .then((response: AxiosResponse) => {
                return response.data;
            })
            .catch((error: AxiosError) => {
                throw error.response?.data;
            });
    },
};
