import axios from 'axios';
import type { AxiosError, AxiosResponse } from 'axios';
import type { Taller } from '@/models/Taller';

export default {
    name: 'TallerApi',
    async getTalleres(): Promise<Taller[]> {
        return axios
            .get('/talleres/getTalleres')
            .then((response: AxiosResponse) => {
                return response.data;
            })
            .catch((error: AxiosError) => {
                throw error.response?.data;
            });
    },
};
