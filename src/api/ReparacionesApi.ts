import axios from 'axios';
import type { AxiosError, AxiosResponse } from 'axios';
import type { Reparacion } from '@/models/Reparacion';

export default {
    name: 'ReparacionesApi',
    async getReparaciones(): Promise<Reparacion[]> {
        return axios
            .get('/reparaciones/getReparaciones')
            .then((response: AxiosResponse) => {
                return response.data;
            })
            .catch((error: AxiosError) => {
                throw error.response?.data;
            });
    },
    async getReparacion(id: number): Promise<Reparacion> {
        return axios
            .get('/reparaciones/getReparacion/' + id)
            .then((response: AxiosResponse) => {
                return response.data;
            })
            .catch((error: AxiosError) => {
                throw error.response?.data;
            });
    },
    async crear(newReparacion: Reparacion) {
        return axios
            .post('/reparaciones/crear', newReparacion)
            .then((response: AxiosResponse) => {
                return response.data;
            })
            .catch((error: AxiosError) => {
                throw error.response?.data;
            });
    },
    async actualizar(newReparacion: Reparacion) {
        return axios
            .put('/reparaciones/actualizar', newReparacion)
            .then((response: AxiosResponse) => {
                return response.data;
            })
            .catch((error: AxiosError) => {
                throw error.response?.data;
            });
    },
    async eliminar(id: number) {
        return axios
            .delete('/reparaciones/eliminar/' + id)
            .then((response: AxiosResponse) => {
                return response.data;
            })
            .catch((error: AxiosError) => {
                throw error.response?.data;
            });
    },
};
