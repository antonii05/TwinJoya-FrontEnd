import type { Seccion } from '@/models/Seccion';
import axios, { type AxiosError, type AxiosResponse } from 'axios';

export default {
    name: 'SeccionesApi',

    //Secciones
    async getSecciones(): Promise<Seccion[]> {
        return axios
            .get('/secciones/getSecciones')
            .then((response: AxiosResponse) => {
                return response.data;
            })
            .catch((error: AxiosError) => {
                throw error.response?.data;
            });
    },
    async eliminarSeccion(idSeccion: number) {
        return axios
            .delete('/secciones/eliminar/' + idSeccion)
            .then((response: AxiosResponse) => {
                return response.data;
            })
            .catch((error: AxiosError) => {
                throw error.response?.data;
            });
    },
    async actualizarSecciones(secciones: Seccion[]) {
        return axios
            .put('/secciones/actualizar', secciones)
            .then((response: AxiosResponse) => {
                console.log(response.data);
                return response;
            })
            .catch((error: AxiosError) => {
                throw error.response?.data;
            });
    },
};
